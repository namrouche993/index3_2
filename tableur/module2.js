(function() {
    function privateFunction() {
      console.log("Module 2 - Private Function");
    }
  
    function publicFunction2() {
    //   console.log(mod2nb2+10)
      console.log("Module 2 - Public Function");
    }

    // function publicFunction3() {
    //     console.log("Module 3 - Public Function");
    //   }
  
    // Export public functionality
    window.Module2 = {
      publicFunction2: publicFunction2
    };
  })();