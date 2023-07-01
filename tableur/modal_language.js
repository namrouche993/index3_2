const openModalButton = document.getElementById('openModalButton');
const modal = document.getElementById('myModal');
const closeButton = document.getElementsByClassName('close')[0];
const closeButtons = document.getElementsByClassName('close-button');

openModalButton.addEventListener('click', function() {
  modal.style.display = 'block';
});

closeButton.addEventListener('click', function() {
  modal.style.display = 'none';
});

for (let i = 0; i < closeButtons.length; i++) {
  closeButtons[i].addEventListener('click', function() {
    modal.style.display = 'none';
  });
}

window.addEventListener('click', function(event) {
  if (event.target == modal) {
    modal.style.display = 'none';
  }
});
