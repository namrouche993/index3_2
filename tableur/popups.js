export function warningpopup() {
    toastr.options = {
      "timeOut": 2000,
      "positionClass": "toast-bottom-right",

    };
    toastr.warning('Hello World!', 'Notification Title');
  }

let numOferrorPopups = 0;

export function errorpopup() {
    if (numOferrorPopups >= 4) {
          return;
       }           
toastr.options = {
onHidden: function() {
  numOferrorPopups--;
  console.log(`Number of popups: ${numOferrorPopups}`);
},
"timeOut": 2500,
"positionClass": "toast-bottom-right",
};
toastr.error('Veuillez entrer un nombre', 'Erreur');
numOferrorPopups++;
console.log(`Number of popups: ${numOferrorPopups}`);
  }