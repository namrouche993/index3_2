export function return_table_to_downloading_Fct(...otherArgs){
    const hot = otherArgs[otherArgs.length - 1];

var hotInstance = hot;
var table = [];
var skipped = []
var cells = hotInstance.getData()
for (var i = 4; i < cells.length; i++) {
  var row = [];
  for (var j = 1; j < 15; j++) {
      if(existsInArray(skipped,[i,j])){
          continue;
      }
    var cell = cells[i][j];
    //var cellcontent = hotInstance.getCell(i, j);
    var cellcontent = document.createElement("td");
    cellcontent.className = hot.getCellMeta(i,j).className || '';
    cellcontent.innerHTML = hot.getDataAtCell(i,j) || '';

    var content = cellcontent.innerHTML;

    var cellProperties =hotInstance.getCellMeta(i,j)
    var colspan = cellProperties.colspan || 1;
    var rowspan = cellProperties.rowspan || 1;
    //var styles = cellProperties.style || {};
    if(cellcontent.className!=''){

    var strcontent = "."+cellcontent.className.replace(/ /g, '.');
    var element = document.querySelector(strcontent)
    var style = window.getComputedStyle(element) || '';
    var bgcolor = style.getPropertyValue('background-color') || '';
    var txtalign = style.getPropertyValue('text-align') || '';
    if(i==4 || i==5){
      var styles = {fillColor: bgcolor,halign:txtalign}//,fontSize:6}
    } else {
      var styles = {fillColor: bgcolor,halign:txtalign}//,fontSize:8}
    }

    } else {
    var styles = cellProperties.style || {}
    }
           

    if(rowspan > 1 || colspan > 1 ) {
        console.log(content)
        for(var is=0; is<rowspan ; is++){
            for(var js=0; js<colspan ; js++){
                if(is==0 & js==0) {
                styles['valign']=txtalign || '' 
                continue
                } else {
               var vaisk=i+is;
               var vajsk=j+js
               valueskk=[vaisk,vajsk]
               skipped.push(valueskk)       
                } 
            }
        }
    }
    row.push({ content, colSpan:colspan, rowSpan:rowspan, styles:styles });
  }
  table.push(row);
}
return table
console.log('tableeeeeeeeeeeeee :')
console.log(table)
}
