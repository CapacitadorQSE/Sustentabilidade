// Controle de Acessibilidade
const content = document.getElementById("content");
const increaseFont = document.getElementById("increase-font");
const decreaseFont = document.getElementById("decrease-font");

let currentFontSize = 16; // Tamanho inicial da fonte

// Aumentar Fonte
increaseFont.addEventListener("click", () => {
  currentFontSize += 2;
  content.style.fontSize = `${currentFontSize}px`;
});

// Reduzir Fonte
decreaseFont.addEventListener("click", () => {
  if (currentFontSize > 12) {
    currentFontSize -= 2;
    content.style.fontSize = `${currentFontSize}px`;
  }
});
// Função para smooth scroll ao clicar nos links do menu
document.querySelectorAll('.nav-icon').forEach((icon) => {
  icon.addEventListener('click', (event) => {
    const targetId = icon.getAttribute('href').substring(1);
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      event.preventDefault();
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  });
});
