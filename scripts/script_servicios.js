three_lines.addEventListener("click", desplegarMenu, true);

function desplegarMenu (){
  menu_links.style.display  = "block";
}

function displayNextImage() {
   x = (x === images.length - 1) ? 0 : x + 1;
  document.getElementById("banner_servicios").src = images[x];
}

function startTimer() {
  setInterval(displayNextImage, 4000);
}
  var images = [], x = -1;
    images[0] = "./pics/servicios/banner1.jpg";
    images[1] = "./pics/servicios/banner2.jpg";