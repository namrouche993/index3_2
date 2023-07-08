import 
{ 
  getInputValue_userLocale2,
  getInputValue_navigator_language2, //is_date_exist==false
  getValue_decimalSeparator2,

  userTimeZone,usTimeZones, //is_date_exist==false

}
from './intials_inputs_nb.js'

export function beforeChangeFct(changes,source, ...otherArgs){
    const hot = otherArgs[otherArgs.length - 1];
    var commentsPlugin = hot.getPlugin('comments');

    changes.forEach(([row, prop, oldValue, newValue]) => {
      if (oldValue == '' && newValue == null || oldValue == '' && newValue == '' && source == 'UndoRedo.undo') {
        commentsPlugin.removeCommentAtCell(row, prop);
        //console.log('comments removed')
      }
      //console.log(`Change in row ${row} property ${prop}: ${oldValue} -> ${newValue}`);
    });
    //console.log('end before change')
}
