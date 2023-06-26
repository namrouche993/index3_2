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
  import { afterValidatefct_percentage } from './valid_percentage.js'
  import { afterValidatefct_amounts } from './valid_amounts.js'
  import { afterValidatefct_integers } from './valid_integers.js'
  import { afterValidatefct_date } from './valid_date.js'

  
  
export function afterValidatefct(isValid, oldvalue, row, prop, source, ...otherArgs){
            const hot = otherArgs[otherArgs.length - 1];
            console.log('hot : ')
            console.log(isValid)
            console.log(oldvalue)
            console.log(row)
            console.log(prop)
            console.log(source)
            console.log(hot)
            
            const commentsPlugin = hot.getPlugin('comments');
            console.log(commentsPlugin)
            if(prop==3 || prop==4 || prop==5 || prop==10){ // afterValidate of percentage,  editable the index later 
              afterValidatefct_percentage(isValid, oldvalue, row, prop, source,hot,commentsPlugin)
        }
        
            else if (prop==6  || prop==7  || prop==8  ||     prop==11  || prop==12  || prop==13 ) {  // afterValidate of numbers and amounts
              afterValidatefct_amounts(isValid, oldvalue, row, prop, source,hot,commentsPlugin)

        }                
            else if (prop==2) {  // afterValidate of integers
              afterValidatefct_integers(isValid, oldvalue, row, prop, source,hot,commentsPlugin)
        }
        else if (prop==1) {
              afterValidatefct_date(isValid, oldvalue, row, prop, source,hot,commentsPlugin)
        }
       
          }
          
