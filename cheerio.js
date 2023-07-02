import {
    getInputValue_navigator_language2,
    setInputValue_navigator_language2,
  
    navigator_language2_bydefault_ifnotexist,
    userlocale2_bydefault_ifnotexist,
  
    getInputValue_userLocale2,
    setInputValue_userLocale2
  
  } from './intials_inputs_nb.js'
  
  document.addEventListener("DOMContentLoaded", function() {
    const modalContent = `
    <div class="modal">
    <div class="modal-header">
      <h2 class="modal-title">Choose Format</h2>
      <span class="close">&times;</span>
    </div>
  
    <div class="modal-content">
  
      <div class="menu-container numeric-menu">
        <div class="format-options">
          <p>Choose the numeric format:</p>
          <label>
            <input type="radio" name="numeric-format" value="," checked>
            European Format (<span class="example">1500,42</span>)
            <div class="underexample">(comma , as Decimal Separator)</div>
          </label>
          <br>
          <label>
            <input type="radio" name="numeric-format" value=".">
            American Format (<span class="example">1500.42</span>)
            <div class="underexample">(dot . as Decimal Separator)</div>
          </label>
        </div>
      </div>
  
      <div class="menu-container date-menu">
        <div class="format-options">
          <p>Choose the date format:</p>
          <label>
            <input type="radio" name="date-format" value="fr-FR" checked>
            European Date Format (<span class="example2">31/12/1990</span>)
          </label>
          <br>
          <label>
            <input type="radio" name="date-format" value="en-US">
            American Date Format (<span class="example2">12/31/1990</span>)
          </label>
          <br>
          <label>
            <input type="radio" name="date-format" value="de-DE">
            Deutschland Date Format (<span class="example2">31.12.1990</span>)
          </label>
          <br>
          <label>
            <input type="radio" name="date-format" value="en-CA">
            Canadian Date Format (<span class="example2">1990-12-31</span>)
          </label>
          <br>
          <label>
            <input type="radio" name="date-format" value="ja-JP">
            Japonese Date Format (<span class="example2">1990/12/31</span>)
          </label>
          <br>            
          <label>
            <input type="radio" name="date-format" value="ko-KR">
            Korean Date Format (<span class="example2">1990.12.31</span>)
          </label>
        </div>
      </div>
  
    </div>
  
    <div class="modal-footer">
      <button type="button" class="btn btn-secondary close-button">Close</button>
      <button type="submit" class="btn btn-primary">Submit</button>
    </div>
  </div>
  `;
  
    const modalOverlay = document.getElementById("myModal");
    modalOverlay.innerHTML = modalContent;
  
    const openModalButton = document.getElementById("openModalButton");
    const closeModalButton = modalOverlay.querySelector(".close-button");
    const closeButton = modalOverlay.querySelector(".close");
  
  
    const dateRadios = document.querySelectorAll('input[name="date-format"]');
    const dateValues = Array.from(dateRadios).map(radio => radio.value);  
  
    const numericRadios = document.querySelectorAll('input[name="numeric-format"]');
    const numericValues = Array.from(numericRadios).map(numeric => numeric.value);
    console.log('numericValues')
    console.log(numericValues)
  
  
  
   
    if (!numericValues.includes((1234567.73).toLocaleString(getInputValue_userLocale2(), { style: 'decimal' }).substring(9, 10))){
      setInputValue_userLocale2(userlocale2_bydefault_ifnotexist);
      console.log(getInputValue_userLocale2())
      let radioElement_numeric = document.querySelector('input[name="numeric-format"][value='+(1234567.73).toLocaleString(userlocale2_bydefault_ifnotexist, { style: 'decimal' }).substring(9, 10)+']');
      radioElement_numeric.checked = true;  
    }
  
  
  
    openModalButton.addEventListener("click", function() {  
      let radioElement_numeric = document.querySelector('input[name="numeric-format"][value='+(1234567.73).toLocaleString(getInputValue_userLocale2(), { style: 'decimal' }).substring(9, 10)+']');
      radioElement_numeric.checked = true;
  
      let radioElement = document.querySelector('input[name="date-format"][value='+getInputValue_navigator_language2()+']');
      radioElement.checked = true;
      modalOverlay.style.display = "block";
      // setInputValue_navigator_language2(getInputValue_navigator_language2())
    });
  
    closeModalButton.addEventListener("click", function() {
      modalOverlay.style.display = "none";  
  
    });
  
    closeButton.addEventListener("click", function() {
      modalOverlay.style.display = "none";
  
  
    });
  
    // Add event listeners or any other logic related to the modal
  
  
      const submitButton = document.querySelector(".modal-footer .btn-primary");
  
  
  
      // Update the default checked state
    
      let selectedNumericFormat = (1234567.73).toLocaleString(getInputValue_userLocale2(), { style: 'decimal' }).substring(9, 10);
      numericRadios.forEach(function(numeric) {      
        numeric.addEventListener("click", function() {  
          selectedNumericFormat = this.value;     
        });
      });
  
      
      let selectedDateFormat = getInputValue_navigator_language2();
  
      
      dateRadios.forEach(function(radio) {      
        radio.addEventListener("click", function() {  
          selectedDateFormat = this.value;     
        });
      });
    
      submitButton.addEventListener("click", function() {
        setInputValue_navigator_language2(selectedDateFormat)
        modalOverlay.style.display = "none";
  
        // Your action code goes here
      });
    
  
  });
  