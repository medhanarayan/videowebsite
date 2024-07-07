
// Function to handle image click and open modal
// JavaScript to open and close the modal
function openModal(imageId) {
  var modal = document.getElementById("myModal");
  var modalImage = document.getElementById("modal-image");
  var modalCaption = document.getElementById("modal-caption");

  var img = document.getElementById("myImg" + imageId);
  modal.style.display = "block";
  img.style.borderColor = "#808080";
  modalImage.src = img.src;
  modalCaption.innerHTML = img.alt;
}

function closeModal() {
  var modal = document.getElementById("myModal");
  modal.style.display = "none";
  
}

// Close the modal if the user clicks outside of it
window.onclick = function(event) {
  var modal = document.getElementById("myModal");
  if (event.target == modal) {
    closeModal();
  }
}



