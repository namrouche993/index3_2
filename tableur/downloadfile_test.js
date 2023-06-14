import { existsInArray } from './existsInArray.js';
console.log("Hello world beg");

export function sayHello() {
    console.log("Hello world");

    // if(test==true){
    //     console.log("Hello world");
    // } else {
    //     console.log('no hello')
    // }
  }
  sayHello()

//   window.sayHello = sayHello;
console.log('calling existsInArray from downloadfile_test : ')
  console.log(existsInArray([[2,1],[2,3],[1,3]],[5,3]))
console.log('ending existsInArray from downloadfile_test : ')
