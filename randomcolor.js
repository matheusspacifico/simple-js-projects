const colors = ["red", "green", "blue", "white", "black", "pink", "purple", "yellow"];
const change = document.getElementById("change-color-button");
let colorContainer = document.getElementById("random-color-container");
let colorText = document.getElementById("color-name-span");

change.addEventListener("click", () => {
    const randomColorIndex = Math.floor(Math.random() * colors.length);
    colorContainer.style.backgroundColor = colors[randomColorIndex];
    colorText.textContent = colors[randomColorIndex];
});