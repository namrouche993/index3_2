// Import the openModal function from the modal module
import { openModal } from './hand5modal.js';

// Get a reference to the button element
const openModalButton = document.getElementById('openModalButton');

// Add a click event listener to the button
openModalButton.addEventListener('click', function() {
  // Open the modal when the button is clicked
  openModal();
});
