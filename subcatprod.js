function changeMedia(element) {
  const mainDisplay = document.getElementById("main-display");
  mainDisplay.innerHTML = ""; // Limpiar

  if (element.tagName === "IMG") {
    const newImg = document.createElement("img");
    newImg.src = element.src;
    newImg.id = "main-media";
    mainDisplay.appendChild(newImg);
  } else if (element.tagName === "VIDEO") {
    const newVid = document.createElement("video");
    newVid.src = element.src;
    newVid.controls = true;
    newVid.autoplay = true;
    newVid.id = "main-media";
    mainDisplay.appendChild(newVid);
  }
}

// Simulación de navegación (aquí deberías redirigir a otras páginas reales)
function goToPreviousProduct() {
  location.href = "SubcatUnoProdAnterior.html"; // cambiar por tu ruta real
}

function goToNextProduct() {
  location.href = "SubcatUnoProdSiguiente.html"; // cambiar por tu ruta real
}
