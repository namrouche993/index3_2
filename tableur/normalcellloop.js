import{ last_row_after_header} from './intials_inputs_nb.js'  
const imin = 6;
const imax = 6+last_row_after_header
export function normalcellloop(){
    const aus = [
      { row: 0, col: 1, className: 'htCenter htMiddle' },  // Etat
      { row: 1, col: 1, className: 'htCenter htMiddle' },  // Etat2
      { row: 2, col: 1, className: 'htCenter htMiddle' },  // Etat333
      { row: 3, col: 1, className: 'htLeft htMiddle' },    // Etat444
  
  
      { row: 4, col: 1, className: 'htCenter htMiddle custom-titlecell' },
      { row: 4, col: 2, className: 'htCenter htMiddle custom-titlecell' },
      { row: 4, col: 3, className: 'htCenter htMiddle custom-titlecell' },
      { row: 4, col: 4, className: 'htCenter htMiddle custom-titlecell' },
      { row: 4, col: 5, className: 'htCenter htMiddle custom-titlecell' },
      { row: 4, col: 10, className: 'htCenter htMiddle custom-titlecell' },
  
      { row: 5, col: 1, className: 'htCenter htMiddle custom-titlecell2' },
      { row: 5, col: 2, className: 'htCenter htMiddle custom-titlecell2' },
      { row: 5, col: 3, className: 'htCenter htMiddle custom-titlecell2' },
      { row: 5, col: 4, className: 'htCenter htMiddle custom-titlecell2' },
      
      { row: 5, col: 5, className: 'htCenter htMiddle custom-titlecell2' },
      { row: 5, col: 6, className: 'htCenter htMiddle custom-titlecell2' },
      { row: 5, col: 7, className: 'htCenter htMiddle custom-titlecell2' },
      { row: 5, col: 8, className: 'htCenter htMiddle custom-titlecell2' },
      { row: 5, col: 9, className: 'htCenter htMiddle custom-titlecell2' },
      //{ row: 5, col: 10, className: 'htCenter htMiddle custom-titlecell2' },
  
      
      { row: 5, col: 10, className: 'htCenter htMiddle custom-titlecell2' },
      { row: 5, col: 11, className: 'htCenter htMiddle custom-titlecell2' },
      { row: 5, col: 12, className: 'htCenter htMiddle custom-titlecell2' },
      { row: 5, col: 13, className: 'htCenter htMiddle custom-titlecell2' },
      { row: 5, col: 14, className: 'htCenter htMiddle custom-titlecell2' },
      //{ row: 5, col: 16, className: 'htCenter htMiddle custom-titlecell2' },
    ];
  
    for(let i=imin ; i<=imax ; i++) {
      for(let j=1 ; j<=14 ; j++){
        if(j==2){  // which column text align is center
          var zz={ row: i, col: j, className: 'htCenter htMiddle custom-normalcell' };
          aus.push(zz);
        } else {
          var zz={ row: i, col: j, className: 'htLeft htMiddle custom-normalcell' };
          aus.push(zz);
        }
              }
    }
    return aus
  }