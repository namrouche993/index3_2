import { existsInArray } from './existsInArray.js'

export function pdf_return_table_to_downloading_Fct(hot){
    //const hot = otherArgs[otherArgs.length - 1];
    console.log('******************************************************************')
  //doc.setFontSize(16)
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
      console.log('cellcontent.className : ')
      console.log(cellcontent.className)
      if(cellcontent.className!=''){
  
      console.log('stylleeee : ')
      var strcontent = "."+cellcontent.className.replace(/ /g, '.');
      console.log(strcontent)
      var element = document.querySelector(strcontent)
      
  
  
      
      if(i==4 || i==5){
        var style = window.getComputedStyle(element) || '';
      //console.log(style)
      var bgcolor = style.getPropertyValue('background-color') || '';
      var txtalign = style.getPropertyValue('text-align') || '';
  
        var styles = {fillColor: bgcolor,halign:txtalign,valign:'top'}//,fontSize:6}
      } else {
        if(j==2 || j==3) {
          var styles = {fillColor: '#ffffff',halign:'right',valign:'top'}//,fontSize:8}
  
        } else {
          var style = window.getComputedStyle(element) || '';
          //console.log(style)
         var bgcolor = style.getPropertyValue('background-color') || '';
         var txtalign = style.getPropertyValue('text-align') || '';
  
        var styles = {fillColor: bgcolor,halign:txtalign}//,fontSize:8}
        }
      }
  
      } else {
      var styles = cellProperties.style || {}
      }
             
  
      if(rowspan > 1 || colspan > 1 ) {
          console.log('content in rowspan>1 and colspan>1 : ')
          console.log(content)
          console.log(i)
          console.log(j)
          for(var is=0; is<rowspan ; is++){
              for(var js=0; js<colspan ; js++){
                  if(is==0 & js==0) {
                     styles['halign']=txtalign || '' 
                     styles['valign']='middle' || '' 
  
                  /*if(i==4 && j==3) {
                    console.log('i===4 and i==3')
                     styles['halign']=txtalign || '' 
                     styles['valign']='top' || '' 
                   } else {
                    styles['halign']=txtalign || '' 
                    styles['valign']='middle' || '' 
                   }
                   */
  
  
                  continue
                  } else {
                 var vaisk=i+is;
                 var vajsk=j+js
                 let valueskk=[vaisk,vajsk]
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
