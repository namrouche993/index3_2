
export function beforeChangeFct(changes,source, ...otherArgs){
    const hot = otherArgs[otherArgs.length - 1];

    console.log('hot in beforechange : ')
    console.log(hot)

    console.log('we are inside beforeChange x y z :')
    //console.log(changes)
    //console.log(source)
    //console.log('commentsPlugin : ')
    var commentsPlugin = hot.getPlugin('comments');
    //console.log(commentsPlugin)
    //console.log(hot.undoRedo.doneActions)
    //console.log(hot.undoRedo.doneActions[hot.undoRedo.doneActions.length-1])

    changes.forEach(([row, prop, oldValue, newValue]) => {
      if (oldValue == '' && newValue == null || oldValue == '' && newValue == '' && source == 'UndoRedo.undo') {
        commentsPlugin.removeCommentAtCell(row, prop);
        console.log('comments removed')
      }
      console.log(`Change in row ${row} property ${prop}: ${oldValue} -> ${newValue}`);
    });
    console.log('end before change')
}
