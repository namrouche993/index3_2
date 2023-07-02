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
          <input type="radio" name="format" value="european" checked>
          European Format (<span class="example">1500,42</span>)
          <div class="underexample">(comma , as Decimal Separator)</div>
        </label>
        <br>
        <label>
          <input type="radio" name="format" value="american">
          American Format (<span class="example">1500.42</span>)
          <div class="underexample">(dot . as Decimal Separator)</div>
        </label>
      </div>
    </div>

    <div class="menu-container date-menu">
      <div class="format-options">
        <p>Choose the date format:</p>
        <label>
          <input type="radio" name="date-format" value="french" checked>
          European Date Format (<span class="example2">31/12/1990</span>)
        </label>
        <br>
        <label>
          <input type="radio" name="date-format" value="american">
          American Date Format (<span class="example2">12/31/1990</span>)
        </label>
        <br>
        <label>
          <input type="radio" name="date-format" value="deutschland">
          Deutschland Date Format (<span class="example2">31.12.1990</span>)
        </label>
        <br>
        <label>
          <input type="radio" name="date-format" value="canadian">
          Canadian Date Format (<span class="example2">1990-12-31</span>)
        </label>
        <br>
        <label>
          <input type="radio" name="date-format" value="japonese">
          Japonese Date Format (<span class="example2">1990/12/31</span>)
        </label>
        <br>            
        <label>
          <input type="radio" name="date-format" value="korean">
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

  openModalButton.addEventListener("click", function() {
    modalOverlay.style.display = "block";
  });

  closeModalButton.addEventListener("click", function() {
    modalOverlay.style.display = "none";
  });

  closeButton.addEventListener("click", function() {
    modalOverlay.style.display = "none";
  });

  // Add event listeners or any other logic related to the modal
});
