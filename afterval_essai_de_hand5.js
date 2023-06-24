export function afterval(isValid, value, row, prop, source, ...otherArgs) {
    const hotInstance = otherArgs[otherArgs.length - 1];
  
    console.log(hotInstance); // hot instance will be available here
  
    // Rest of your code...
  }
