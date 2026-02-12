const paletteContainer = document.getElementById("palette");
const generateBtn = document.getElementById("generateBtn");

function randomColor() {
  return "#" + Math.floor(Math.random() * 16777215).toString(16).padStart(6, "0");
}

function generatePalette() {
  paletteContainer.innerHTML = "";

  for (let i = 0; i < 6; i++) {
    const color = randomColor();
    const card = document.createElement("div");
    card.className = "color-card";
    card.style.background = color;
    card.textContent = color;

    // Delay animación escalonada (stagger effect)
    card.style.animationDelay = `${i * 0.1}s`;

    card.addEventListener("click", () => {
      navigator.clipboard.writeText(color);
      card.textContent = "✔ Copiado";
      setTimeout(() => card.textContent = color, 800);
    });

    paletteContainer.appendChild(card);
  }
}

generateBtn.addEventListener("click", generatePalette);
generatePalette();

