// inputs.js
// inputs.js
let inputValue = "initial value";

export function setInputValue(value) {
  inputValue = value;
}

export function getInputValue() {
  return inputValue;
}

export function input2fct(){
  return inputValue+"okokkk"
}

console.log('val33 before calling in afterval : ')
export function getval33() {
   return input2fct()+" nonnon";
}

export function afterval(isValid, value, row, prop, source, ...otherArgs) {
    const hotInstance = otherArgs[otherArgs.length - 1];
  
    console.log(hotInstance); // hot instance will be available here
  
    // Rest of your code...
  }
