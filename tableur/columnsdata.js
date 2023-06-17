import { data22fct } from './ddata.js';
import { PercentageEditor } from './PercentageEditor.js';

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


//var data22 = data22fct(last_row_after_header)
console.log('data22 in columnsdata module ')
var data22 = data22fct()
console.log(data22)

//var columnsdata = (imin,imax) => {
export function columnsdata(imin,imax) {
        //console.log('columnsdata')
        var fa=[]
        fa.push({data:0,readOnly:true})
          //console.log(this)
          //,type:'numeric'})
          //const rr = this.row;
          //const cc = this.col;
      
          for(let i=imin+1;i<imax-1;i++){
          // couting start from 1 (normal way ta3 normal way)  i==3 means the third column of THE SPREADSHEET without counting the first negeglible column (A)   
        
        if(i == 2){ 
          console.log('************** before validator i === 2 ')
            var dd={ data:i,
              className: "htRight htMiddle" ,
              validator: function (oldvalue, callback) { // validator of integers
                  const thisrow = this.row;
                  const thiscol = this.col;
                  //const value = oldvalue.replace(regexcurrenciesht, '');
                  // console.log('validator')
                  // console.log(oldvalue)
                  // console.log('validator is :' + oldvalue + 'and then')
                  // console.log(oldvalue=='')
                  // console.log(oldvalue==='')
              if(thisrow>5){
                   if (oldvalue != null) {//|| oldvalue.toString()!==null){
                     var value = oldvalue.toString().replace(currencyht_intint, '');
                     console.log('new VALuE in afterValidator is : ' + value)
                   } else {
                     console.log('we are inside validator oldvalue==null')
                     var value = null;
                   }
      
                  //var value = oldvalue;
      
                  //   const value = oldvalue.replace(currencyht_intint,'') ;
                  // console.log('new VALuE in validator is : ' +  value);
      
                  if (value == null ||
                    /^\s*[-+]?(\s*\d+)\s*$/.test(value) || // /^\s*[-+]?(\d+)\s*$/.test(value) || // when the value is whole number like 45 1987 2 36 ... // /^\s*[-+]?(\d+)\s*\$?\s*$/.test("  1235$  ")
                    /^\s*[-+]?(\s*\d+(\.\d*)?|\.\d+)\s*$/.test(value) || //1234567.89 (BY DEFAULT VALUE) AMERICAN NUMERIC FORMAT WITHOUT THOUSAND SEPARATOR
                    /^\s*[-+]?(\s*\d+(,\d*)?|,\d+)\s*$/.test(value) || //1234567,89 EUROPEAN NUMERIC FORMAT WITHOUT THOUSAND SEPARATOR
                    /^\s*[-+]?(\s*\d{1,3}( \d{3})*(,\d*)?|,\d+)\s*$/.test(value) || // 1 234 567,89 FRENCH NUMERIC FORMAT WITH THOUSAND SEPARATOR as space
                    /^\s*[-+]?(\s*\d{1,3}(,\d{3})*(\.\d+)?|\.\d+)\s*$/.test(value) || // 1,234,567.89 AMERICAN NUMERIC FORMAT WITH THOUSAND SEPARATOR as comma
                    /^\s*[-+]?(\s*\d{1,3}(?:\.\d{3})+(?:,\d+)?)\s*(?=\s|$)/.test(value) || // 1.234.567,89 EUROPEAN NUMERIC FORMAT WITH THOUSAND SEPARATOR as dot /^\s*[-+]?(\d{1,3}(?:[.,\s]\d{3})*(?:,\d+)?)\s*$/
                    /^\s*[-+]?(\s*\d{1,3}( \d{3})*(\.\d*)?|\.\d+)\s*$/.test(value) ||   // 1 234 567.89 AMERICAN NUMERIC FORMAT WITH THOUSAND SEPARATOR as space
                    /^\s*[-+]?[\s]*[0-9]*\.?[0-9]+([eE][-+]?[0-9]+)?\s*$/.test(value) || // 1.6e6 1.60E+04  -13.65E4  - 12.3E+03  scientific notation with E sign
                    /^\s*[-+]?[\s]*[0-9]*,?[0-9]+([eE][-+]?[0-9]+)?\s*$/.test(value)    // 1,6e6 1,60E+04  -13,65E4  - 12.3E+03  scientific notation with E sign
      
      
                  ) {
                    console.log('it returns true in validator')
                    if (value !== oldvalue) {
                      console.log('it returns true inside validator and value != oldvalud')
                      //callback(true,
                      //  hot.setDataAtCell(thisrow, thiscol, value)
                      //)
                      callback(true)
                      //hot.setDataAtCell(row,prop,this.getData()[row][prop])
                    } else {
                      callback(true)
                    }
                  } else {
                    console.log('we are in callback false')
                    callback(false);
                  }
                }
                },
      
              renderer: function (instance, td, row, col, prop, oldvalue, cellProperties) { // renderer of integers
                    if(row>5){  // editable
                     if (oldvalue !== null) {
                       var value = oldvalue.toString().replace(currencyht_intint, '');
                     } else {
                       var value = null
                     }
      
                    //var value=oldvalue;
      
                    if (value == null || value == '') {
                      td.innerHTML = ''
                      data22[row][col] = td.innerHTML;
                    }
                     else if (decimalSeparator == "." && /^\s*[-+]?(\s*\d+)\s*$/.test(value)) {
                      console.log('we are inside renderer . whole number . !!')
                      console.log(value)
                      const formatter = new Intl.NumberFormat(userLocale, {
                        useGrouping: usegrouping_intint_if_true,
                        style: 'decimal',
                        minimumFractionDigits: afterdigit_intint,
                        maximumFractionDigits: afterdigit_intint,
                      });
                      const value_without_whitespace = value.replace(/^\s*([-+])?\s*(\d+)\s*$/, '$1$2');
                      const formattedNumber = formatter.format(Number(value_without_whitespace));
                      Handsontable.renderers.TextRenderer.apply(this, arguments);
                      td.innerHTML = formattedNumber + currencyht_toshow_intint;
                      data22[row][col] = td.innerHTML;
      
                    }
                     else if (decimalSeparator == "," && /^\s*[-+]?(\s*\d+)\s*$/.test(value)) {
                      console.log('we are inside renderer , whole number , !!')
                      console.log(value)
                      const formatter = new Intl.NumberFormat(userLocale, {
                        useGrouping: usegrouping_intint_if_true,
                        style: 'decimal',
                        minimumFractionDigits: afterdigit_intint,
                        maximumFractionDigits: afterdigit_intint,
                      });
                      const value_without_whitespace = value.replace(/^\s*([-+])?\s*(\d+)\s*$/, '$1$2');
                      const formattedNumber = formatter.format(Number(value_without_whitespace));
                      Handsontable.renderers.TextRenderer.apply(this, arguments);
                      td.innerHTML = formattedNumber + currencyht_toshow_intint;
                      console.log('td : ')
                      console.log(td)
                      data22[row][col] = td.innerHTML;
      
      
                    }
                     else if (decimalSeparator == '.' && /^\s*[-+]?(\s*\d+(\.\d*)?|\.\d+)\s*$/.test(value)) {
                      console.log('we are inside rendere 1')
                      console.log('//1234567.89 (BY DEFAULT VALUE) AMERICAN NUMERIC FORMAT WITHOUT THOUSAND SEPARATOR')
                      console.log(value)
                      const value_without_whitespace2 = value.replace(/^\s*([-+])\s*(\d+)/, '$1$2');
      
                      //const userLocale = Intl.NumberFormat().resolvedOptions().locale || 'fr' || 'en'
                      const formatter = new Intl.NumberFormat(userLocale, {
                        useGrouping: usegrouping_intint_if_true,
                        style: 'decimal',
                        minimumFractionDigits: afterdigit_intint,
                        maximumFractionDigits: afterdigit_intint,
                      }); //('en')
                      if (Math.abs(Number(value_without_whitespace2)) < smallafterdigit_intint) {
                        const formatter22 = new Intl.NumberFormat(userLocale, {
                          useGrouping: usegrouping_intint_if_true,
                          style: 'decimal',
                          maximumFractionDigits: afterdigitsmallnb_intint,
                        });
                        const formattedNumber22 = formatter22.format(value_without_whitespace2);
                        Handsontable.renderers.TextRenderer.apply(this, arguments);
                        td.innerHTML = formattedNumber22 + currencyht_toshow_intint
                        console.log('we are inside td.innerhtml < 0.01')
                        data22[row][col] = td.innerHTML;
      
                      } else {
                        console.log('we are inside . and default and else (number value>0.01)')
                        const formattedNumber = formatter.format(Number(value_without_whitespace2));
                        Handsontable.renderers.TextRenderer.apply(this, arguments);
                        td.innerHTML = formattedNumber + currencyht_toshow_intint;
                        data22[row][col] = td.innerHTML;
      
                      }
      
                      console.log(td.innerHTML)
                    }
                     else if (decimalSeparator == ',' && /^\s*[-+]?(\s*\d+(,\d*)?|,\d+)\s*$/.test(value)) {
                      console.log('we are inside rendere 2')
                      console.log('we are inside decimalseparator == , and ezaoeza ')
                      console.log('//1234567,89 EUROPEAN FORMAT NUMERIC FORMAT WITHOUT THOUSAND')
                      //const userLocale = Intl.NumberFormat().resolvedOptions().locale || 'fr' || 'en'
                      const formatter = new Intl.NumberFormat(userLocale, {
                        useGrouping: usegrouping_intint_if_true,
                        style: 'decimal',
                        minimumFractionDigits: afterdigit_intint,
                        maximumFractionDigits: afterdigit_intint,
                      });
                      const value_without_whitespace3 = value.replace(/^\s*([-+])\s*(\d+)/, '$1$2');
      
                      console.log('value in second :')
                      console.log(value_without_whitespace3)
                      const value_without_whitespace32 = value_without_whitespace3.toString().replace(',', '.')
                      //console.log('value2 :')
                      //console.log(value2)
                      console.log(Number(value_without_whitespace32))
      
                      if (Math.abs(Number(value_without_whitespace32)) < smallafterdigit_intint) {
                        console.log('ifnumbervalue2222<0.01 comma')
                        console.log(Number(value_without_whitespace32))
                        const formatter33 = new Intl.NumberFormat(userLocale, {
                          useGrouping: usegrouping_intint_if_true,
                          style: 'decimal',
                          maximumFractionDigits: afterdigitsmallnb_intint,
                        });
                        const formattedNumber33 = formatter33.format(value_without_whitespace32);
                        Handsontable.renderers.TextRenderer.apply(this, arguments);
                        td.innerHTML = formattedNumber33 + currencyht_toshow_intint;
                        data22[row][col] = td.innerHTML;
      
                      } else {
                        const formattedNumber = formatter.format(value_without_whitespace32);
                        console.log(formattedNumber)
      
                        Handsontable.renderers.TextRenderer.apply(this, arguments);
                        td.innerHTML = formattedNumber + currencyht_toshow_intint;
                        data22[row][col] = td.innerHTML;
      
                      }
      
                    }
                     else if (decimalSeparator == ',' && /^\s*[-+]?(\s*\d{1,3}( \d{3})*(,\d*)?|,\d+)\s*$/.test(value)) {
                      console.log('we are inside rendere 3')
                      console.log('we are inside else if 300 000,00')
                      console.log('// 1 234 567,89 FRENCH NUMERIC FORMAT WITH THOUSAND SEPARATOR')
      
                      const formatter = new Intl.NumberFormat(userLocale, {
                        useGrouping: usegrouping_intint_if_true,
                        style: 'decimal',
                        minimumFractionDigits: afterdigit_intint,
                        maximumFractionDigits: afterdigit_intint,
                      });
                      const value3 = value.replace(/\s/g, '').replace(',', '.');
                      const formattedNumber = formatter.format(Number(value3).toFixed(2));
                      Handsontable.renderers.TextRenderer.apply(this, arguments);
                      td.innerHTML = formattedNumber + currencyht_toshow_intint;
                      data22[row][col] = td.innerHTML;
      
      
                    }
                     else if (decimalSeparator == '.' && /^\s*[-+]?(\s*\d{1,3}(,\d{3})*(\.\d+)?|\.\d+)\s*$/.test(value)) {
                      console.log('we are inside rendere 4')
                      console.log('5,455,653.35 ')
                      console.log('// 1,234,567.89 AMERICAN NUMERIC FORMAT WITH THOUSAND SEPARATOR')
                      const formatter = new Intl.NumberFormat(userLocale, {
                        useGrouping: usegrouping_intint_if_true,
                        style: 'decimal',
                        minimumFractionDigits: afterdigit_intint,
                        maximumFractionDigits: afterdigit_intint,
                      });
                      console.log('value in rendere 4 ')
                      console.log(value)
                      const value4 = value.replace(/,/g, '')
                     console.log(hot.undoRedo.doneActions)
                  /*    if(hot.undoRedo.doneActions.length>0){
                        
                      hot.undoRedo.doneActions[hot.undoRedo.doneActions.length - 1].changes.forEach((x, y) => {
                        console.log('we are inside foreach in renderer')
                         if (x[0] == row && x[1] == col) {
                        console.log('we are inside condition renderer')
                        //x[3] = value4
                      }
                      })
                      
                    }*/
                    //  hot.undoRedo.doneActions[hot.undoRedo.doneActions.length-1].changes[0][2]='820'
                     // if(src=='CopyPaste.paste'){
                     // console.log('inside copypaste.paste source in afterchange')
                     // console.log(changes)
                     //console.log(hot.undoRedo.doneActions[hot.undoRedo.doneActions.length-1].changes[0][2]='82')
                     // }
                     console.log('value4:') 
                     console.log(value4)
                      const formattedNumber = formatter.format(Number(value4).toFixed(2));
                      Handsontable.renderers.TextRenderer.apply(this, arguments);
                      td.innerHTML = formattedNumber + currencyht_toshow_intint;
                      data22[row][col] = td.innerHTML;
      
      
                    }
                     else if (decimalSeparator == ',' && /^\s*[-+]?(\s*\d{1,3}(?:\.\d{3})+(?:,\d+)?)\s*(?=\s|$)/.test(value)) {
                      // 1.234.567,89 EUROPEAN NUMERIC FORMAT WITH THOUSAND SEPARATOR as dot
                      console.log('we are inside rendere 5')
                      console.log('5.300.000,00')
                      console.log('// 1.234.567,89 EUROPEAN NUMERIC FORMAT WITH THOUSAND SEPARATOR as dot')
                      const formatter = new Intl.NumberFormat(userLocale, {
                        useGrouping: usegrouping_intint_if_true,
                        style: 'decimal',
                        minimumFractionDigits: afterdigit_intint,
                        maximumFractionDigits: afterdigit_intint,
                      });
                      const value_without_whitespace4 = value.replace(/^\s*([-+])\s*(\d+)/, '$1$2')
                      const value_without_whitespace45 = value_without_whitespace4.trim().replace(/\./g, '').replace(',', '.')
                      //const value5 = value.trim().replace(/\./g, '')
      
                      const formattedNumber = formatter.format(Number(value_without_whitespace45).toFixed(2));
                      Handsontable.renderers.TextRenderer.apply(this, arguments);
                      td.innerHTML = formattedNumber + currencyht_toshow_intint;
                      data22[row][col] = td.innerHTML;
      
                    } 
                    else if (decimalSeparator == '.' && /^\s*[-+]?(\s*\d{1,3}( \d{3})*(\.\d*)?|\.\d+)\s*$/.test(value)) {
                      console.log('we are inside rendere 6')
                      console.log('we are inside else if 300 000.00')
                      console.log('// 1 234 567.89 AMERICAN NUMERIC FORMAT WITH THOUSAND SEPARATOR')
      
                      const formatter = new Intl.NumberFormat(userLocale, {
                        useGrouping: usegrouping_intint_if_true,
                        style: 'decimal',
                        minimumFractionDigits: afterdigit_intint,
                        maximumFractionDigits: afterdigit_intint,
                      });
                      const value6 = value.replace(/\s/g, '');
                      const formattedNumber = formatter.format(Number(value6).toFixed(2));
                      Handsontable.renderers.TextRenderer.apply(this, arguments);
                      td.innerHTML = formattedNumber + currencyht_toshow_intint;
                      data22[row][col] = td.innerHTML;
      
                    }
                     else if (decimalSeparator == '.' && /^\s*[-+]?[\s]*[0-9]*\.?[0-9]+([eE][-+]?[0-9]+)?\s*$/.test(value)) {
                      console.log('we are inside rendere 7')
                      console.log('we are inside scientific notation :');
                      console.log('// 1.6e6 1.60E+04  -13.65E4  - 12.3E+03  scientific notation with E sign');
                      const formatter = new Intl.NumberFormat(userLocale, {
                        useGrouping: usegrouping_intint_if_true,
                        style: 'decimal',
                        minimumFractionDigits: afterdigit_intint,
                        maximumFractionDigits: afterdigit_intint,
                      });
                      const value7 = parseFloat(value.replace(/\s/g, ''));
                      const formattedNumber = formatter.format(Number(value7));
                      Handsontable.renderers.TextRenderer.apply(this, arguments);
                      td.innerHTML = formattedNumber + currencyht_toshow_intint;
                      data22[row][col] = td.innerHTML;
      
                    }
                     else if (decimalSeparator == ',' && /^\s*[-+]?[\s]*[0-9]*,?[0-9]+([eE][-+]?[0-9]+)?\s*$/.test(value)) {
                      //console.log('----------------------------------------rendere 8 ---------------------------------------- rendere 8 ------------------------')
                      console.log('we are inside rendere 8')
                      console.log('we are inside scientific notation with comma :');
                      console.log('// 1,6e6 1,60E+04  -13,65E4  - 12,3E+03  scientific notation with E sign');
                      console.log('value inside scientific notation with comma else if : ')
                      const value8 = parseFloat(value.replace(',', '.').replace(/\s/g, ''));
                      console.log('value8 : ')
                      console.log(value8)
      
                      if (Math.abs(Number(value8)) < smallafterdigit_intint) {
                        console.log('ifnumbervalue2222<0.01 comma sceintific number')
                        console.log(Number(value8))
                        const formatter88 = new Intl.NumberFormat(userLocale, {
                          useGrouping: usegrouping_intint_if_true,
                          style: 'decimal',
                          maximumFractionDigits: afterdigitsmallnb_intint,
                        });
                        const formattedNumber88 = formatter88.format(value8);
                        Handsontable.renderers.TextRenderer.apply(this, arguments);
                        td.innerHTML = formattedNumber88 + currencyht_toshow_intint;
                        data22[row][col] = td.innerHTML;
      
                      } else {
                        const formatter = new Intl.NumberFormat(userLocale, {
                          useGrouping: usegrouping_intint_if_true,
                          style: 'decimal',
                          minimumFractionDigits: afterdigit_intint,
                          maximumFractionDigits: afterdigit_intint,
                        });
                        const formattedNumber = formatter.format(Number(value8));
                        Handsontable.renderers.TextRenderer.apply(this, arguments);
                        td.innerHTML = formattedNumber + currencyht_toshow_intint;
                        console.log(td.innerHTML)
                        data22[row][col] = td.innerHTML;
      
                      }
                    } 
                    else {
                      console.log('WE ARE INSIDE LAST ELSE RENDERER')
                    }
                  
                  td.className = 'htLeft htMiddle custom-normalcell'
                  //td.innerHTML=''
                    } else {
                      if(row>3){ // editable
                      //td.innerHTML = '<b>' + oldvalue + '</b>';
                      td.innerHTML=oldvalue;
                      data22[row][col] = td.innerHTML;      
                      td.className = 'htCenter htMiddle custom-titlecell2';
                      //td.style.fontWeight = 900;
                      //td.style.textAlign = 'left';
                    }
                  }
                  }
        }
        }
         else if(i == 3 || i == 4    || i == 5   || i == 10 ){ 
            var dd={ data:i,
              className: "htRight htMiddle" ,
                editor: PercentageEditor,
                validator: function (value, callback) { // validator of percentage
                  const thisrow = this.row;
                  const thiscol = this.col;
                  //const value = oldvalue.replace(regexcurrenciesht, '');
                  // console.log('validator in percentage')
                  // console.log(value)
                  if(thisrow>5){
                  if (value == null || // value == '' ||
                    /^[-+]?(\s*\d+(\.\d+)?)\s*%$/.test(value.toString().trim()) || // for example 14.65%  "14.65 %"  
                    /^[-+]?(\s*\d+(,\d+)?)\s*%$/.test(value.toString().trim()) || // for example 14,65%   "14,65 %"
                    
                    /^[-+]?(\s*\d+(\.\d+)?)\s*$/.test(value.toString().trim()) || // for example 14.65  "14.65 "  
                    /^[-+]?(\s*\d+(,\d+)?)\s*$/.test(value.toString().trim()) // for example 14,65   "14,65 "
                  ) {
                    console.log('it returns true in percentage validator')             
                    callback(true)              
                  } else {
                    console.log('we are in callback false percentage validator')
                    callback(false);
                  }
                }
                },
                renderer: function (instance, td, row, col, prop, oldvalue, cellProperties) { // renderer of numbers or amounts
                  //console.log('renderer percentage start')
                  if(row>5){  // editable
      
                  if (oldvalue==null){
                  //console.log('renderer percentage 0 part')
                  td.innerHTML='';
                  data22[row][col] = td.innerHTML;      
                  cellProperties.className = 'htRight'; 
                  td.style.textAlign = 'right';
                  }
                   else if( //oldvalue == null || // value == '' ||
                    /^[-+]?(\s*\d+(\.\d+)?)\s*%$/.test(oldvalue.toString().trim()) || // for example 14.65%  "14.65 %"  
                    /^[-+]?(\s*\d+(,\d+)?)\s*%$/.test(oldvalue.toString().trim()) || // for example 14,65%   "14,65 %"
                    
                    /^[-+]?(\s*\d+(\.\d+)?)\s*$/.test(oldvalue.toString().trim()) || // for example 14.65  "14.65 "  
                    /^[-+]?(\s*\d+(,\d+)?)\s*$/.test(oldvalue.toString().trim()) // for example 14,65   "14,65 "
                  ) {
                       console.log('renderer percentage 1part')
                       const value_percentage_renderer = parseFloat(oldvalue.toString().replace(',', '.').replace('%','').replace(/\s/g, ''));
                       console.log(oldvalue)
                       console.log(value_percentage_renderer)
                       if(Math.abs(value_percentage_renderer)<smallafterdigit_percentage_percperc){
                        const formatter88_percentage = new Intl.NumberFormat(userLocale, {
                          style: 'decimal',
                          maximumFractionDigits: afterdigitsmallnb_percentage_percperc,
                          useGrouping: false // removing thousand separator
                        });
                        const formattedNumber88_percentage = formatter88_percentage.format(value_percentage_renderer);
                        Handsontable.renderers.TextRenderer.apply(this, arguments);
                        td.innerHTML = formattedNumber88_percentage+'%';
                        data22[row][col] = td.innerHTML+'%'
      
                       } else {
                       const formatter_percentage = new Intl.NumberFormat(userLocale, {
                          style: 'decimal',
                          minimumFractionDigits: afterdigit_percentage_percperc,
                          maximumFractionDigits: afterdigit_percentage_percperc,
                          useGrouping: false // removing thousand separator
                        });
                        console.log('renderer 2condition : ')
                        console.log(oldvalue)
                        console.log(value_percentage_renderer)
                        const formattedNumber_percentage = formatter_percentage.format(Number(value_percentage_renderer));
                        console.log(formattedNumber_percentage)
      
                        Handsontable.renderers.TextRenderer.apply(this, arguments);
                        td.innerHTML = formattedNumber_percentage+'%';
                      //  console.log(td.innerHTML)
                        data22[row][col] = td.innerHTML+'%';      
                       //td.innerHTML=oldvalue;
                       cellProperties.className = 'htRight'; 
                       td.style.textAlign = 'right';
                       }
                }
                else {
                  //console.log('renderer percentage 02 part')
                  td.innerHTML='';
                  data22[row][col] = td.innerHTML;      
                  td.className = 'htRight'; 
                  td.style.textAlign = 'right';
                }
                td.className = 'htLeft htMiddle custom-normalcell'
      
                //console.log('renderer percentage end')
      
                } else if ( row>3 ) {
                  //data22[row][col] = td.innerHTML;      
                      td.innerHTML=oldvalue;
                      data22[row][col] = td.innerHTML;      
                      td.className = 'htCenter htMiddle custom-titlecell2';
              }
              
              
            }
        }
      }
        else if(i == 6 || i == 7 || i == 8      || i == 11 || i == 12 || i == 13 ){
            var dd={
              className: "htRight htMiddle" ,
              validator: function (oldvalue, callback) { // validator of numbers or amounts
                  const thisrow = this.row;
                  const thiscol = this.col;
                  //const value = oldvalue.replace(regexcurrenciesht, '');
                  // console.log('validator')
                  // console.log(oldvalue)
                  // console.log('validator is :' + oldvalue + 'and then')
                  // console.log(oldvalue=='')
                  // console.log(oldvalue==='')
                  if(thisrow>5){
                  if (oldvalue != null) {//|| oldvalue.toString()!==null){
                    var value = oldvalue.toString().replace(currencyht_nbnb, '');
                    console.log('new VALuE in afterValidator is : ' + value)
                  } else {
                    console.log('we are inside validator oldvalue==null')
                    var value = null;
                  }
                  //   const value = oldvalue.replace(currencyht_nbnb,'') ;
                  // console.log('new VALuE in validator is : ' +  value);
      
                  if (value == null ||
                    /^\s*[-+]?(\s*\d+)\s*$/.test(value) || // /^\s*[-+]?(\d+)\s*$/.test(value) || // when the value is whole number like 45 1987 2 36 ... // /^\s*[-+]?(\d+)\s*\$?\s*$/.test("  1235$  ")
                    /^\s*[-+]?(\s*\d+(\.\d*)?|\.\d+)\s*$/.test(value) || //1234567.89 (BY DEFAULT VALUE) AMERICAN NUMERIC FORMAT WITHOUT THOUSAND SEPARATOR
                    /^\s*[-+]?(\s*\d+(,\d*)?|,\d+)\s*$/.test(value) || //1234567,89 EUROPEAN NUMERIC FORMAT WITHOUT THOUSAND SEPARATOR
                    /^\s*[-+]?(\s*\d{1,3}( \d{3})*(,\d*)?|,\d+)\s*$/.test(value) || // 1 234 567,89 FRENCH NUMERIC FORMAT WITH THOUSAND SEPARATOR as space
                    /^\s*[-+]?(\s*\d{1,3}(,\d{3})*(\.\d+)?|\.\d+)\s*$/.test(value) || // 1,234,567.89 AMERICAN NUMERIC FORMAT WITH THOUSAND SEPARATOR as comma
                    /^\s*[-+]?(\s*\d{1,3}(?:\.\d{3})+(?:,\d+)?)\s*(?=\s|$)/.test(value) || // 1.234.567,89 EUROPEAN NUMERIC FORMAT WITH THOUSAND SEPARATOR as dot /^\s*[-+]?(\d{1,3}(?:[.,\s]\d{3})*(?:,\d+)?)\s*$/
                    /^\s*[-+]?(\s*\d{1,3}( \d{3})*(\.\d*)?|\.\d+)\s*$/.test(value) ||   // 1 234 567.89 AMERICAN NUMERIC FORMAT WITH THOUSAND SEPARATOR as space
                    /^\s*[-+]?[\s]*[0-9]*\.?[0-9]+([eE][-+]?[0-9]+)?\s*$/.test(value) || // 1.6e6 1.60E+04  -13.65E4  - 12.3E+03  scientific notation with E sign
                    /^\s*[-+]?[\s]*[0-9]*,?[0-9]+([eE][-+]?[0-9]+)?\s*$/.test(value)    // 1,6e6 1,60E+04  -13,65E4  - 12.3E+03  scientific notation with E sign
      
      
                  ) {
                    console.log('it returns true in validator')
                    if (value !== oldvalue) {
                      console.log('it returns true inside validator and value != oldvalud')
                      //callback(true,
                      //  hot.setDataAtCell(thisrow, thiscol, value)
                      //)
                      callback(true)
                      //hot.setDataAtCell(row,prop,this.getData()[row][prop])
                    } else {
                      callback(true)
                    }
                  } else {
                    console.log('we are in callback false')
                    callback(false);
                  }
                }
                },
              renderer: function (instance, td, row, col, prop, oldvalue, cellProperties) { // renderer of numbers or amounts
                
                //  console.log('renderer :')       
                  //if (col == 1) { //editable column changeable , and it can be removed because renderer is inside column
                    //const value = oldvalue.replace(regexcurrenciesht, '');
                 if(row>5){
                    if (oldvalue !== null) {
                      var value = oldvalue.toString().replace(currencyht_nbnb, '');
                    } else {
                      var value = null
                    }
      
                    if (value == null || value == '') {
                      td.innerHTML = ''
                      data22[row][col] = td.innerHTML;
                    } else if (decimalSeparator == "." && /^\s*[-+]?(\s*\d+)\s*$/.test(value)) {
                      console.log('we are inside renderer . whole number')
                      console.log(value)
                      const formatter = new Intl.NumberFormat(userLocale, {
                        useGrouping: usegrouping_nbnb_if_true,
                        style: 'decimal',
                        minimumFractionDigits: afterdigit_nbnb,
                        maximumFractionDigits: afterdigit_nbnb,
                      });
                      const value_without_whitespace = value.replace(/^\s*([-+])?\s*(\d+)\s*$/, '$1$2');
                      const formattedNumber = formatter.format(Number(value_without_whitespace));
                      Handsontable.renderers.TextRenderer.apply(this, arguments);
                      td.innerHTML = formattedNumber + currencyht_toshow_nbnb;
                      data22[row][col] = td.innerHTML;
      
                    } else if (decimalSeparator == "," && /^\s*[-+]?(\s*\d+)\s*$/.test(value)) {
                      console.log('we are inside renderer , whole number')
                      console.log(value)
                      const formatter = new Intl.NumberFormat(userLocale, {
                        useGrouping: usegrouping_nbnb_if_true,
                        style: 'decimal',
                        minimumFractionDigits: afterdigit_nbnb,
                        maximumFractionDigits: afterdigit_nbnb,
                      });
                      const value_without_whitespace = value.replace(/^\s*([-+])?\s*(\d+)\s*$/, '$1$2');
                      const formattedNumber = formatter.format(Number(value_without_whitespace));
                      Handsontable.renderers.TextRenderer.apply(this, arguments);
                      td.innerHTML = formattedNumber + currencyht_toshow_nbnb;
                      data22[row][col] = td.innerHTML;
      
      
                    } else if (decimalSeparator == '.' && /^\s*[-+]?(\s*\d+(\.\d*)?|\.\d+)\s*$/.test(value)) {
                      console.log('we are inside rendere 1')
                      console.log('//1234567.89 (BY DEFAULT VALUE) AMERICAN NUMERIC FORMAT WITHOUT THOUSAND SEPARATOR')
                      console.log(value)
                      const value_without_whitespace2 = value.replace(/^\s*([-+])\s*(\d+)/, '$1$2');
      
                      //const userLocale = Intl.NumberFormat().resolvedOptions().locale || 'fr' || 'en'
                      const formatter = new Intl.NumberFormat(userLocale, {
                        useGrouping: usegrouping_nbnb_if_true,
                        style: 'decimal',
                        minimumFractionDigits: afterdigit_nbnb,
                        maximumFractionDigits: afterdigit_nbnb,
                      }); //('en')
                      if (Math.abs(Number(value_without_whitespace2)) < smallafterdigit_nbnb) {
                        const formatter22 = new Intl.NumberFormat(userLocale, {
                          useGrouping: usegrouping_nbnb_if_true,
                          style: 'decimal',
                          maximumFractionDigits: afterdigitsmallnb_nbnb,
                        });
                        const formattedNumber22 = formatter22.format(value_without_whitespace2);
                        Handsontable.renderers.TextRenderer.apply(this, arguments);
                        td.innerHTML = formattedNumber22 + currencyht_toshow_nbnb
                        console.log('we are inside td.innerhtml < 0.01')
                        data22[row][col] = td.innerHTML;
      
                      } else {
                        console.log('we are inside . and default and else (number value>0.01)')
                        const formattedNumber = formatter.format(Number(value_without_whitespace2));
                        Handsontable.renderers.TextRenderer.apply(this, arguments);
                        td.innerHTML = formattedNumber + currencyht_toshow_nbnb;
                        data22[row][col] = td.innerHTML;
      
                      }
      
                      console.log(td.innerHTML)
                    } else if (decimalSeparator == ',' && /^\s*[-+]?(\s*\d+(,\d*)?|,\d+)\s*$/.test(value)) {
                      console.log('we are inside rendere 2')
                      console.log('we are inside decimalseparator == , and ezaoeza ')
                      console.log('//1234567,89 EUROPEAN FORMAT NUMERIC FORMAT WITHOUT THOUSAND')
                      //const userLocale = Intl.NumberFormat().resolvedOptions().locale || 'fr' || 'en'
                      const formatter = new Intl.NumberFormat(userLocale, {
                        useGrouping: usegrouping_nbnb_if_true,
                        style: 'decimal',
                        minimumFractionDigits: afterdigit_nbnb,
                        maximumFractionDigits: afterdigit_nbnb,
                      });
                      const value_without_whitespace3 = value.replace(/^\s*([-+])\s*(\d+)/, '$1$2');
      
                      console.log('value in second :')
                      console.log(value_without_whitespace3)
                      const value_without_whitespace32 = value_without_whitespace3.toString().replace(',', '.')
                      //console.log('value2 :')
                      //console.log(value2)
                      console.log(Number(value_without_whitespace32))
      
                      if (Math.abs(Number(value_without_whitespace32)) < smallafterdigit_nbnb) {
                        console.log('ifnumbervalue2222<0.01 comma')
                        console.log(Number(value_without_whitespace32))
                        const formatter33 = new Intl.NumberFormat(userLocale, {
                          useGrouping: usegrouping_nbnb_if_true,
                          style: 'decimal',
                          maximumFractionDigits: afterdigitsmallnb_nbnb,
                        });
                        const formattedNumber33 = formatter33.format(value_without_whitespace32);
                        Handsontable.renderers.TextRenderer.apply(this, arguments);
                        td.innerHTML = formattedNumber33 + currencyht_toshow_nbnb;
                        data22[row][col] = td.innerHTML;
      
                      } else {
                        const formattedNumber = formatter.format(value_without_whitespace32);
                        console.log(formattedNumber)
      
                        Handsontable.renderers.TextRenderer.apply(this, arguments);
                        td.innerHTML = formattedNumber + currencyht_toshow_nbnb;
                        data22[row][col] = td.innerHTML;
      
                      }
      
                    } else if (decimalSeparator == ',' && /^\s*[-+]?(\s*\d{1,3}( \d{3})*(,\d*)?|,\d+)\s*$/.test(value)) {
                      console.log('we are inside rendere 3')
                      console.log('we are inside else if 300 000,00')
                      console.log('// 1 234 567,89 FRENCH NUMERIC FORMAT WITH THOUSAND SEPARATOR')
      
                      const formatter = new Intl.NumberFormat(userLocale, {
                        style: 'decimal',
                        useGrouping: usegrouping_nbnb_if_true,
                        minimumFractionDigits: afterdigit_nbnb,
                        maximumFractionDigits: afterdigit_nbnb,
                      });
                      const value3 = value.replace(/\s/g, '').replace(',', '.');
                      const formattedNumber = formatter.format(Number(value3).toFixed(2));
                      Handsontable.renderers.TextRenderer.apply(this, arguments);
                      td.innerHTML = formattedNumber + currencyht_toshow_nbnb;
                      data22[row][col] = td.innerHTML;
      
      
                    } else if (decimalSeparator == '.' && /^\s*[-+]?(\s*\d{1,3}(,\d{3})*(\.\d+)?|\.\d+)\s*$/.test(value)) {
                      console.log('we are inside rendere 4')
                      console.log('5,455,653.35 ')
                      console.log('// 1,234,567.89 AMERICAN NUMERIC FORMAT WITH THOUSAND SEPARATOR')
                      const formatter = new Intl.NumberFormat(userLocale, {
                        style: 'decimal',
                        useGrouping: usegrouping_nbnb_if_true,
                        minimumFractionDigits: afterdigit_nbnb,
                        maximumFractionDigits: afterdigit_nbnb,
                      });
                      console.log('value in rendere 4 ')
                      console.log(value)
                      const value4 = value.replace(/,/g, '')
                     console.log(hot.undoRedo.doneActions)
                 
                     console.log('value4:') 
                     console.log(value4)
                      const formattedNumber = formatter.format(Number(value4).toFixed(2));
                      Handsontable.renderers.TextRenderer.apply(this, arguments);
                      td.innerHTML = formattedNumber + currencyht_toshow_nbnb;
                      data22[row][col] = td.innerHTML;
      
      
                    } else if (decimalSeparator == ',' && /^\s*[-+]?(\s*\d{1,3}(?:\.\d{3})+(?:,\d+)?)\s*(?=\s|$)/.test(value)) {
                      // 1.234.567,89 EUROPEAN NUMERIC FORMAT WITH THOUSAND SEPARATOR as dot
                      console.log('we are inside rendere 5')
                      console.log('5.300.000,00')
                      console.log('// 1.234.567,89 EUROPEAN NUMERIC FORMAT WITH THOUSAND SEPARATOR as dot')
                      const formatter = new Intl.NumberFormat(userLocale, {
                        style: 'decimal',
                        useGrouping: usegrouping_nbnb_if_true,
                        minimumFractionDigits: afterdigit_nbnb,
                        maximumFractionDigits: afterdigit_nbnb,
                      });
                      const value_without_whitespace4 = value.replace(/^\s*([-+])\s*(\d+)/, '$1$2')
                      const value_without_whitespace45 = value_without_whitespace4.trim().replace(/\./g, '').replace(',', '.')
                      //const value5 = value.trim().replace(/\./g, '')
      
                      const formattedNumber = formatter.format(Number(value_without_whitespace45).toFixed(2));
                      Handsontable.renderers.TextRenderer.apply(this, arguments);
                      td.innerHTML = formattedNumber + currencyht_toshow_nbnb;
                      data22[row][col] = td.innerHTML;
      
                    } else if (decimalSeparator == '.' && /^\s*[-+]?(\s*\d{1,3}( \d{3})*(\.\d*)?|\.\d+)\s*$/.test(value)) {
                      console.log('we are inside rendere 6')
                      console.log('we are inside else if 300 000.00')
                      console.log('// 1 234 567.89 AMERICAN NUMERIC FORMAT WITH THOUSAND SEPARATOR')
      
                      const formatter = new Intl.NumberFormat(userLocale, {
                        useGrouping: usegrouping_nbnb_if_true,
                        style: 'decimal',
                        minimumFractionDigits: afterdigit_nbnb,
                        maximumFractionDigits: afterdigit_nbnb,
                      });
                      const value6 = value.replace(/\s/g, '');
                      const formattedNumber = formatter.format(Number(value6).toFixed(2));
                      Handsontable.renderers.TextRenderer.apply(this, arguments);
                      td.innerHTML = formattedNumber + currencyht_toshow_nbnb;
                      data22[row][col] = td.innerHTML;
      
                    } else if (decimalSeparator == '.' && /^\s*[-+]?[\s]*[0-9]*\.?[0-9]+([eE][-+]?[0-9]+)?\s*$/.test(value)) {
                      console.log('we are inside rendere 7')
                      console.log('we are inside scientific notation :');
                      console.log('// 1.6e6 1.60E+04  -13.65E4  - 12.3E+03  scientific notation with E sign');
                      const formatter = new Intl.NumberFormat(userLocale, {
                        useGrouping: usegrouping_nbnb_if_true,
                        style: 'decimal',
                        minimumFractionDigits: afterdigit_nbnb,
                        maximumFractionDigits: afterdigit_nbnb,
                      });
                      const value7 = parseFloat(value.replace(/\s/g, ''));
                      const formattedNumber = formatter.format(Number(value7));
                      Handsontable.renderers.TextRenderer.apply(this, arguments);
                      td.innerHTML = formattedNumber + currencyht_toshow_nbnb;
                      data22[row][col] = td.innerHTML;
      
                    } else if (decimalSeparator == ',' && /^\s*[-+]?[\s]*[0-9]*,?[0-9]+([eE][-+]?[0-9]+)?\s*$/.test(value)) {
                      //console.log('----------------------------------------rendere 8 ---------------------------------------- rendere 8 ------------------------')
                      console.log('we are inside rendere 8')
                      console.log('we are inside scientific notation with comma :');
                      console.log('// 1,6e6 1,60E+04  -13,65E4  - 12,3E+03  scientific notation with E sign');
                      console.log('value inside scientific notation with comma else if : ')
                      const value8 = parseFloat(value.replace(',', '.').replace(/\s/g, ''));
                      console.log('value8 : ')
                      console.log(value8)
      
                      if (Math.abs(Number(value8)) < smallafterdigit_nbnb) {
                        console.log('ifnumbervalue2222<0.01 comma sceintific number')
                        console.log(Number(value8))
                        const formatter88 = new Intl.NumberFormat(userLocale, {
                          useGrouping: usegrouping_nbnb_if_true,
                          style: 'decimal',
                          maximumFractionDigits: afterdigitsmallnb_nbnb,
                        });
                        const formattedNumber88 = formatter88.format(value8);
                        Handsontable.renderers.TextRenderer.apply(this, arguments);
                        td.innerHTML = formattedNumber88 + currencyht_toshow_nbnb;
                        data22[row][col] = td.innerHTML;
      
                      } else {
                        const formatter = new Intl.NumberFormat(userLocale, {
                          useGrouping: usegrouping_nbnb_if_true,
                          style: 'decimal',
                          minimumFractionDigits: afterdigit_nbnb,
                          maximumFractionDigits: afterdigit_nbnb,
                        });
                        const formattedNumber = formatter.format(Number(value8));
                        Handsontable.renderers.TextRenderer.apply(this, arguments);
                        td.innerHTML = formattedNumber + currencyht_toshow_nbnb;
                        console.log(td.innerHTML)
                        data22[row][col] = td.innerHTML;
      
                      }
                    } else {
                      console.log('WE ARE INSIDE LAST ELSE RENDERER')
                    }
                  
                  td.className = 'htLeft htMiddle custom-normalcell';
                  //console.log('renderer percentage end')
                } else if ( row>3 ) {
                    //data22[row][col] = td.innerHTML;
                     td.innerHTML=oldvalue;
                     data22[row][col] = td.innerHTML;
                     td.className = 'htCenter htMiddle custom-titlecell2';
                  }
                  }
             
            }
        }
        else {
          //console.log('columnsdata else ')
            var dd={data:i,type:'text'}
            //console.log(dd)
          }
          fa.push(dd)
      }
      fa.push({data:15,readOnly:true})
      return fa
      }