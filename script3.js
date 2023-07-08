console.log('we are in script3.js')

import { getInputValue, subscribe } from './afterval_essai_de_hand5.js';
function handleInputChange(value) {
  console.log("Input value changed:", value);
}

subscribe(handleInputChange);

// Access and use the input value
console.log(getInputValue());
console.log('just after console.loggetinputvalue ')



//console.log('inputValue44 in script3.js');
//console.log(inputValue44);
