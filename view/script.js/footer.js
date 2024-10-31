var modal = document.getElementById("myMapModal");
var a = document.getElementById("myMap");
var span = document.getElementsByClassName("map-close")[0];
a.onclick = function() {
  modal.style.display = "block";
}
span.onclick = function() {
  modal.style.display = "none";
}
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}