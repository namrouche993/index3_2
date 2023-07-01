import { beforeKeyDown_Dates_fct } from './beforeKeyDown_Dates.js';
import { beforeKeyDown_Nb_fct } from './beforeKeyDown_Nb.js';

// import { decimalSeparator,navigator_language   } from './intials_inputs_nb.js';

export function beforeKeyDownfct(event, ...otherArgs) {  // editable the 2 indexx later inside 
    const hot = otherArgs[otherArgs.length - 1];
    //console.log('hot in beforeKeyDownfct : ')
    //console.log(hot)
    var selected = hot.getSelected();
    var currentColIndex = selected ? selected[0][1] : null;
    var currentRowIndex = selected ? selected[0][0] : null;
    //console.log('currentRowIndex : ')
    //console.log(selected)
    //console.log(currentRowIndex)
  if(currentColIndex==14 && currentRowIndex>5) {  // editable (about dates) edit it later changeable , modify it later , change it later
   beforeKeyDown_Dates_fct(event, hot) // about dates
  }
  

    if(currentColIndex!=1 && currentColIndex!=9 &&  currentColIndex!=14  ) { // editable and adding other text columns || dont equal to  
      beforeKeyDown_Nb_fct(event, hot) // about Amounts and Nb
  }
}