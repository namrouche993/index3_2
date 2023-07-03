//hot.addHook('afterChange', function (changes, src) {
let lastelement_supthan1=0;
import {data22fct} from './ddata.js'
import {getInputValue_ds_haschanged,setInputValue_ds_haschanged} from './intials_inputs_nb.js';
var data22 = data22fct();

export function afterChangefct(changes,src, ...otherArgs){
    const hot = otherArgs[otherArgs.length - 1];

    console.log('hot in afterchange : ')
    console.log(hot)

    console.log('start afterChange')
    console.log('lastelement_supthan1 start : ' + lastelement_supthan1)
    console.log(changes)
    console.log(src)
    console.log('getInputValue_ds_haschanged : ')
    console.log(getInputValue_ds_haschanged())

    console.log('hot.undoredo in afterchange')
    console.log(hot.undoRedo.doneActions)
    console.log(hot.undoRedo.undoneActions)
    console.log('end hot.undoredo in afterchange')


    if(hot.undoRedo.isUndoAvailable()){
       hot.undoRedo.doneActions[hot.undoRedo.doneActions.length-1].src=src;
     }
    console.log('source : ' + src)
    //console.log(hot.undoRedo.doneActions)
    //console.log(hot.undoRedo.doneActions[hot.undoRedo.doneActions.length-1].changes.toString())
 if(src=='Autofill.fill' && changes.length>1){
  lastelement_supthan1=hot.undoRedo.doneActions.length
 } else if (src=='edit' && changes.length>1 && changes.every(row => row[3] === null) ){
  console.log('we are incase afterchange where src==edit and changes.length>1')
  //alert('edit and changes>1')
  lastelement_supthan1=hot.undoRedo.doneActions.length
 }


 if(src=='my_source' || src=='my_source_removewhitespacesign' || src=='my_source_removewhitespacesign_percentage' || src=='my_source_removegreaterdecimalnumbers_percentage' || src=='my_source_convertitto_0' || src=='my_source_removewhitespacesign_date' || src=='my_source_date'){
  var shouldBreak = false;
  console.log('before entering loop , lastelement_supthan1 is : ' + lastelement_supthan1)
  for (let index = hot.undoRedo.doneActions.length-1; index >lastelement_supthan1 && !shouldBreak; index--) {
    const element = hot.undoRedo.doneActions[index].changes.length;
    console.log('****** WE ARE INSIDE LOOP UNTIL lastelement_supthan1 ****** index :' + index + ' *** and element : ' + element)
    if(element>1){
      console.log('we enter element>1 condition')
      hot.undoRedo.doneActions[index].changes.forEach((x,y)=>{
        console.log('we are inside foreach in renderer')
              if (x[0] == changes[0][0] && x[1] == changes[0][1]) {
              console.log('we are inside condition renderer')
              x[3] = changes[0][3]
              lastelement_supthan1=index;
              console.log('lastelement_supthan1 is ' + lastelement_supthan1)
              hot.undoRedo.doneActions.pop()
              shouldBreak = true;
              return;

          }
      })
    }
    console.log(element)
  }
}
console.log('shouldbreak is : ' + shouldBreak )
console.log(shouldBreak==false)
//console.log('index after the end of loop part : ' + typeof index==undefined ? 'a' : index)
    if ( (src == 'my_source' || src=='my_source_removewhitespacesign' || src=='my_source_removewhitespacesign_percentage' || src=='my_source_removegreaterdecimalnumbers_percentage' || src=='my_source_convertitto_0' || src=='my_source_removewhitespacesign_date' || src=='my_source_date') && !shouldBreak) {
      console.log('afterchange mysource62 and we will pop it')
      hot.undoRedo.doneActions[hot.undoRedo.doneActions.length - 2].changes.forEach((x, y) => {
                console.log('we are inside foreach in renderer')
                 if (x[0] == changes[0][0] && x[1] == changes[0][1]) {
                console.log('we are inside condition renderer')
                x[3] = changes[0][3]
                lastelement_supthan1=hot.undoRedo.doneActions.length-2
                hot.undoRedo.doneActions.pop()
                shouldBreak=true;
              }
              })
    }
    if( (src == 'my_source_empty' && changes[0][2]!='')  || (src=='my_source_empty_percentage' && changes[0][2]!='' ) || (src=='my_source_empty_date' && changes[0][2]!='' ) || (src=='my_source_empty_dropdown' && changes[0][2]!=' ' ) || (src=='my_source_empty_email' && changes[0][2]!='' ) || (src=='my_source_empty_phonenumbers' && changes[0][2]!='' ) || (src=='my_source_empty_onlynumbers' && changes[0][2]!='' ) ){
      console.log('when src == my_source_empty and changes[0][2]!= "" ')
      //hot.undoRedo.doneActions[hot.undoRedo.doneActions.length - 2].changes[0][3]=''
      hot.undoRedo.doneActions[hot.undoRedo.doneActions.length - 2].changes.forEach((x, y) => {
                console.log('3-we are inside foreach in renderer')
                 if (x[0] == changes[0][0] && x[1] == changes[0][1]) {
                console.log('3-we are inside condition renderer')
                x[3] = ''
                hot.undoRedo.doneActions.pop()
                //shouldBreak=true;
              }
              })

    }
    console.log('lastelement_supthan1 end : ' + lastelement_supthan1)
    console.log('end afterChange')
    console.log(changes)
    console.log(hot.undoRedo.doneActions)
    console.log(hot.undoRedo.doneActions[hot.undoRedo.doneActions.length-1])
    console.log('data22 afterchage : ')
    if(src!=='loadData'){
    changes.forEach((x,y)=>{
      console.log('changes before showing data22 in afterchange')
      console.log(x)
      console.log(y)
      var cellgetcell = hot.getCell(x[0],x[1]);
      console.log('cellgetcell : ')
      console.log(cellgetcell)
      //console.log(  cellgetcell.childNodes[cellgetcell.children.length].textContent.trim()  )
      console.log(cellgetcell.innerHTML) 
      if(cellgetcell.childNodes[cellgetcell.children.length]!==undefined){
        data22[x[0]][x[1]]=cellgetcell.childNodes[cellgetcell.children.length].textContent.trim()
      } else {
        data22[x[0]][x[1]]=''
      }
    })
    console.log('data22 afterchange : ')
    console.log(data22)
    console.log(' ----------------------------- ---------------------------- ------')
  }
  if(src=='dataatrowprop_convert_to_en'){
    console.log('we are in dataatrowprop_convert_to_en')
    console.log('hot.undoredo bef')
    console.log(hot.undoRedo)
    console.log(hot.undoRedo.doneActions)
    console.log('end hot.undoredo bef')

    hot.undoRedo.doneActions.pop();
    console.log(hot.undoRedo.doneActions)
    for (let index = 0; index<hot.undoRedo.doneActions.length; index++) {
      console.log('we are inside index dataatrowprop_convert_to_en')
      console.log(index)
        hot.undoRedo.doneActions[index].changes.forEach((x,y)=>{
          console.log('x in foreach :')
          console.log(x)
          console.log(x[1])
          console.log(x[1]==3)
          if( // editable
            x[1] == 2 || x[1] == 3 || x[1] == 4  || x[1] == 5  || x[1] == 6  ||
            x[1] == 7 || x[1] == 8 || x[1] == 10 || x[1] == 11 || x[1] == 12 || 
            x[1] == 13
            ){
              console.log('hot.undoRedo.doneActions[index].changes')
              console.log(hot.undoRedo.doneActions[index].changes)
              x[2]=x[2].replace(/,/g, '.');
              x[3]=x[3].replace(/,/g, '.');
                }
        })      
    }
    
    console.log('hot.undoredo after')
    console.log(hot.undoRedo)
    console.log(hot.undoRedo.doneActions)
    console.log(hot.undoRedo.undoneActions)
    console.log('end hot.undoredo after')

  
} else if (src=='dataatrowprop_convert_to_fr'){
  console.log('we are in dataatrowprop_convert_to_fr')
  console.log('hot.undoredo bef')
  console.log(hot.undoRedo)
  console.log(hot.undoRedo.doneActions)
  console.log('end hot.undoredo bef')

  hot.undoRedo.doneActions.pop();
  console.log(hot.undoRedo.doneActions)
  for (let index = 0; index<hot.undoRedo.doneActions.length; index++) {
    console.log('we are inside index dataatrowprop_convert_to_fr')
    console.log(index)
      hot.undoRedo.doneActions[index].changes.forEach((x,y)=>{
        console.log('x in foreach :')
        console.log(x)
        console.log(x[1])
        console.log(x[1]==3)
        if( // editable
          x[1] == 2 || x[1] == 3 || x[1] == 4  || x[1] == 5  || x[1] == 6  ||
          x[1] == 7 || x[1] == 8 || x[1] == 10 || x[1] == 11 || x[1] == 12 || 
          x[1] == 13
          ){
            console.log('hot.undoRedo.doneActions[index].changes')
            console.log(hot.undoRedo.doneActions[index].changes)
            x[2]=x[2].replace(/\./g, ',');
            x[3]=x[3].replace(/\./g, ',');
              }
      })      
  }
  
  console.log('hot.undoredo after')
  console.log(hot.undoRedo)
  console.log(hot.undoRedo.doneActions)
  console.log(hot.undoRedo.undoneActions)
  console.log('end hot.undoredo after')

}


/*
if(src=='UndoRedo.undo' && getInputValue_ds_haschanged()==true){

  console.log('yes it is UndoRedo.undo before : ')
  console.log(hot.undoRedo.doneActions)
  console.log(hot.undoRedo.undoneActions)

  for (let index = 0; index<hot.undoRedo.undoneActions.length; index++) {
    hot.undoRedo.undoneActions[index].changes.forEach((x,y)=>{
      console.log('x in foreach :')
      if( // editable
        x[1] == 2 || x[1] == 3 || x[1] == 4  || x[1] == 5  || x[1] == 6  ||
        x[1] == 7 || x[1] == 8 || x[1] == 10 || x[1] == 11 || x[1] == 12 || 
        x[1] == 13
        ){
          x[2]=x[2].replace(/,/g, '.');
          x[3]=x[3].replace(/,/g, '.');
        }
    })
  }
  console.log('yes it is UndoRedo.undo after : ')
  console.log(hot.undoRedo.doneActions)
  console.log(hot.undoRedo.undoneActions)

}
*/
}
  //)
