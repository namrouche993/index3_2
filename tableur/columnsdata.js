import { data22fct } from './ddata.js';
import { PercentageEditor } from './PercentageEditor.js';
import { validator_amounts,renderer_amounts } from './valid_amounts.js'
import { validator_integers,renderer_integers } from './valid_integers.js'
import { validator_percentage,renderer_percentage } from './valid_percentage.js'

//import { validator_date,renderer_date } from './valid_date.js'



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
          for(let i=imin+1;i<imax-1;i++){
          // couting start from 1 (normal way ta3 normal way)  i==3 means the third column of THE SPREADSHEET without counting the first negeglible column (A)   
        
        if(i == 2){ //editable of course
          console.log('************** before validator i === 2 ')
            var dd={ data:i,
              className: "htRight htMiddle" ,
              validator: function (oldvalue, callback) { // validator of integers
                const thisrow = this.row;
                const thiscol = this.col;
                if(thisrow>5){ // editable
                  validator_integers(oldvalue, callback,thisrow,thiscol)
                }
                },
      
              renderer: function (instance, td, row, col, prop, oldvalue, cellProperties,...otherArgs) { // renderer of integers
                if(row>5){  // editable
                  renderer_integers(instance, td, row, col, prop, oldvalue, cellProperties,...otherArgs,data22)
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
                  if(thisrow>5){ // editable
                    validator_percentage(value, callback)
                }
                },
                renderer: function (instance, td, row, col, prop, oldvalue, cellProperties,...otherArgs) { // renderer of integers
                  if(row>5){ // editable
                    renderer_percentage(instance, td, row, col, prop, oldvalue, cellProperties,...otherArgs,data22)
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
                  if(thisrow>5){ // editable
                    validator_amounts(oldvalue, callback,thisrow,thiscol)
                }
                },
              renderer: function (instance, td, row, col, prop, oldvalue, cellProperties,...otherArgs) { // renderer of numbers or amounts
                
                 if(row>5){ // editable
                  renderer_amounts(instance, td, row, col, prop, oldvalue, cellProperties,...otherArgs,data22)
                } else if ( row>3 ) { // editable
                     td.innerHTML=oldvalue;
                     data22[row][col] = td.innerHTML;
                     td.className = 'htCenter htMiddle custom-titlecell2';
                  }
                  }
             
            }
        }

        else { //editable if has to
          //console.log('columnsdata else ')
            var dd={data:i,type:'text'}
            //console.log(dd)
          }
          fa.push(dd)
      }
      fa.push({data:15,readOnly:true})
      return fa
      }