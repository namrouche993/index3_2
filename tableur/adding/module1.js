// import { publicFunction3 } from './tableur/module3.js';
// import { publicFunction3 } from './tableur/module3.js';

(function() {
    function privateFunction() {
      console.log("Module 1 - Private Function");
    }
  
    function publicFunction() {
      // publicFunction3();
      // console.log('modue3main!!!!!!!!!! from module1 : ')
      // publicFunction3();
      
      //mod2nb2=80;
      // export const greeting = 'Hello, World!';
      // const greeting = 'Hello, World!';
      console.log("Module 1 - Public Function");
    }
  
    // Export public functionality
    window.Module1 = {
      publicFunction: publicFunction
    };
  })();
  