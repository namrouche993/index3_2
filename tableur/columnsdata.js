import { data22fct } from './ddata.js';
import { PercentageEditor } from './PercentageEditor.js';
import { validator_amounts,renderer_amounts } from './valid_amounts.js'
import { validator_integers,renderer_integers } from './valid_integers.js'
import { validator_percentage,renderer_percentage } from './valid_percentage.js'

import { validator_date,renderer_date } from './valid_date.js' //is_date_exist==false
import { validator_dropdown,renderer_dropdown } from './valid_dropdown.js'
import { validator_email,renderer_email } from './valid_email.js'
import { validator_onlynb,renderer_onlynb } from './valid_onlynb.js'
import { validator_phonenumber,renderer_phonenumber } from './valid_phonenumber.js'
import { validator_text,renderer_text } from './valid_text.js'


import 
{ 
  getInputValue_userLocale2,
  getInputValue_navigator_language2, //is_date_exist==false
  getValue_decimalSeparator2
}
from './intials_inputs_nb.js'


import{
  //decimalSeparator,userLocale,navigator_language,
  userTimeZone,usTimeZones, //is_date_exist==false

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
  onlynumbers_length_on,
  text_length_txt,
  use_en_time //is_date_exist==false
} from './intials_inputs_nb.js';


//var data22 = data22fct(last_row_after_header)
//console.log('data22 in columnsdata module ')
var data22 = data22fct()
//console.log(data22)

//var columnsdata = (imin,imax) => {
export function columnsdata(imin,imax) {
  


        ////console.log('columnsdata')
        var fa=[]
        fa.push({data:0,readOnly:true})      
          for(let i=imin+1;i<imax-1;i++){
          // couting start from 1 (normal way ta3 normal way)  i==3 means the third column of THE SPREADSHEET without counting the first negeglible column (A)   
        
        if(i == 2){ //editable of course
          //console.log('************** before validator i === 2 ')
            var dd={ data:i,
              className: "htRight htMiddle" ,
              validator: function (oldvalue, callback) { // validator of integers
                const thisrow = this.row;
                const thiscol = this.col;
                let decimalSeparator = getValue_decimalSeparator2();
                let userLocale = getInputValue_userLocale2();
                //let navigator_language = getInputValue_navigator_language2();
                
               
                if(thisrow>5){ // editable
                  validator_integers(oldvalue, callback,thisrow,thiscol,

                    decimalSeparator,userLocale,
                    //navigator_language,userTimeZone,usTimeZones,
    currencyht_intint,currencyht_toshow_intint,afterdigit_intint,smallafterdigit_intint,afterdigitsmallnb_intint,
    bignb_intint,smallnb_intint,decimalnumbers_toshow_withoutrenderer_innumbers_intint,usegrouping_intint_if_true,
    is_negativenb_accepted_intint,is_float_accepted_intint

                    )
                }
                },
      
              renderer: function (instance, td, row, col, prop, oldvalue, cellProperties,...otherArgs) { // renderer of integers
                if(row>5){  // editable
                  let decimalSeparator = getValue_decimalSeparator2();
                  let userLocale = getInputValue_userLocale2();
                  //let navigator_language = getInputValue_navigator_language2();
               
                  renderer_integers(instance, td, row, col, prop, oldvalue, cellProperties,

                    decimalSeparator,userLocale,
                    //navigator_language,userTimeZone,usTimeZones,
    currencyht_intint,currencyht_toshow_intint,afterdigit_intint,smallafterdigit_intint,afterdigitsmallnb_intint,
    bignb_intint,smallnb_intint,decimalnumbers_toshow_withoutrenderer_innumbers_intint,usegrouping_intint_if_true,
    is_negativenb_accepted_intint,is_float_accepted_intint

                    ,...otherArgs,data22)
                } else if (row>3){ // editable about headers
                          td.innerHTML=oldvalue;
                          data22[row][col] = td.innerHTML;      
                          td.className = 'htCenter htMiddle custom-titlecell2';                  
                }
                }
        }
        
      
      }
         else if(i == 3 || i == 4    || i == 5   || i == 10 ){  //editable of course
            var dd={ data:i,
              className: "htRight htMiddle" ,
                editor: PercentageEditor,
                validator: function (value, callback) { // validator of percentage
                  const thisrow = this.row;
                  const thiscol = this.col;
                  let decimalSeparator = getValue_decimalSeparator2();
                let userLocale = getInputValue_userLocale2();
                //let navigator_language = getInputValue_navigator_language2();
                
                  if(thisrow>5){ // editable
                    validator_percentage(value, callback,
                      
    decimalSeparator,userLocale,
    //navigator_language,userTimeZone,usTimeZones,
    afterdigit_percentage_percperc,smallafterdigit_percentage_percperc,afterdigitsmallnb_percentage_percperc,
    bignbpercent_percperc,smallnbpercent_percperc,decimalnumbers_toshow_withoutrenderer_inpercentage_percperc,
    is_negativenb_accepted_percperc,is_float_accepted_percperc

                      
                      )
                }
                },
                renderer: function (instance, td, row, col, prop, oldvalue, cellProperties,...otherArgs) { // renderer of integers
                  let decimalSeparator = getValue_decimalSeparator2();
                  let userLocale = getInputValue_userLocale2();
                 // let navigator_language = getInputValue_navigator_language2();
                
                  if(row>5){ // editable
                    renderer_percentage(instance, td, row, col, prop, oldvalue, cellProperties,
                      
    decimalSeparator,userLocale,
    //navigator_language,userTimeZone,usTimeZones,
    afterdigit_percentage_percperc,smallafterdigit_percentage_percperc,afterdigitsmallnb_percentage_percperc,
    bignbpercent_percperc,smallnbpercent_percperc,decimalnumbers_toshow_withoutrenderer_inpercentage_percperc,
    is_negativenb_accepted_percperc,is_float_accepted_percperc

                      ,...otherArgs,data22)
                  } else if (row>3){ // editable
                    td.innerHTML=oldvalue;
                    data22[row][col] = td.innerHTML;      
                    td.className = 'htCenter htMiddle custom-titlecell2';
                  }
                  }   
      }
    }
        else if(i == 6 || i == 7 || i == 8      || i == 11 || i == 12 || i == 13 ){ //editable of course
            var dd={
              className: "htRight htMiddle" ,
              validator: function (oldvalue, callback) { // validator of numbers or amounts
                  const thisrow = this.row;
                  const thiscol = this.col;
                  let decimalSeparator = getValue_decimalSeparator2();
                let userLocale = getInputValue_userLocale2();
                //let navigator_language = getInputValue_navigator_language2(); 
                
                  if(thisrow>5){ // editable
                    validator_amounts(oldvalue, callback,thisrow,thiscol,
                      decimalSeparator,userLocale,
                      //navigator_language,userTimeZone,usTimeZones,

                      last_row_after_header,
                    
                      currencyht_nbnb,currencyht_toshow_nbnb,afterdigit_nbnb, smallafterdigit_nbnb, afterdigitsmallnb_nbnb,
                      bignb_nbnb,smallnb_nbnb,decimalnumbers_toshow_withoutrenderer_innumbers_nbnb,usegrouping_nbnb_if_true,
                      is_negativenb_accepted_nbnb,
  
                      )
                }
                },
              renderer: function (instance, td, row, col, prop, oldvalue, cellProperties,...otherArgs) { // renderer of numbers or amounts
                let decimalSeparator = getValue_decimalSeparator2();
                let userLocale = getInputValue_userLocale2();
               // let navigator_language = getInputValue_navigator_language2();
                
                 if(row>5){ // editable
                  renderer_amounts(instance, td, row, col, prop, oldvalue, cellProperties,
                    decimalSeparator,userLocale,
                    //navigator_language,userTimeZone,usTimeZones,

                    last_row_after_header,
                  
                    currencyht_nbnb,currencyht_toshow_nbnb,afterdigit_nbnb, smallafterdigit_nbnb, afterdigitsmallnb_nbnb,
                    bignb_nbnb,smallnb_nbnb,decimalnumbers_toshow_withoutrenderer_innumbers_nbnb,usegrouping_nbnb_if_true,
                    is_negativenb_accepted_nbnb,
                
                    ...otherArgs,data22)
                } else if ( row>3 ) { // editable
                     td.innerHTML=oldvalue;
                     data22[row][col] = td.innerHTML;
                     td.className = 'htCenter htMiddle custom-titlecell2';
                  }
                  }
             
            }
        }          
        else if( i == 1 || i == 9 || i == 14) { // editable
          var dd={
            className: "htRight htMiddle" ,
            validator: function (oldvalue, callback) { // validator of texts
                const thisrow = this.row;
                const thiscol = this.col;
                if(thisrow>5){ // editable
                  validator_text(oldvalue, callback,text_length_txt)
              }
              },
            renderer: function (instance, td, row, col, prop, oldvalue, cellProperties,...otherArgs) { // renderer of texts                        
               if(row>5){ // editable
                renderer_text(instance, td, row, col, prop, oldvalue, cellProperties,text_length_txt,...otherArgs,data22)
              } else if ( row>3 ) { // editable
                   td.innerHTML=oldvalue;
                   data22[row][col] = td.innerHTML;
                   td.className = 'htCenter htMiddle custom-titlecell2';
                }
                }
           
          }
        }
        
        /*
        else if( i == 14 ) { //is_date_exist==false
          var dd={
            className: "htRight htMiddle" ,
            validator: function (oldvalue, callback) { // validator of dates
                const thisrow = this.row;
                const thiscol = this.col;
                  let decimalSeparator = getValue_decimalSeparator2();
                    let userLocale = getInputValue_userLocale2();
                    let navigator_language = getInputValue_navigator_language2();
                  
                if(thisrow>5){ // editable
                  validator_date(oldvalue, callback,
                        decimalSeparator,userLocale,navigator_language,userTimeZone,usTimeZones,use_en_time
                    )
              }
              },
            renderer: function (instance, td, row, col, prop, oldvalue, cellProperties,...otherArgs) { // renderer of numbers or amounts
                    let decimalSeparator = getValue_decimalSeparator2();
                    let userLocale = getInputValue_userLocale2();
                    let navigator_language = getInputValue_navigator_language2();
                  
               if(row>5){ // editable
                renderer_date(instance, td, row, col, prop, oldvalue, cellProperties,
                  decimalSeparator,userLocale,navigator_language,userTimeZone,usTimeZones,use_en_time
                  ,...otherArgs,data22)
              } else if ( row>3 ) { // editable
                   td.innerHTML=oldvalue;
                   data22[row][col] = td.innerHTML;
                   td.className = 'htCenter htMiddle custom-titlecell2';
                }
                }
           
          }
        }
        */
    
        else { //editable if has to
          ////console.log('columnsdata else ')
            var dd={data:i,type:'text'}
            ////console.log(dd)
          }
          fa.push(dd)
      }
      fa.push({data:15,readOnly:true})
      return fa
      }