import{
    decimalSeparator,userLocale,navigator_language,userTimeZone,usTimeZones,

    last_row_after_header,
  
    currencyht_nbnb,currencyht_toshow_nbnb,afterdigit_nbnb, smallafterdigit_nbnb, afterdigitsmallnb_nbnb,
    bignb_nbnb,smallnb_nbnb,decimalnumbers_toshow_withoutrenderer_innumbers_nbnb,usegrouping_nbnb_if_true,
    is_negativenb_accepted_nbnb,
    // is_float_accepted_nbnb,
  
    currencyht_intint,currencyht_toshow_intint,afterdigit_intint,smallafterdigit_intint,afterdigitsmallnb_intint,
    bignb_intint,smallnb_intint,decimalnumbers_toshow_withoutrenderer_innumbers_intint,usegrouping_intint_if_true,
    is_negativenb_accepted_intint,is_float_accepted_intint,
  
    afterdigit_percentage_percperc,smallafterdigit_percentage_percperc,afterdigitsmallnb_percentage_percperc,
    bignbpercent_percperc,smallnbpercent_percperc,decimalnumbers_toshow_withoutrenderer_inpercentage_percperc,
    is_negativenb_accepted_percperc,is_float_accepted_percperc,
  
    emails_length_em,
     phonenumbers_length_pn,
    onlynumbers_length_on
  } from './intials_inputs_nb.js';

  import { comments_messages } from './comments_messages.js'

  
export function afterValidatefct(isValid, oldvalue, row, prop, source, ...otherArgs){
            const hot = otherArgs[otherArgs.length - 1];

//afterValidate: function (isValid, oldvalue, row, prop, source) {
            const commentsPlugin = hot.getPlugin('comments');
            var condition_split=true;
            if(prop==3 || prop==4 || prop==5 || prop==10){ // afterValidate of percentage,  editable the index later 
        

        console.log(isValid)
        console.log(oldvalue)
        console.log(source)
          console.log('we are inside aftervalidate prop==2')
          if (isValid && oldvalue == null ) {
            console.log('condition percentage 1')
            console.log('we are inside afterValidate percentage value==null')
            console.log('COULD END HERE')
            commentsPlugin.removeCommentAtCell(row, prop);
          } else if (isValid && oldvalue !== undefined && typeof oldvalue === 'string'){
            if(Math.abs(Number(oldvalue.toString().replace('%','').replace(',','.').replace(/\s+/g, '').trim()))>bignbpercent_percperc){
              console.log('condition percentage 1,2')
              console.log('if the number is too big')
              //commentsPlugin.setCommentAtCell(row, prop, "La valeur que vous avez saisie dépasse la limite autorisée !!");
              commentsPlugin.setCommentAtCell(row, prop,comments_messages(oldvalue,'limit_autor','fr-FR'))
              hot.setDataAtCell(row, prop,'','my_source_empty_percentage')
            } else if (Math.abs(Number(oldvalue.toString().replace('%','').replace(',','.').replace(/\s+/g, '').trim())  ) <smallnbpercent_percperc) {
              console.log('condition percentage 1,35')
              console.log('if the number is too small')
              //commentsPlugin.setCommentAtCell(row, prop, "La valeur que vous avez saisie dépasse la limite autorisée !!");
              //hot.setDataAtCell(row, prop,0,'my_source_empty_percentage')
              hot.setDataAtCell(row, prop,0,'my_source_convertitto_0')

              // to view later  
            } else if(/^[-+]?(\s*\d+)\s*%$/.test(oldvalue.toString().trim())){
              console.log('if the value is integer and with %')
              console.log('condition percentage 1,5')
              if((/\s+%$/.test(oldvalue.trim()) || /^[-+]\s/.test(oldvalue.trim())  ) ){ 
              // condition for removing leading zerors if((/\s+%$/.test(oldvalue.trim()) || /^[-+]\s/.test(oldvalue.trim()) || /^(\+|\-)?0+/.test(oldvalue.trim())  ) ){ 
                console.log('condition percentage 1,5.1')
                // removing leading zerors hot.setDataAtCell(row, prop, oldvalue.replace(/\s+/g, '').trim().replace(/^(\+|\-)?0+/, '$1'),'my_source_removewhitespacesign_percentage')
                hot.setDataAtCell(row, prop, oldvalue.replace(/\s+/g, '').trim(),'my_source_removewhitespacesign_percentage')
                commentsPlugin.removeCommentAtCell(row, prop);
              } else {
                if(Number(oldvalue.replace('%','').trim())<0 && is_negativenb_accepted_percperc==false){
                    commentsPlugin.setCommentAtCell(row, prop,comments_messages(value,'refuse_negative','fr-FR'))
                    hot.setDataAtCell(row, prop, '', 'my_source_empty');
                } else {
                  if(Number.isInteger(Number(oldvalue.replace('%','').trim()))==false && is_float_accepted_percperc==false ){
                    commentsPlugin.setCommentAtCell(row, prop,comments_messages(value,'refuse_float','fr-FR'))
                    hot.setDataAtCell(row, prop, '', 'my_source_empty');
                  } else {
                console.log('condition percentage 1,5.2');
                console.log('could end here');
                commentsPlugin.removeCommentAtCell(row, prop);
              }    
              }
              }
            } else if (/^[-+]?\s*\d+\s*$/.test(oldvalue.toString().trim())){
              console.log('if the value is integer and without %')
              console.log('condition percentage 1,7')
              if((/^[-+]\s/.test(oldvalue.trim()) )){ 
                console.log('condition percentage 1,7.1')
                hot.setDataAtCell(row, prop, oldvalue.replace(/\s+/g, '').trim()+'%','my_source_removewhitespacesign_percentage')
                commentsPlugin.removeCommentAtCell(row, prop);
              } else {
                if(Number(oldvalue.replace('%','').trim())<0 && is_negativenb_accepted_percperc==false){
                    commentsPlugin.setCommentAtCell(row, prop,comments_messages(value,'refuse_negative','fr-FR'))
                    hot.setDataAtCell(row, prop, '', 'my_source_empty');
                } else {
                  if(Number.isInteger(Number(oldvalue.replace('%','').trim()))==false && is_float_accepted_percperc==false ){
                    commentsPlugin.setCommentAtCell(row, prop,comments_messages(value,'refuse_float','fr-FR'))
                    hot.setDataAtCell(row, prop, '', 'my_source_empty');
                  } else {
                console.log('condition percentage 1,7.2');
                console.log('could end here');
                commentsPlugin.removeCommentAtCell(row, prop);
                  }
                }
              }

            } else if( /^[-+]?(\s*\d+(\.\d+)?)\s*$/.test(oldvalue.toString().trim())){
              console.log('condition percentage 2.1')
              if(decimalSeparator=='.'){    
                console.log('condition percentage 2.1.1')            
                  console.log(' "+ 15.63" or "12.36" or "19"  and without % , so we add it and we remove whitespaces')
                  //hot.setDataAtCell(row, prop, oldvalue.replace(/\s+/g, '').trim()+'%')
                  hot.setDataAtCell(row, prop, Number(oldvalue.replace(/\s+/g, '').trim()).toFixed(decimalnumbers_toshow_withoutrenderer_inpercentage_percperc).replace(/\.?0+$/, "")+'%','my_source_removewhitespacesign_percentage')

                  commentsPlugin.removeCommentAtCell(row, prop);

              } else if (decimalSeparator==','){
                console.log('condition percentage 2.1.2')            
                  console.log('may cause problem')
                  //commentsPlugin.setCommentAtCell(row, prop, "la valeur '" + oldvalue + "' n'est pas valide , Essayer de corriger l'ecriture selon le format de vos paramétres  |  " + oldvalue.replace(/\s+/g, '').trim().replace('.', ',') + " est correct (virguale à la place du point)");
                  //commentsPlugin.setCommentAtCell(row, prop, "la valeur '" + oldvalue + "' n'est pas valide , Essayer de corriger l'ecriture selon le format de vos paramétres  |  " + oldvalue.replace(/\s+/g, '').trim().replace('.', ',') + " est correct (virguale à la place du point)");
                  commentsPlugin.setCommentAtCell(row, prop,comments_messages(oldvalue,'val_try_to_fix_comma_instead_dot','fr-FR'))

                  hot.setDataAtCell(row, prop, '', 'my_source_empty_percentage');
              }
            } else if(/^[-+]?(\s*\d+(,\d+)?)\s*$/.test(oldvalue.toString().trim())){
              console.log('condition percentage 2.2')
              if(decimalSeparator=='.'){
                console.log('condition percentage 2.2.1')
                  console.log('may cause problem')
                  //commentsPlugin.setCommentAtCell(row, prop, "la valeur '" + oldvalue + "' n'est pas valide , Essayer de corriger l'ecriture selon le format de vos paramétres  |  " + oldvalue.replace(/\s+/g, '').trim().replace(',', '.') + " est correct (point à la place de la virgule)");
                  commentsPlugin.setCommentAtCell(row, prop,comments_messages(oldvalue,'val_try_to_fix_dot_instead_comma','fr-FR'))

                  hot.setDataAtCell(row, prop, '', 'my_source_empty_percentage');
              } else if (decimalSeparator==','){
                console.log('condition percentage 2.2.2')
                console.log(' "+ 15,63" or "12,36" or "19"  and without % , so we add it and we remove whitespaces')
                hot.setDataAtCell(row, prop, Number(oldvalue.replace(/\s+/g, '').trim().replace(',','.')).toFixed(decimalnumbers_toshow_withoutrenderer_inpercentage_percperc).replace(/\.?0+$/, "").replace('.',',')+'%','my_source_removewhitespacesign_percentage')
                commentsPlugin.removeCommentAtCell(row, prop);

              }
            } else if (/^[-+]?(\s*\d+(\.\d+)?)\s*%$/.test(oldvalue.toString().trim())){
              console.log('condition percentage 2.3')
              if(decimalSeparator=='.'){
                console.log('condition percentage 2.3.1')
                if((/\s+%$/.test(oldvalue.trim()) || /^[-+]\s/.test(oldvalue.trim()) )){ 
                  console.log('condition percentage 2.3.1.1')
                  hot.setDataAtCell(row, prop, Number(oldvalue.replace(/\s+/g, '').trim().replace('%','')).toFixed(decimalnumbers_toshow_withoutrenderer_inpercentage_percperc).replace(/\.?0+$/, "")+'%','my_source_removewhitespacesign_percentage' )
                  commentsPlugin.removeCommentAtCell(row, prop);
                 } else {
                  if( (oldvalue.toString().replace('%','').split('.')[1] || '').length>decimalnumbers_toshow_withoutrenderer_inpercentage_percperc ) {
                    console.log('condition percentage 2.3.1.1.5')
                    if( Math.abs(Number(oldvalue.toString().replace('%','')))<smallafterdigit_percentage_percperc ){ // smallafterdigit_percentage_percperc like 0.01 in case of 2
                      hot.setDataAtCell(row, prop,0,'my_source_convertitto_0');
                      commentsPlugin.removeCommentAtCell(row, prop);
                    } else {                  
                    hot.setDataAtCell(row, prop, Number(oldvalue.toString().replace('%','')).toFixed(decimalnumbers_toshow_withoutrenderer_inpercentage_percperc).replace(/\.?0+$/, "")+'%','my_source_removegreaterdecimalnumbers_percentage' )
                    commentsPlugin.removeCommentAtCell(row, prop); 
                  }

                  } else {
                  if(Number(oldvalue.replace('%','').trim())<0 && is_negativenb_accepted_percperc==false){
                    commentsPlugin.setCommentAtCell(row, prop,comments_messages(value,'refuse_negative','fr-FR'))
                    hot.setDataAtCell(row, prop, '', 'my_source_empty');
                } else {
                  if(Number.isInteger(Number(oldvalue.replace('%','').trim()))==false && is_float_accepted_percperc==false ){
                    commentsPlugin.setCommentAtCell(row, prop,comments_messages(value,'refuse_float','fr-FR'))
                    hot.setDataAtCell(row, prop, '', 'my_source_empty');
                  } else {
                  console.log('condition percentage 2.3.1.2')
                  console.log('could end here')
                  commentsPlugin.removeCommentAtCell(row, prop);
                  }
                }
                }
                }
                } else if(decimalSeparator==','){
                  console.log('condition percentage 2.3.2')
                  //commentsPlugin.setCommentAtCell(row, prop, "la valeur '" + oldvalue + "' n'est pas valide , Essayer de corriger l'ecriture selon le format de vos paramétres  |  " + oldvalue.replace(/\s+/g, '').trim().replace('.', ',') + " est correct (virgule à la place du point)");
                  commentsPlugin.setCommentAtCell(row, prop,comments_messages(oldvalue,'val_try_to_fix_comma_instead_dot','fr-FR'))

                  hot.setDataAtCell(row, prop, '', 'my_source_empty_percentage');
                }
              } else if (/^[-+]?(\s*\d+(,\d+)?)\s*%$/.test(oldvalue.toString().trim())){
                console.log('condition percentage 2.4')
                console.log('aa')
                if(decimalSeparator=='.'){
                  console.log('condition percentage 2.4.1')
                  //commentsPlugin.setCommentAtCell(row, prop, "la valeur '" + oldvalue + "' n'est pas valide , Essayer de corriger l'ecriture selon le format de vos paramétres  |  " + oldvalue.replace(/\s+/g, '').trim().replace(',', '.') + " est correct (point à la place de la virgule)");
                  commentsPlugin.setCommentAtCell(row, prop,comments_messages(oldvalue,'val_try_to_fix_dot_instead_comma','fr-FR'))

                  hot.setDataAtCell(row, prop, '', 'my_source_empty_percentage');
                } else if (decimalSeparator==','){
                  console.log('condition percentage 2.4.2')
                    if((/\s+%$/.test(oldvalue.trim()) || /^[-+]\s/.test(oldvalue.trim()) )){ 
                      console.log('condition percentage 2.4.2.1')
                       hot.setDataAtCell(row, prop, Number(oldvalue.replace(/\s+/g, '').trim().replace('%','').replace(',','.')).toFixed(decimalnumbers_toshow_withoutrenderer_inpercentage_percperc).replace(/\.?0+$/, "").replace('.',',')+'%','my_source_removewhitespacesign_percentage' )
                       commentsPlugin.removeCommentAtCell(row, prop);
                     } else {
                       if( (oldvalue.toString().replace('%','').replace(',','.').split('.')[1] || '').length>decimalnumbers_toshow_withoutrenderer_inpercentage_percperc ){
                          console.log('condition percentage 2.4.2.1.5')
                             //console.log(oldvalue)
                            //console.log(Number(oldvalue.toString().replace('%','').replace(',','.'))<0 )
                            //if( Math.abs(Number(oldvalue.toString().replace('%','').replace(',','.'))) < smallafterdigit_percentage_percperc ){
                            //  console.log('cons1.1')
                            //  hot.setDataAtCell(row, prop, Number(oldvalue.toString().trim().replace('%','').replace(',','.')).toFixed(afterdigitsmallnb_percentage_percperc).replace(/\.?0+$/, "").replace('.',',')+'%','my_source_removegreaterdecimalnumbers_percentage' )
                            //  commentsPlugin.removeCommentAtCell(row, prop);
                           //   } else {
                            if( Math.abs(Number(oldvalue.toString().replace('%','').replace(',','.') ))<smallafterdigit_percentage_percperc ){ // smallafterdigit_percentage_percperc like 0.01 in case of 2
                              hot.setDataAtCell(row, prop,0,'my_source_convertitto_0');
                              commentsPlugin.removeCommentAtCell(row, prop);
                            } else {
                                console.log('cons1.2')
                                hot.setDataAtCell(row, prop, Number(oldvalue.toString().trim().replace('%','').replace(',','.')).toFixed(decimalnumbers_toshow_withoutrenderer_inpercentage_percperc).replace(/\.?0+$/, "").replace('.',',')+'%','my_source_removegreaterdecimalnumbers_percentage' )
                                commentsPlugin.removeCommentAtCell(row, prop);
                            }
                                // }

                       } else {
                        if(Number(oldvalue.replace('%','').replace(',','.').trim())<0 && is_negativenb_accepted_percperc==false){
                          commentsPlugin.setCommentAtCell(row, prop,comments_messages(value,'refuse_negative','fr-FR'))
                          hot.setDataAtCell(row, prop, '', 'my_source_empty');
                            } else {
                              if(Number.isInteger(Number(oldvalue.replace('%','').replace(',','.').trim()))==false && is_float_accepted_percperc==false ){
                    commentsPlugin.setCommentAtCell(row, prop,comments_messages(value,'refuse_float','fr-FR'))
                    hot.setDataAtCell(row, prop, '', 'my_source_empty');
                  } else {
                            console.log('condition percentage 2.4.2.2')
                            console.log('could end here')
                            commentsPlugin.removeCommentAtCell(row, prop);
                       }
                      }
                      }

                   }  
                }
           }
           } else if (oldvalue=='%'){
            //commentsPlugin.setCommentAtCell(row, prop, "la valeur '" + oldvalue + "' n'est pas valide ");
            console.log('condition percentage 2.%')
            hot.setDataAtCell(row, prop,'','my_source_empty_percentage')
           } else if ( oldvalue =='') {
            console.log('condition percentage 3')
            console.log('do nothing could end here')
            } else {
              console.log('condition percentage 4')
            //commentsPlugin.setCommentAtCell(row, prop, "la valeur '" + oldvalue + "' n'est pas valide ");
            commentsPlugin.setCommentAtCell(row, prop,comments_messages(oldvalue,'percentage_no_valid_isvalidfalse_end','fr-FR'))

            hot.setDataAtCell(row, prop,'','my_source_empty_percentage')

            console.log('do nothing could end here')
            console.log('removes')
          }
        }
        
            else if (prop==6  || prop==7  || prop==8  ||     prop==11  || prop==12  || prop==13 ) {  // afterValidate of numbers and amounts
          

          console.log('value : aftervalidate')
          console.log(oldvalue)
          console.log(typeof oldvalue)

          if (oldvalue !== null) {
            if (oldvalue.toString().includes(currencyht_nbnb) && currencyht_nbnb!=''   ) {
              console.log('new VALuE in afterValidator will be : ' + oldvalue.toString().replace(currencyht_nbnb, ''))
              hot.setDataAtCell(row, prop, oldvalue.toString().replace(currencyht_nbnb, ''), 'my_source');
            } else {
              var value = oldvalue //.toString() ;
              console.log('new VALuE in afterValidator still be : ' + value)
            }

          } else {
            var value = null
          }
          //const value = oldvalue.replace(regexcurrenciesht, '');

          console.log('source in afterValidate is : ')
          console.log(source)
          console.log(value)
          console.log(typeof value)
          console.log(/^\s*[-+]?(\s*\d+)\s*$/.test(value))

          if (isValid && value == null) {
            console.log('we are inside afterValidate value==null')
            console.log('COULD END HERE')

          } else if (isValid && value !== undefined && typeof value === 'string' && /^\s*[-+]?(\s*\d+)\s*$/.test(value)) {
            console.log('integer number')
            if (/^[-+](?=\s)\s*\d+\s*$/.test(value.trim())) {
              console.log('if there is a whitespace between sign +/- and the value so remove this whitespace')
              console.log('we will call my_source_removewhitespacesign')
              hot.setDataAtCell(row, prop, value.replace(/^\s*([-+])?\s*(\d+)\s*$/, '$1$2'), 'my_source_removewhitespacesign');
            } else {
              if (Math.abs(Number(value.trim())) < bignb_nbnb) {
                if (decimalSeparator == '.') {
                  console.log('condition afterValidate whole number .')
                  if(Number(value.trim())<0 && is_negativenb_accepted_nbnb==false){
                    commentsPlugin.setCommentAtCell(row, prop,comments_messages(value,'refuse_negative','fr-FR'))
                    hot.setDataAtCell(row, prop, '', 'my_source_empty');
                  } else {
                  console.log('do nothing')
                  console.log('COULD END HERE')
                  commentsPlugin.removeCommentAtCell(row, prop);
                  }

                } else if (decimalSeparator == ",") {
                  if(Number(value.trim())<0 && is_negativenb_accepted_nbnb==false){
                    commentsPlugin.setCommentAtCell(row, prop,comments_messages(value,'refuse_negative','fr-FR'))
                    hot.setDataAtCell(row, prop, '', 'my_source_empty');
                  } else {
                  console.log('do nothing')
                  console.log('COULD END HERE')
                  commentsPlugin.removeCommentAtCell(row, prop);
                  }
                }
              } else {
                //commentsPlugin.setCommentAtCell(row, prop, "La valeur que vous avez saisie dépasse la limite autorisée !!");
                commentsPlugin.setCommentAtCell(row, prop,comments_messages(value,'limit_autor','fr-FR'))

                hot.setDataAtCell(row, prop, '', 'my_source_empty');
              }
            }
          } else if (isValid && value !== undefined && typeof value === 'string' && /^\s*[-+]?(\s*\d+(\.\d*)?|\.\d+)\s*$/.test(value)) {
            //1234567.89 (BY DEFAULT VALUE) AMERICAN NUMERIC FORMAT WITHOUT THOUSAND SEPARATOR
            //const value_without_whitespace2= value.replace(/^\s*([-+])\s*(\d+)/, '$1$2');

            if (/^\s*[-+]\s+\d/.test(value.trim())) {
              console.log('if there is whitespaces between sign +/- and the value so remove this whitespace like + 123456.89  ')
              console.log('we will call my_source_removewhitespacesign')
              hot.setDataAtCell(row, prop, value.replace(/^\s*([-+])\s*(\d+)/, '$1$2'), 'my_source_removewhitespacesign');
            } else {
              if (decimalSeparator == '.') {
                console.log('condition 3 ta3 do nothing')
                console.log('//1234567.89 (BY DEFAULT VALUE) AMERICAN NUMERIC FORMAT WITHOUT THOUSAND SEPARATOR')
                if (Math.abs(Number(value.trim())) < bignb_nbnb) {
                  //commentsPlugin.removeCommentAtCell(row, prop);
                  //console.log('COULD END HERE')

                  if((value.trim().toString().split('.')[1] || '').length>decimalnumbers_toshow_withoutrenderer_innumbers_nbnb) {
                    hot.setDataAtCell(row, prop,Number(value.trim()).toFixed(decimalnumbers_toshow_withoutrenderer_innumbers_nbnb).replace(/\.?0+$/, "") , 'my_source');
                    commentsPlugin.removeCommentAtCell(row, prop);
                  } else {
                    if(Number(value.trim())<0 && is_negativenb_accepted_nbnb==false){
                    commentsPlugin.setCommentAtCell(row, prop,comments_messages(value,'refuse_negative','fr-FR'))
                    hot.setDataAtCell(row, prop, '', 'my_source_empty');
                  } else {
                    console.log('COULD END HERE')
                    commentsPlugin.removeCommentAtCell(row, prop);
                  }
                  }


                } else {
                  //commentsPlugin.setCommentAtCell(row, prop, "La valeur que vous avez saisie dépasse la limite autorisée !!");
                  commentsPlugin.setCommentAtCell(row, prop,comments_messages(value,'limit_autor','fr-FR'))
                  hot.setDataAtCell(row, prop, '', 'my_source_empty');
                }

                // do nothing
              } else if (decimalSeparator == ',') {
                console.log('condition 4')
                //hot.setDataAtCell(row, prop, value.trim().replace('.', ','));
                //commentsPlugin.removeCommentAtCell(row,prop);

                if (/^\s*[-+]?(\s*\d{1,3}(\.\d{3})*|\d+)(,\d+)?\s*$/.test(value)) {
                  console.log('condition 4.1')
                  console.log('when 12.151')
                  hot.setDataAtCell(row, prop, value.replace('.', ''), 'my_source');
                  commentsPlugin.removeCommentAtCell(row, prop);
                } else {
                  console.log('condition 4.2')
                  //alert('voulez vous dire que 3.16 egale a 3,14 ? si oui changer svp ')
                  //commentsPlugin.setCommentAtCell(row, prop, "la valeur '" + value + "' n'est pas valide , Essayer de corriger l'ecriture selon le format de vos paramétres  |  " + Number(value).toLocaleString(userLocale) + " est correct");
                  commentsPlugin.setCommentAtCell(row, prop,comments_messages(value,'val_try_to_fix_4','fr-FR'))
                  commentsPlugin.showAtCell(row, prop);
                  hot.setDataAtCell(row, prop, '', 'my_source_empty');
                }

              }
            }
          } else if (isValid && value !== undefined && typeof value === 'string' && /^\s*[-+]?(\s*\d+(,\d*)?|,\d+)\s*$/.test(value)) {
            //1234567,89 EUROPEAN NUMERIC FORMAT WITHOUT THOUSAND SEPARATOR
            if (/^\s*[-+]\s+\d/.test(value.trim())) {
              console.log('if there is whitespaces between sign +/- and the value so remove this whitespace like + 123456.89  ')
              console.log('we will call my_source_removewhitespacesign')
              hot.setDataAtCell(row, prop, value.replace(/^\s*([-+])\s*(\d+)/, '$1$2'), 'my_source_removewhitespacesign');
            } else {
              if (decimalSeparator == '.') {

                // WINDOWS ANGLAIS w NUMBER FRNACAIS
                // MAY CAUSE PROBLEM WITH NUMBERS
                // we have to do something
                console.log('may cause problem 1')
                //alert('may cause problem')
                console.log('condition 1 ')
                if (/^\s*[-+]?(\s*\d{1,3}(,\d{3})*(\.\d+)?|\.\d+)\s*$/.test(value)) {
                  console.log('condition 1.1')
                  console.log('like whole number with , as thousand separator 1,234')
                  hot.setDataAtCell(row, prop, value.replace(/,/g, ''), 'my_source');
                  commentsPlugin.removeCommentAtCell(row, prop);

                } else {
                  console.log('condition 1.2')
                  console.log('may cause problem')
                  //alert('do you want to mean that ' + value + ' = ' + value.trim().replace(',', '.') + ' ?' )
                  //hot.setDataAtCell(row, prop, value.trim().replace(',', '.'));
                  //commentsPlugin.setCommentAtCell(row, prop, "la valeur '" + value + "' n'est pas valide , Essayer de corriger l'ecriture selon le format de vos paramétres  |  " + value.trim().replace(',', '.') + " est correct");
                  commentsPlugin.setCommentAtCell(row, prop,comments_messages(value,'val_try_to_fix_5','fr-FR'))
                  hot.setDataAtCell(row, prop, '', 'my_source_empty');
                }

                //hot.setDataAtCell(row, prop, value.replace(/,/g, '') );

              } else if (decimalSeparator == ',') {
                // do nothing
                console.log('condition 2 ta3 do nothing')
                //hot.setDataAtCell(row, prop, value.trim());
                //console.log('COULD END HERE')

                if (Math.abs(Number(value.trim().replace(',', '.'))) < bignb_nbnb) {
                  console.log('less than bignb_nbnb')
                  console.log(value)
                  console.log((Number(value.toString().trim().replace(',', '.')).toString().split('.')[1] || '').length)
                  //commentsPlugin.removeCommentAtCell(row, prop);
                  if((value.toString().trim().replace(',', '.').toString().split('.')[1] || '').length>decimalnumbers_toshow_withoutrenderer_innumbers_nbnb) {
                    console.log('inside first condition')
                    console.log(Number(value.toString().trim().replace(',', '.')).toFixed(decimalnumbers_toshow_withoutrenderer_innumbers_nbnb).replace(/\.?0+$/, "").replace('.', ','))
                    hot.setDataAtCell(row, prop,Number(value.trim().replace(',', '.')).toFixed(decimalnumbers_toshow_withoutrenderer_innumbers_nbnb).replace(/\.?0+$/, "").replace('.', ',') , 'my_source');
                    commentsPlugin.removeCommentAtCell(row, prop);
                  } else {
                    if(Number(value.trim().replace(',','.'))<0 && is_negativenb_accepted_nbnb==false){
                    commentsPlugin.setCommentAtCell(row, prop,comments_messages(value,'refuse_negative','fr-FR'))
                    hot.setDataAtCell(row, prop, '', 'my_source_empty');
                  } else {
                    console.log('COULD END HERE')
                    commentsPlugin.removeCommentAtCell(row, prop);
                  }
                  }

                } else {
                  //commentsPlugin.setCommentAtCell(row, prop, "La valeur que vous avez saisie dépasse la limite autorisée !!");
                  commentsPlugin.setCommentAtCell(row, prop,comments_messages(value,'limit_autor','fr-FR'))
                  hot.setDataAtCell(row, prop, '', 'my_source_empty');
                }


              }
            }
          } else if (isValid && value !== undefined && typeof value === 'string' && /^\s*[-+]?(\s*\d{1,3}( \d{3})*(,\d*)?|,\d+)\s*$/.test(value)) {
            // 1 234 567,89 FRENCH NUMERIC FORMAT WITH THOUSAND SEPARATOR
            console.log('condition out 5')
            console.log('// 1 234 567,89 FRENCH NUMERIC FORMAT WITH THOUSAND SEPARATOR')
            //hot.setDataAtCell(row, prop, value.replace(/\s/g, '').replace(',', '.') );
            //console.log(value.replace(/\s/g, '').replace(',', '.'))
            console.log(value.replace(/\s/g, ''))
            hot.setDataAtCell(row, prop, value.replace(/\s/g, ''), 'my_source');



          } else if (isValid && value !== undefined && typeof value === 'string' && /^\s*[-+]?(\s*\d{1,3}(,\d{3})*(\.\d+)?|\.\d+)\s*$/.test(value)) {

            console.log('// 1,234,567.89 AMERICAN NUMERIC FORMAT WITH THOUSAND SEPARATOR')
            console.log('condition out 6 ')
            if (decimalSeparator == ',') {
              // may cause problem
              console.log('condition out 6.1')
              //alert('veuillez corriger l'ecriture selon la format de vos parametres)
              //commentsPlugin.setCommentAtCell(row, prop, "la valeur '" + value + "' n'est pas valide , Essayer de corriger l'ecriture selon le format de vos paramétres  |  " + Number(value.replace(/,/g, '')).toLocaleString(userLocale) + " est correct");
              commentsPlugin.setCommentAtCell(row, prop,comments_messages(value,'val_try_to_fix_6','fr-FR'))
              hot.setDataAtCell(row, prop, '', 'my_source_empty');

            } else {
              //
              console.log('condition out 6.2')
            
              hot.setDataAtCell(row, prop, value.replace(/,/g, ''), 'my_source');
              commentsPlugin.removeCommentAtCell(row, prop);

            }
            //hot.setDataAtCell(row, prop, value.replace(/,/g, '') );
            // 1,234,567.89 AMERICAN NUMERIC FORMAT WITH THOUSAND SEPARATOR

          } else if (isValid && value !== undefined && typeof value === 'string' && /^\s*[-+]?(\s*\d{1,3}(?:\.\d{3})+(?:,\d+)?)\s*(?=\s|$)/.test(value)) {
            // 1.234.567,89 EUROPEAN NUMERIC FORMAT WITH THOUSAND SEPARATOR as dot
            if (/^\s*[-+]\s+\d/.test(value.trim())) {
              console.log('if there is whitespaces between sign +/- and the value so remove this whitespace like + 1.234.567,89  ')
              console.log('we will call my_source_removewhitespacesign')
              hot.setDataAtCell(row, prop, value.replace(/^\s*([-+])\s*(\d+)/, '$1$2'), 'my_source_removewhitespacesign');
            } else {
              if (/^\s*[-+]?(?=\d)(?:(?:\d{1,3}(?:[.,\s]\d{3}){0,2})|(?:\d+))(?:,\d+)?(?<=,[\d,]*),(?!\d*,)\d+(?:\.\d+)?\s*$/.test(value)) {
                console.log('condition out 7.1')
                console.log('like 1,234,56 or 1.234.567,8956,78')
                //commentsPlugin.setCommentAtCell(row, prop, "la valeur '" + value + "' n'est pas valide pour cette cellule. Veuillez saisir uniquement des valeurs numériques");
                commentsPlugin.setCommentAtCell(row, prop,comments_messages(value,'val_try_to_fix_fill_only_numbers','fr-FR'))
                hot.setDataAtCell(row, prop, '', 'my_source_empty');
              } else {
                console.log('condition out 7')
                console.log('// 1.234.567,89 EUROPEAN NUMERIC FORMAT WITH THOUSAND SEPARATOR as dot')
                //hot.setDataAtCell(row, prop, value.trim().replace(/\./g, '').replace(',', '.') );
                if (decimalSeparator == ',') {
                  hot.setDataAtCell(row, prop, value.trim().replace(/\./g, ''), 'my_source');
                  commentsPlugin.removeCommentAtCell(row, prop);

                } else {
                  console.log('condition out 7.3')
                  console.log('1.234.567 whole number')
                  //hot.setDataAtCell(row, prop, value.trim().replace(/\./g, '') );
                  //commentsPlugin.setCommentAtCell(row, prop, "la valeur '" + value + "' n'est pas valide , Essayer de corriger l'ecriture selon le format de vos paramétres  |  " + value.trim().replace(/\./g, '').replace(',', '.') + " est correct");
                  commentsPlugin.setCommentAtCell(row, prop,comments_messages(value,'val_try_to_fix_8','fr-FR'))
                  hot.setDataAtCell(row, prop, '', 'my_source_empty');
                }
              }
            }
          } else if (isValid && value !== undefined && typeof value === 'string' && /^\s*[-+]?(\s*\d{1,3}( \d{3})*(\.\d*)?|\.\d+)\s*$/.test(value)) {
            // 1 234 567.89 AMERICAN NUMERIC FORMAT WITH THOUSAND SEPARATOR
            console.log('condition out 8')
            console.log('// 1 234 567.89 AMERICAN NUMERIC FORMAT WITH THOUSAND SEPARATOR')
            hot.setDataAtCell(row, prop, value.replace(/\s/g, ''), 'my_source');
            console.log(value.replace(/\s/g, ''))
            commentsPlugin.removeCommentAtCell(row, prop);

          } else if (isValid && value !== undefined && typeof value === 'string' && /^\s*[-+]?[\s]*[0-9]+([eE][-+]?[0-9]+)?\s*$/.test(value)) {
            console.log('condition out 12 ')
            // we a re inside scientific notation when mantissa is integer
            if (/^[+-]?[\s]+\d+(\.\d+)?([eE][+-]?\d+)?$/.test(value.trim())) {
              console.log('if there is whitespaces between sign +/- and the value so remove this whitespace like + 5e6  ')
              console.log('we will call my_source_removewhitespacesign')
              hot.setDataAtCell(row, prop, value.trim().replace(/\s/g, ''), 'my_source_removewhitespacesign');
              commentsPlugin.removeCommentAtCell(row, prop);

            } else {
              if (Math.abs(Number(value)) > Number(bignb_nbnb) || Math.abs(Number(value)) < Number(smallnb_nbnb)) {
                //commentsPlugin.setCommentAtCell(row, prop, "La valeur que vous avez saisie dépasse la limite autorisée !!");
                commentsPlugin.setCommentAtCell(row, prop,comments_messages(value,'limit_autor','fr-FR'))
                hot.setDataAtCell(row, prop, '', 'my_source_empty');
              } else {
                if (Math.abs(Number(value)) < smallafterdigit_nbnb) {
                  console.log('we are in the case when integer scientific notation less than smallafterdigit_nbnb')
                  if (decimalSeparator == '.') {
                    hot.setDataAtCell(row, prop, Number(value).toFixed(Math.abs(BigNumber(value).e)).toString(), 'my_source');
                    commentsPlugin.removeCommentAtCell(row, prop);

                  } else {
                    hot.setDataAtCell(row, prop, Number(value).toFixed(Math.abs(BigNumber(value).e)).toString().replace('.', ','), 'my_source');
                    commentsPlugin.removeCommentAtCell(row, prop);

                  }
                } else {
                  if (decimalSeparator == '.') {
                    console.log('integer scinetific notation and english dot')
                    hot.setDataAtCell(row, prop, parseFloat(value.replace(/\s/g, '')).toString(), 'my_source');
                    console.log(parseFloat(value.replace(/\s/g, '')).toString())
                    commentsPlugin.removeCommentAtCell(row, prop);

                  } else if (decimalSeparator == ',') {
                    console.log('integer scinetific notation and european comma')
                    hot.setDataAtCell(row, prop, parseFloat(value.replace(/\s/g, '')).toString().replace('.', ','), 'my_source');
                    console.log(parseFloat(value.replace(/\s/g, '')).toString().replace('.', ','))
                    commentsPlugin.removeCommentAtCell(row, prop);

                  }
                }
              }
            }
          } else if (isValid && value !== undefined && typeof value === 'string' && /^\s*[-+]?[\s]*[0-9]*\.?[0-9]+([eE][-+]?[0-9]+)?\s*$/.test(value)) {
            // we are inside scientific notation :
            // 1.6e6 1.60E+04  -13.65E4  - 12.3E+03  scientific notation with E sign
            console.log('condition out 9')
            console.log(value)
            if (Math.abs(Number(value)) > Number(bignb_nbnb) || Math.abs(Number(value)) < Number(smallnb_nbnb)) {
              //commentsPlugin.setCommentAtCell(row, prop, "La valeur que vous avez saisie dépasse la limite autorisée !!");
              commentsPlugin.setCommentAtCell(row, prop,comments_messages(value,'limit_autor','fr-FR'))
              hot.setDataAtCell(row, prop, '', 'my_source_empty');

            } else {
              if (Math.abs(Number(value)) < smallafterdigit_nbnb) {
                if (decimalSeparator == '.') {
                  console.log('scientific format float mantissa and decimal separator is dot/dot and less than 0.01')
                  hot.setDataAtCell(row, prop, Number(value).toFixed(Math.abs(BigNumber(value).e)).toString(), 'my_source');
                  commentsPlugin.removeCommentAtCell(row, prop);

                } else if (decimalSeparator == ',') {
                  console.log('scientific format float mantissa and decimal separator is dot/comma and less than 0.01')
                 // commentsPlugin.setCommentAtCell(row, prop, "la valeur '" + value + "' n'est pas valide , Essayer de corriger l'ecriture selon le format de vos paramétres ");
                  commentsPlugin.setCommentAtCell(row, prop,comments_messages(value,'val_try_to_fix','fr-FR'))
 
                  hot.setDataAtCell(row, prop, '', 'my_source_empty');
                }
              } else {
                if (decimalSeparator == '.') {
                  console.log('scinetific notation and english dot')
                  console.log('scientific format float mantissa and decimal separator is dot/dot and greater than 0.01')
                  console.log(parseFloat(value.replace(/\s/g, '')))
                  hot.setDataAtCell(row, prop, parseFloat(value.replace(/\s/g, '')).toString(), 'my_source');
                  commentsPlugin.removeCommentAtCell(row, prop)

                } else if (decimalSeparator == ',') {
                  console.log('scientific format float mantissa and decimal separator is dot/comma and greater than 0.01')
                  console.log('scinetific notation and european comma')
                 // commentsPlugin.setCommentAtCell(row, prop, "la valeur '" + value + "' n'est pas valide , Essayer de corriger l'ecriture selon le format de vos paramétres ");
                  commentsPlugin.setCommentAtCell(row, prop,comments_messages(value,'val_try_to_fix','fr-FR'))

                  hot.setDataAtCell(row, prop, '', 'my_source_empty');
                  // hot.setDataAtCell(row, prop, parseFloat(value.replace(/\s/g, '')).toString().replace('.',',') );
                  // console.log(parseFloat(value.replace(/\s/g, '')).toString().replace('.',',') )
                }
                //commentsPlugin.removeCommentAtCell(row,prop);

                console.log('end conditon 9')
              }
            }
          } else if (isValid && value !== undefined && typeof value === 'string' && /^\s*[-+]?[\s]*[0-9]*,?[0-9]+([eE][-+]?[0-9]+)?\s*$/.test(value)) {
            // we are inside scientific notation with comma :
            // 1,6e6 1.60E+04  -13,65E4  - 12,3E+03  scientific notation with E sign
            console.log('condition out 10')
            console.log(value)
            const value1010 = value.replace(',', '.').replace(/\s/g, '')
            console.log('value1010 : ')
            console.log(value1010)
            if (Math.abs(Number(value1010)) > Number(bignb_nbnb) || Math.abs(Number(value1010)) < Number(smallnb_nbnb)) {
              //commentsPlugin.setCommentAtCell(row, prop, "La valeur que vous avez saisie dépasse la limite autorisée !!");
              commentsPlugin.setCommentAtCell(row, prop,comments_messages(value,'limit_autor','fr-FR'))
              hot.setDataAtCell(row, prop, '', 'my_source_empty');

            } else {
              if (Math.abs(Number(value1010)) < smallafterdigit_nbnb) {
                if (decimalSeparator == '.') {
                  console.log('scientific format float mantissa and decimal separator is comma/dot and less than 0.01')
                  //commentsPlugin.setCommentAtCell(row, prop, "la valeur '" + value + "' n'est pas valide , Essayer de corriger l'ecriture selon le format de vos paramétres ");
                  commentsPlugin.setCommentAtCell(row, prop,comments_messages(value,'val_try_to_fix','fr-FR'))

                  hot.setDataAtCell(row, prop, '', 'my_source_empty');
                } else if (decimalSeparator == ',') {
                  //bg=BigNumber(val)
                  //expo=Math.abs(BigNumber(value1010).e)
                  //Number(value1010).toFixed(Math.abs(BigNumber(value1010).e))
                  //console.log('******************************************* we are inside condition out 10 less than 0.01 *******************************************')
                  console.log('scientific format float mantissa and decimal separator is comma/comma and less than 0.01')
                  hot.setDataAtCell(row, prop, Number(value1010).toFixed(Math.abs(BigNumber(value1010).e)).toString().replace('.', ','), 'my_source');
                  commentsPlugin.removeCommentAtCell(row, prop);
                }

              } else {
                if (decimalSeparator == '.') {
                  //maybe it will be a problem here : to fix after
                  console.log('scientific format float mantissa and decimal separator is comma/dot and greather than 0.01')
                  //commentsPlugin.setCommentAtCell(row, prop, "la valeur '" + value + "' n'est pas valide pour cette cellule. Veuillez saisir uniquement des valeurs numériques");
                  commentsPlugin.setCommentAtCell(row, prop,comments_messages(value,'val_try_to_fix_fill_only_numbers','fr-FR'))

                  hot.setDataAtCell(row, prop, '', 'my_source_empty')
                } else if (decimalSeparator == ',') {
                  //console.log(' ////////////////////////////// we are inside condition out 10 decimal separator , /////////////////////////////////////////////')
                  console.log('scientific format float mantissa and decimal separator is comma/comma and greather than 0.01')
                  console.log(parseFloat(value.replace(',', '.').replace(/\s/g, '')))
                  hot.setDataAtCell(row, prop, parseFloat(value.replace(',', '.').replace(/\s/g, '')).toString().replace('.', ','), 'my_source');
                  commentsPlugin.removeCommentAtCell(row, prop);

                }
                console.log('end conditon 10')
              }
            }
          } else if (value == '') {
            console.log('do nothing , we are in last invalid')
            console.log('COULD END HERE')
            console.log(isValid)
            console.log(source)

            //commentsPlugin.removeCommentAtCell(row,prop); //aa

          } else if (isValid == false) {
            console.log('we are before COMMENT CONTENTS !!!!!!!!!!!!!!!!!!!!!!!!!!')
            console.log(value)
            //commentsPlugin.setCommentAtCell(row, prop, "la valeur '" + value + "' n'est pas valide pour cette cellule. Veuillez saisir uniquement des valeurs numériques");
            commentsPlugin.setCommentAtCell(row, prop,comments_messages(value,'val_try_to_fix_fill_only_numbers','fr-FR'))

            //commentsPlugin.setCommentAtCell(row, prop, 'Please enter only numbers.<br><br><p style="color:red;">Veuillez entrer uniquement des nombres.</p>');

            commentsPlugin.showAtCell(row, prop);
            console.log('isvalid==false')
            //hot.setDataAtCell(row,prop,hot.getData()[row][prop])
            hot.setDataAtCell(row, prop, '', 'my_source_empty')
          } else {
            console.log('WE ARE IN THE END OF AFTERVALIDATE , THE ELSE PART : ')
            hot.setDataAtCell(row, prop, '', 'my_source_empty')
            //hot.setDataAtCell(row, prop, null, 'my_source_else_empty')
            console.log('condition out 11 ')
            console.log(isValid)
            console.log(value !== undefined)
            console.log(typeof value)
            console.log(/^\s*[-+]?(\s*\d+(\.\d*)?|\.\d+)\s*$/.test(value))
            console.log(/^\s*[-+]?(\s*\d+(,\d*)?|,\d+)\s*$/.test(value))

          }
        }
                
            else if (prop==2) {  // afterValidate of integers
          console.log('//////////////////// ************** prop2 ////////////////// ****')
          console.log('//////////////////// ************** prop2 ////////////////// ****')
          console.log('//////////////////// ************** prop2 ////////////////// ****')

          console.log('value : aftervalidate')
          console.log(oldvalue)
          console.log(typeof oldvalue)

           if (oldvalue !== null) {
             if (oldvalue.toString().includes(currencyht_intint) && currencyht_intint!=''  ) {
               console.log('new VALuE in afterValidator will be : ' + oldvalue.toString().replace(currencyht_intint, ''))
               hot.setDataAtCell(row, prop, oldvalue.toString().replace(currencyht_intint, ''), 'my_source');
             } else {
               var value = oldvalue //.toString() ;
               console.log('new VALuE in afterValidator still be : ' + value)
             }

           } else {
             var value = null
           }

          //var value=oldvalue;
          //const value = oldvalue.replace(regexcurrenciesht, '');

          console.log('source in afterValidate is : ')
          console.log(source)
          console.log(value)
          console.log(typeof value)
          console.log(/^\s*[-+]?(\s*\d+)\s*$/.test(value))

          if (isValid && value == null) {
            console.log('we are inside afterValidate value==null')
            console.log('COULD END HERE')

          } else if (isValid && value !== undefined && typeof value === 'string' && /^\s*[-+]?(\s*\d+)\s*$/.test(value)) {
            console.log('integer number')
            if (/^[-+](?=\s)\s*\d+\s*$/.test(value.trim())) {
              console.log('if there is a whitespace between sign +/- and the value so remove this whitespace')
              console.log('we will call my_source_removewhitespacesign')
              hot.setDataAtCell(row, prop, value.replace(/^\s*([-+])?\s*(\d+)\s*$/, '$1$2'), 'my_source_removewhitespacesign');
            } else {
              if (Math.abs(Number(value.trim())) < bignb_intint) {
                if (decimalSeparator == '.') {
                  console.log('condition afterValidate whole number .')

                  if(Number(value.trim())<0 && is_negativenb_accepted_intint==false){
                    commentsPlugin.setCommentAtCell(row, prop,comments_messages(value,'refuse_negative','fr-FR'))
                    hot.setDataAtCell(row, prop, '', 'my_source_empty');
                  } else {
                    if(Number.isInteger(Number(value.trim()))==false && is_float_accepted_intint==false ){
                         commentsPlugin.setCommentAtCell(row, prop,comments_messages(value,'refuse_float','fr-FR'))
                         hot.setDataAtCell(row, prop, '', 'my_source_empty');
                    }else {
                     console.log('do nothing')
                     console.log('COULD END HERE')
                     commentsPlugin.removeCommentAtCell(row, prop);
                    }
                }
                } else if (decimalSeparator == ",") {
                  if(Number(value.trim())<0 && is_negativenb_accepted_intint==false){
                    commentsPlugin.setCommentAtCell(row, prop,comments_messages(value,'refuse_negative','fr-FR'))
                    hot.setDataAtCell(row, prop, '', 'my_source_empty');
                  } else {
                    if(Number.isInteger(Number(value.trim()))==false && is_float_accepted_intint==false ){
                         commentsPlugin.setCommentAtCell(row, prop,comments_messages(value,'refuse_float','fr-FR'))
                         hot.setDataAtCell(row, prop, '', 'my_source_empty');
                    } else {
                  console.log('do nothing')
                  console.log('COULD END HERE')
                  commentsPlugin.removeCommentAtCell(row, prop);
                  }}
                }
              } else {
                //commentsPlugin.setCommentAtCell(row, prop, "La valeur que vous avez saisie dépasse la limite autorisée !!");
                commentsPlugin.setCommentAtCell(row, prop,comments_messages(value,'limit_autor','fr-FR'))
                hot.setDataAtCell(row, prop, '', 'my_source_empty');
              }
            }
          } else if (isValid && value !== undefined && typeof value === 'string' && /^\s*[-+]?(\s*\d+(\.\d*)?|\.\d+)\s*$/.test(value)) {
            //1234567.89 (BY DEFAULT VALUE) AMERICAN NUMERIC FORMAT WITHOUT THOUSAND SEPARATOR
            //const value_without_whitespace2= value.replace(/^\s*([-+])\s*(\d+)/, '$1$2');

            if (/^\s*[-+]\s+\d/.test(value.trim())) {
              console.log('if there is whitespaces between sign +/- and the value so remove this whitespace like + 123456.89  ')
              console.log('we will call my_source_removewhitespacesign')
              hot.setDataAtCell(row, prop, value.replace(/^\s*([-+])\s*(\d+)/, '$1$2'), 'my_source_removewhitespacesign');
            } else {
              if (decimalSeparator == '.') {
                console.log('condition 3 ta3 do nothing')
                console.log('//1234567.89 (BY DEFAULT VALUE) AMERICAN NUMERIC FORMAT WITHOUT THOUSAND SEPARATOR')
                if (Math.abs(Number(value.trim())) < bignb_intint) {
                  //commentsPlugin.removeCommentAtCell(row, prop);
                  //console.log('COULD END HERE')

                  if((value.trim().toString().split('.')[1] || '').length>decimalnumbers_toshow_withoutrenderer_innumbers_intint) {
                    hot.setDataAtCell(row, prop,Number(value.trim()).toFixed(decimalnumbers_toshow_withoutrenderer_innumbers_intint).replace(/\.?0+$/, "") , 'my_source');
                    commentsPlugin.removeCommentAtCell(row, prop);
                  } else {
                    if(Number(value.trim())<0 && is_negativenb_accepted_intint==false){
                    commentsPlugin.setCommentAtCell(row, prop,comments_messages(value,'refuse_negative','fr-FR'))
                    hot.setDataAtCell(row, prop, '', 'my_source_empty');
                  } else {
                    if(Number.isInteger(Number(value.trim()))==false && is_float_accepted_intint==false ){
                         commentsPlugin.setCommentAtCell(row, prop,comments_messages(value,'refuse_float','fr-FR'))
                         hot.setDataAtCell(row, prop, '', 'my_source_empty');
                    }else {
                    console.log('COULD END HERE')
                    commentsPlugin.removeCommentAtCell(row, prop);
                  }
                }
                  }


                } else {
                  //commentsPlugin.setCommentAtCell(row, prop, "La valeur que vous avez saisie dépasse la limite autorisée !!");
                  commentsPlugin.setCommentAtCell(row, prop,comments_messages(value,'limit_autor','fr-FR'))
                  hot.setDataAtCell(row, prop, '', 'my_source_empty');
                }

                // do nothing
              } else if (decimalSeparator == ',') {
                console.log('condition 4')
                //hot.setDataAtCell(row, prop, value.trim().replace('.', ','));
                //commentsPlugin.removeCommentAtCell(row,prop);

                if (/^\s*[-+]?(\s*\d{1,3}(\.\d{3})*|\d+)(,\d+)?\s*$/.test(value)) {
                  console.log('condition 4.1')
                  console.log('when 12.151')
                  hot.setDataAtCell(row, prop, value.replace('.', ''), 'my_source');
                  commentsPlugin.removeCommentAtCell(row, prop);
                } else {
                  console.log('condition 4.2')
                  //alert('voulez vous dire que 3.16 egale a 3,14 ? si oui changer svp ')
                  //commentsPlugin.setCommentAtCell(row, prop, "la valeur '" + value + "' n'est pas valide , Essayer de corriger l'ecriture selon le format de vos paramétres  |  " + Number(value).toLocaleString(userLocale) + " est correct");
                  commentsPlugin.setCommentAtCell(row, prop,comments_messages(value,'val_try_to_fix_4','fr-FR'))
                  commentsPlugin.showAtCell(row, prop);
                  hot.setDataAtCell(row, prop, '', 'my_source_empty');
                }

              }
            }
          } else if (isValid && value !== undefined && typeof value === 'string' && /^\s*[-+]?(\s*\d+(,\d*)?|,\d+)\s*$/.test(value)) {
            //1234567,89 EUROPEAN NUMERIC FORMAT WITHOUT THOUSAND SEPARATOR
            if (/^\s*[-+]\s+\d/.test(value.trim())) {
              console.log('if there is whitespaces between sign +/- and the value so remove this whitespace like + 123456.89  ')
              console.log('we will call my_source_removewhitespacesign')
              hot.setDataAtCell(row, prop, value.replace(/^\s*([-+])\s*(\d+)/, '$1$2'), 'my_source_removewhitespacesign');
            } else {
              if (decimalSeparator == '.') {

                // WINDOWS ANGLAIS w NUMBER FRNACAIS
                // MAY CAUSE PROBLEM WITH NUMBERS
                // we have to do something
                console.log('may cause problem 1')
                //alert('may cause problem')
                console.log('condition 1 ')
                if (/^\s*[-+]?(\s*\d{1,3}(,\d{3})*(\.\d+)?|\.\d+)\s*$/.test(value)) {
                  console.log('condition 1.1')
                  console.log('like whole number with , as thousand separator 1,234')
                  hot.setDataAtCell(row, prop, value.replace(/,/g, ''), 'my_source');
                  commentsPlugin.removeCommentAtCell(row, prop);

                } else {
                  console.log('condition 1.2')
                  console.log('may cause problem')
                  //alert('do you want to mean that ' + value + ' = ' + value.trim().replace(',', '.') + ' ?' )
                  //hot.setDataAtCell(row, prop, value.trim().replace(',', '.'));
                  //commentsPlugin.setCommentAtCell(row, prop, "la valeur '" + value + "' n'est pas valide , Essayer de corriger l'ecriture selon le format de vos paramétres  |  " + value.trim().replace(',', '.') + " est correct");
                  commentsPlugin.setCommentAtCell(row, prop,comments_messages(value,'val_try_to_fix_5','fr-FR'))
                  hot.setDataAtCell(row, prop, '', 'my_source_empty');
                }

                //hot.setDataAtCell(row, prop, value.replace(/,/g, '') );

              } else if (decimalSeparator == ',') {
                // do nothing
                console.log('condition 2 ta3 do nothing')
                //hot.setDataAtCell(row, prop, value.trim());
                //console.log('COULD END HERE')

                if (Math.abs(Number(value.trim().replace(',', '.'))) < bignb_intint) {
                  console.log('less than bignb_intint')
                  console.log(value)
                  console.log((Number(value.toString().trim().replace(',', '.')).toString().split('.')[1] || '').length)
                  //commentsPlugin.removeCommentAtCell(row, prop);
                  if((value.toString().trim().replace(',', '.').toString().split('.')[1] || '').length>decimalnumbers_toshow_withoutrenderer_innumbers_intint) {
                    console.log('inside first condition')
                    console.log(Number(value.toString().trim().replace(',', '.')).toFixed(decimalnumbers_toshow_withoutrenderer_innumbers_intint).replace(/\.?0+$/, "").replace('.', ','))
                    hot.setDataAtCell(row, prop,Number(value.trim().replace(',', '.')).toFixed(decimalnumbers_toshow_withoutrenderer_innumbers_intint).replace(/\.?0+$/, "").replace('.', ',') , 'my_source');
                    commentsPlugin.removeCommentAtCell(row, prop);
                  } else {
                   if(Number(value.trim().replace(',', '.'))<0 && is_negativenb_accepted_intint==false){
                    commentsPlugin.setCommentAtCell(row, prop,comments_messages(value,'refuse_negative','fr-FR'))
                    hot.setDataAtCell(row, prop, '', 'my_source_empty');
                  } else {
                    if(Number.isInteger(Number(value.trim().replace(',','.')))==false && is_float_accepted_intint==false ){
                         commentsPlugin.setCommentAtCell(row, prop,comments_messages(value,'refuse_float','fr-FR'))
                         hot.setDataAtCell(row, prop, '', 'my_source_empty');
                    }else {
                    console.log('COULD END HERE')
                    commentsPlugin.removeCommentAtCell(row, prop);
                  }
                }
                  }

                } else {
                  //commentsPlugin.setCommentAtCell(row, prop, "La valeur que vous avez saisie dépasse la limite autorisée !!");
                  commentsPlugin.setCommentAtCell(row, prop,comments_messages(value,'limit_autor','fr-FR'))
                  hot.setDataAtCell(row, prop, '', 'my_source_empty');
                }


              }
            }
          } else if (isValid && value !== undefined && typeof value === 'string' && /^\s*[-+]?(\s*\d{1,3}( \d{3})*(,\d*)?|,\d+)\s*$/.test(value)) {
            // 1 234 567,89 FRENCH NUMERIC FORMAT WITH THOUSAND SEPARATOR
            console.log('condition out 5')
            console.log('// 1 234 567,89 FRENCH NUMERIC FORMAT WITH THOUSAND SEPARATOR')
            //hot.setDataAtCell(row, prop, value.replace(/\s/g, '').replace(',', '.') );
            //console.log(value.replace(/\s/g, '').replace(',', '.'))
            console.log(value.replace(/\s/g, ''))
            hot.setDataAtCell(row, prop, value.replace(/\s/g, ''), 'my_source');



          } else if (isValid && value !== undefined && typeof value === 'string' && /^\s*[-+]?(\s*\d{1,3}(,\d{3})*(\.\d+)?|\.\d+)\s*$/.test(value)) {

            console.log('// 1,234,567.89 AMERICAN NUMERIC FORMAT WITH THOUSAND SEPARATOR')
            console.log('condition out 6 ')
            if (decimalSeparator == ',') {
              // may cause problem
              console.log('condition out 6.1')
              //alert('veuillez corriger l'ecriture selon la format de vos parametres)
              //commentsPlugin.setCommentAtCell(row, prop, "la valeur '" + value + "' n'est pas valide , Essayer de corriger l'ecriture selon le format de vos paramétres  |  " + Number(value.replace(/,/g, '')).toLocaleString(userLocale) + " est correct");
              commentsPlugin.setCommentAtCell(row, prop,comments_messages(value,'val_try_to_fix_6','fr-FR'))
              hot.setDataAtCell(row, prop, '', 'my_source_empty');

            } else {
              //
              console.log('condition out 6.2')
            
              hot.setDataAtCell(row, prop, value.replace(/,/g, ''), 'my_source');
              commentsPlugin.removeCommentAtCell(row, prop);

            }
            //hot.setDataAtCell(row, prop, value.replace(/,/g, '') );
            // 1,234,567.89 AMERICAN NUMERIC FORMAT WITH THOUSAND SEPARATOR

          } else if (isValid && value !== undefined && typeof value === 'string' && /^\s*[-+]?(\s*\d{1,3}(?:\.\d{3})+(?:,\d+)?)\s*(?=\s|$)/.test(value)) {
            // 1.234.567,89 EUROPEAN NUMERIC FORMAT WITH THOUSAND SEPARATOR as dot
            if (/^\s*[-+]\s+\d/.test(value.trim())) {
              console.log('if there is whitespaces between sign +/- and the value so remove this whitespace like + 1.234.567,89  ')
              console.log('we will call my_source_removewhitespacesign')
              hot.setDataAtCell(row, prop, value.replace(/^\s*([-+])\s*(\d+)/, '$1$2'), 'my_source_removewhitespacesign');
            } else {
              if (/^\s*[-+]?(?=\d)(?:(?:\d{1,3}(?:[.,\s]\d{3}){0,2})|(?:\d+))(?:,\d+)?(?<=,[\d,]*),(?!\d*,)\d+(?:\.\d+)?\s*$/.test(value)) {
                console.log('condition out 7.1')
                console.log('like 1,234,56 or 1.234.567,8956,78')
                //commentsPlugin.setCommentAtCell(row, prop, "la valeur '" + value + "' n'est pas valide pour cette cellule. Veuillez saisir uniquement des valeurs numériques");
                commentsPlugin.setCommentAtCell(row, prop,comments_messages(value,'val_try_to_fix_fill_only_numbers','fr-FR'))
                hot.setDataAtCell(row, prop, '', 'my_source_empty');
              } else {
                console.log('condition out 7')
                console.log('// 1.234.567,89 EUROPEAN NUMERIC FORMAT WITH THOUSAND SEPARATOR as dot')
                //hot.setDataAtCell(row, prop, value.trim().replace(/\./g, '').replace(',', '.') );
                if (decimalSeparator == ',') {
                  hot.setDataAtCell(row, prop, value.trim().replace(/\./g, ''), 'my_source');
                  commentsPlugin.removeCommentAtCell(row, prop);

                } else {
                  console.log('condition out 7.3')
                  console.log('1.234.567 whole number')
                  //hot.setDataAtCell(row, prop, value.trim().replace(/\./g, '') );
                  //commentsPlugin.setCommentAtCell(row, prop, "la valeur '" + value + "' n'est pas valide , Essayer de corriger l'ecriture selon le format de vos paramétres  |  " + value.trim().replace(/\./g, '').replace(',', '.') + " est correct");
                  commentsPlugin.setCommentAtCell(row, prop,comments_messages(value,'val_try_to_fix_8','fr-FR'))
                  hot.setDataAtCell(row, prop, '', 'my_source_empty');
                }
              }
            }
          } else if (isValid && value !== undefined && typeof value === 'string' && /^\s*[-+]?(\s*\d{1,3}( \d{3})*(\.\d*)?|\.\d+)\s*$/.test(value)) {
            // 1 234 567.89 AMERICAN NUMERIC FORMAT WITH THOUSAND SEPARATOR
            console.log('condition out 8')
            console.log('// 1 234 567.89 AMERICAN NUMERIC FORMAT WITH THOUSAND SEPARATOR')
            hot.setDataAtCell(row, prop, value.replace(/\s/g, ''), 'my_source');
            console.log(value.replace(/\s/g, ''))
            commentsPlugin.removeCommentAtCell(row, prop);

          } else if (isValid && value !== undefined && typeof value === 'string' && /^\s*[-+]?[\s]*[0-9]+([eE][-+]?[0-9]+)?\s*$/.test(value)) {
            console.log('condition out 12 ')
            // we a re inside scientific notation when mantissa is integer
            if (/^[+-]?[\s]+\d+(\.\d+)?([eE][+-]?\d+)?$/.test(value.trim())) {
              console.log('if there is whitespaces between sign +/- and the value so remove this whitespace like + 5e6  ')
              console.log('we will call my_source_removewhitespacesign')
              hot.setDataAtCell(row, prop, value.trim().replace(/\s/g, ''), 'my_source_removewhitespacesign');
              commentsPlugin.removeCommentAtCell(row, prop);

            } else {
              if (Math.abs(Number(value)) > Number(bignb_intint) || Math.abs(Number(value)) < Number(smallnb_intint)) {
                //commentsPlugin.setCommentAtCell(row, prop, "La valeur que vous avez saisie dépasse la limite autorisée !!");
                commentsPlugin.setCommentAtCell(row, prop,comments_messages(value,'limit_autor','fr-FR'))
                hot.setDataAtCell(row, prop, '', 'my_source_empty');
              } else {
                if (Math.abs(Number(value)) < smallafterdigit_intint) {
                  console.log('we are in the case when integer scientific notation less than smallafterdigit_intint')
                  if (decimalSeparator == '.') {
                    hot.setDataAtCell(row, prop, Number(value).toFixed(Math.abs(BigNumber(value).e)).toString(), 'my_source');
                    commentsPlugin.removeCommentAtCell(row, prop);

                  } else {
                    hot.setDataAtCell(row, prop, Number(value).toFixed(Math.abs(BigNumber(value).e)).toString().replace('.', ','), 'my_source');
                    commentsPlugin.removeCommentAtCell(row, prop);

                  }
                } else {
                  if (decimalSeparator == '.') {
                    console.log('integer scinetific notation and english dot')
                    hot.setDataAtCell(row, prop, parseFloat(value.replace(/\s/g, '')).toString(), 'my_source');
                    console.log(parseFloat(value.replace(/\s/g, '')).toString())
                    commentsPlugin.removeCommentAtCell(row, prop);

                  } else if (decimalSeparator == ',') {
                    console.log('integer scinetific notation and european comma')
                    hot.setDataAtCell(row, prop, parseFloat(value.replace(/\s/g, '')).toString().replace('.', ','), 'my_source');
                    console.log(parseFloat(value.replace(/\s/g, '')).toString().replace('.', ','))
                    commentsPlugin.removeCommentAtCell(row, prop);

                  }
                }
              }
            }
          } else if (isValid && value !== undefined && typeof value === 'string' && /^\s*[-+]?[\s]*[0-9]*\.?[0-9]+([eE][-+]?[0-9]+)?\s*$/.test(value)) {
            // we are inside scientific notation :
            // 1.6e6 1.60E+04  -13.65E4  - 12.3E+03  scientific notation with E sign
            console.log('condition out 9')
            console.log(value)
            if (Math.abs(Number(value)) > Number(bignb_intint) || Math.abs(Number(value)) < Number(smallnb_intint)) {
              //commentsPlugin.setCommentAtCell(row, prop, "La valeur que vous avez saisie dépasse la limite autorisée !!");
              commentsPlugin.setCommentAtCell(row, prop,comments_messages(value,'limit_autor','fr-FR'))
              hot.setDataAtCell(row, prop, '', 'my_source_empty');

            } else {
              if (Math.abs(Number(value)) < smallafterdigit_intint) {
                if (decimalSeparator == '.') {
                  console.log('scientific format float mantissa and decimal separator is dot/dot and less than 0.01')
                  hot.setDataAtCell(row, prop, Number(value).toFixed(Math.abs(BigNumber(value).e)).toString(), 'my_source');
                  commentsPlugin.removeCommentAtCell(row, prop);

                } else if (decimalSeparator == ',') {
                  console.log('scientific format float mantissa and decimal separator is dot/comma and less than 0.01')
                 // commentsPlugin.setCommentAtCell(row, prop, "la valeur '" + value + "' n'est pas valide , Essayer de corriger l'ecriture selon le format de vos paramétres ");
                  commentsPlugin.setCommentAtCell(row, prop,comments_messages(value,'val_try_to_fix','fr-FR'))
 
                  hot.setDataAtCell(row, prop, '', 'my_source_empty');
                }
              } else {
                if (decimalSeparator == '.') {
                  console.log('scinetific notation and english dot')
                  console.log('scientific format float mantissa and decimal separator is dot/dot and greater than 0.01')
                  console.log(parseFloat(value.replace(/\s/g, '')))
                  hot.setDataAtCell(row, prop, parseFloat(value.replace(/\s/g, '')).toString(), 'my_source');
                  commentsPlugin.removeCommentAtCell(row, prop)

                } else if (decimalSeparator == ',') {
                  console.log('scientific format float mantissa and decimal separator is dot/comma and greater than 0.01')
                  console.log('scinetific notation and european comma')
                 // commentsPlugin.setCommentAtCell(row, prop, "la valeur '" + value + "' n'est pas valide , Essayer de corriger l'ecriture selon le format de vos paramétres ");
                  commentsPlugin.setCommentAtCell(row, prop,comments_messages(value,'val_try_to_fix','fr-FR'))

                  hot.setDataAtCell(row, prop, '', 'my_source_empty');
                  // hot.setDataAtCell(row, prop, parseFloat(value.replace(/\s/g, '')).toString().replace('.',',') );
                  // console.log(parseFloat(value.replace(/\s/g, '')).toString().replace('.',',') )
                }
                //commentsPlugin.removeCommentAtCell(row,prop);

                console.log('end conditon 9')
              }
            }
          } else if (isValid && value !== undefined && typeof value === 'string' && /^\s*[-+]?[\s]*[0-9]*,?[0-9]+([eE][-+]?[0-9]+)?\s*$/.test(value)) {
            // we are inside scientific notation with comma :
            // 1,6e6 1.60E+04  -13,65E4  - 12,3E+03  scientific notation with E sign
            console.log('condition out 10')
            console.log(value)
            const value1010 = value.replace(',', '.').replace(/\s/g, '')
            console.log('value1010 : ')
            console.log(value1010)
            if (Math.abs(Number(value1010)) > Number(bignb_intint) || Math.abs(Number(value1010)) < Number(smallnb_intint)) {
              //commentsPlugin.setCommentAtCell(row, prop, "La valeur que vous avez saisie dépasse la limite autorisée !!");
              commentsPlugin.setCommentAtCell(row, prop,comments_messages(value,'limit_autor','fr-FR'))
              hot.setDataAtCell(row, prop, '', 'my_source_empty');

            } else {
              if (Math.abs(Number(value1010)) < smallafterdigit_intint) {
                if (decimalSeparator == '.') {
                  console.log('scientific format float mantissa and decimal separator is comma/dot and less than 0.01')
                  //commentsPlugin.setCommentAtCell(row, prop, "la valeur '" + value + "' n'est pas valide , Essayer de corriger l'ecriture selon le format de vos paramétres ");
                  commentsPlugin.setCommentAtCell(row, prop,comments_messages(value,'val_try_to_fix','fr-FR'))

                  hot.setDataAtCell(row, prop, '', 'my_source_empty');
                } else if (decimalSeparator == ',') {
                  //bg=BigNumber(val)
                  //expo=Math.abs(BigNumber(value1010).e)
                  //Number(value1010).toFixed(Math.abs(BigNumber(value1010).e))
                  //console.log('******************************************* we are inside condition out 10 less than 0.01 *******************************************')
                  console.log('scientific format float mantissa and decimal separator is comma/comma and less than 0.01')
                  hot.setDataAtCell(row, prop, Number(value1010).toFixed(Math.abs(BigNumber(value1010).e)).toString().replace('.', ','), 'my_source');
                  commentsPlugin.removeCommentAtCell(row, prop);
                }

              } else {
                if (decimalSeparator == '.') {
                  //maybe it will be a problem here : to fix after
                  console.log('scientific format float mantissa and decimal separator is comma/dot and greather than 0.01')
                  //commentsPlugin.setCommentAtCell(row, prop, "la valeur '" + value + "' n'est pas valide pour cette cellule. Veuillez saisir uniquement des valeurs numériques");
                  commentsPlugin.setCommentAtCell(row, prop,comments_messages(value,'val_try_to_fix_fill_only_numbers','fr-FR'))

                  hot.setDataAtCell(row, prop, '', 'my_source_empty')
                } else if (decimalSeparator == ',') {
                  //console.log(' ////////////////////////////// we are inside condition out 10 decimal separator , /////////////////////////////////////////////')
                  console.log('scientific format float mantissa and decimal separator is comma/comma and greather than 0.01')
                  console.log(parseFloat(value.replace(',', '.').replace(/\s/g, '')))
                  hot.setDataAtCell(row, prop, parseFloat(value.replace(',', '.').replace(/\s/g, '')).toString().replace('.', ','), 'my_source');
                  commentsPlugin.removeCommentAtCell(row, prop);

                }
                console.log('end conditon 10')
              }
            }
          } else if (value == '') {
            console.log('do nothing , we are in last invalid')
            console.log('COULD END HERE')
            console.log(isValid)
            console.log(source)

            //commentsPlugin.removeCommentAtCell(row,prop); //aa

          } else if (isValid == false) {
            console.log('we are before COMMENT CONTENTS !!!!!!!!!!!!!!!!!!!!!!!!!!')
            console.log(value)
            //commentsPlugin.setCommentAtCell(row, prop, "la valeur '" + value + "' n'est pas valide pour cette cellule. Veuillez saisir uniquement des valeurs numériques");
            commentsPlugin.setCommentAtCell(row, prop,comments_messages(value,'val_try_to_fix_fill_only_numbers','fr-FR'))

            //commentsPlugin.setCommentAtCell(row, prop, 'Please enter only numbers.<br><br><p style="color:red;">Veuillez entrer uniquement des nombres.</p>');

            commentsPlugin.showAtCell(row, prop);
            console.log('isvalid==false')
            //hot.setDataAtCell(row,prop,hot.getData()[row][prop])
            hot.setDataAtCell(row, prop, '', 'my_source_empty')
          } else {
            console.log('WE ARE IN THE END OF AFTERVALIDATE , THE ELSE PART : ')
            hot.setDataAtCell(row, prop, '', 'my_source_empty')
            //hot.setDataAtCell(row, prop, null, 'my_source_else_empty')
            console.log('condition out 11 ')
            console.log(isValid)
            console.log(value !== undefined)
            console.log(typeof value)
            console.log(/^\s*[-+]?(\s*\d+(\.\d*)?|\.\d+)\s*$/.test(value))
            console.log(/^\s*[-+]?(\s*\d+(,\d*)?|,\d+)\s*$/.test(value))

          }
        }
       
          }
          