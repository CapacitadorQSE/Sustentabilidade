// Controle de Acessibilidade
const content = document.getElementById("content");
const increaseFont = document.getElementById("increase-font");
const decreaseFont = document.getElementById("decrease-font");

let currentFontSize = 16;

increaseFont.addEventListener("click", () => {
  currentFontSize += 2;
  content.style.fontSize = `${currentFontSize}px`;
});

decreaseFont.addEventListener("click", () => {
  if (currentFontSize > 10) {
    currentFontSize -= 2;
    content.style.fontSize = `${currentFontSize}px`;
  }
});
