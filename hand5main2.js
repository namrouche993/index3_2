// part1.js
document.addEventListener('DOMContentLoaded', function() {
    var button = document.createElement('button');
    button.innerText = 'Click Me';
    document.body.appendChild(button);
  
    button.addEventListener('click', function() {
        console.log('hot afterclicking :')
      console.log(hot.getData());
    });
  });
  