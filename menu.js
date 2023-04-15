// document.getElementById("dish").style.display= "none";

alert('Welcome to ShushiFood😊 ');


function hideMenu() {
  var x = document.getElementById("meal");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}