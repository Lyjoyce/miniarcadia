var modal = document.getElementById("myMapModal");


var a = document.getElementById("myMap");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("map-close")[0];

// When the user clicks on the button, open the modal
a.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}