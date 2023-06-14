import { publicFunction3 } from './chatmodule3.js';

export function sayHello(name) {
    console.log('abt : ')
    // var abt= publicFunction3();
    // console.log(abt)

  console.log("Hello " + name + " "+  publicFunction3());
}

// Export sayHello function for access from HTML
window.sayHello = sayHello;

