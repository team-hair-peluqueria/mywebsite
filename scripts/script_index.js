three_lines.addEventListener("click", desplegarMenu, true);

function desplegarMenu (){
	menu_links.style.display  = "block";
}

function displayNextImage() {
   x = (x === images.length - 1) ? 0 : x + 1;
  document.getElementById("banner_sedes").src = images[x];
}

function startTimer() {
  setInterval(displayNextImage, 2000);
}
  var images = [], x = -1;
    images[0] = "./pics/home/banner1.jpg";
    images[1] = "./pics/home/banner2.jpg";
    images[2] = "./pics/home/banner3.jpg";