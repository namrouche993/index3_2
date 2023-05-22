function existsInArray(array, pair) {
    for (let i = 0; i < array.length; i++) {
      if (array[i][0] === pair[0] && array[i][1] === pair[1]) {
        return true;
      }
    }
    return false;
  }


  var doc = new jsPDF({orientation:'landscape'});
doc.setFontSize(6)
var hotInstance = hot;
var table = [];
var skipped = []
var cells = hotInstance.getData()
for (var i = 4; i < cells.length; i++) {
  var row = [];
  for (var j = 1; j < 17; j++) {
      if(existsInArray(skipped,[i,j])){
          continue;
      }
    var cell = cells[i][j];
    var cellcontent = hotInstance.getCell(i, j);
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
    var styles = {fillColor: bgcolor,halign:txtalign}

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

doc.autoTable({
               body:table,
               theme:'grid',
                    margin:{left:4},
                styles: {
                fontSize: 5,
                lineColor: 50,
                textColor:50,
                columnWidth: "20px"
                },
})
doc.save('taaa.pdf')