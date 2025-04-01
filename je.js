document.addEventListener("DOMContentLoaded", function () {
    const container = document.getElementById("container");
    const resetBtn = document.getElementById("reset");

    // Lista de imágenes para alternar
    const noteImages = ["nota1.png", "nota2.png", "nota3.png"]; 

    function resetNotes() {
        container.innerHTML = "";
    }

    addNotesBtn.addEventListener("click", addNotes);
    resetBtn.addEventListener("click", resetNotes);

    const background = document.body; // Usamos el body como fondo

    // Imagen de fondo
    const backgroundImage = "fondo.png"; 

    function updateBackground() {
        background.style.backgroundImage = `url(${backgroundImage})`;
        background.style.backgroundSize = "cover";
        background.style.backgroundPosition = "center";
    }

    updateBackground(); // Aplica la imagen de fondo al cargar
});
