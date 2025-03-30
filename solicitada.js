document.addEventListener('DOMContentLoaded', function() {
    // Elements
    const gallery = document.getElementById('gallery');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    const indicatorsContainer = document.getElementById('indicators');
    const imageLabel = document.getElementById('imageLabel');
    const background = document.getElementById('background');
    
    // Variables
    const slides = gallery.querySelectorAll('.slide');
    const slideCount = slides.length;
    let currentIndex = 0;
    
    // Labels for each image (you can customize these)
    const labels = ['QUEER', 'ARTE'];
    const mensaje = `¡Feliz cumpleaños! 🎉\n
    Quiero que sepas que eres una persona increíble y especial.\n
    Cada momento contigo es un regalo y quiero celebrar tu vida hoy y siempre. 💖\n
    Te hice esta pequeña página con mucho cariño para recordarte lo mucho que significas para mí.\n
    Espero que te haga sonreír. 😊\n
    Con todo mi amor,\n
    [Tu nombre]`;

    // Create indicators
    for (let i = 0; i < slideCount; i++) {
        const indicator = document.createElement('div');
        indicator.classList.add('indicator');
        if (i === 0) indicator.classList.add('active');
        indicator.dataset.index = i;
        indicatorsContainer.appendChild(indicator);
        
        // Add click event to each indicator
        indicator.addEventListener('click', function() {
            goToSlide(parseInt(this.dataset.index));
        });
    }
    
    // Get all indicators
    const indicators = document.querySelectorAll('.indicator');
    
    // Function to update the background with the current image
    function updateBackground() {
        const currentImage = slides[currentIndex].querySelector('img').src;
        background.style.backgroundImage = `url(${currentImage})`;
    }
    
    // Function to update the gallery position
    function updateGallery() {
        gallery.style.transform = `translateX(-${currentIndex * 100}%)`;
        imageLabel.textContent = labels[currentIndex];
        
        // Update indicators
        indicators.forEach((ind, index) => {
            if (index === currentIndex) {
                ind.classList.add('active');
            } else {
                ind.classList.remove('active');
            }
        });
        
        // Update background
        updateBackground();
    }
    
    // Function to go to a specific slide
    function goToSlide(index) {
        currentIndex = index;
        updateGallery();
    }
    
    // Function to go to the next slide
    function nextSlide() {
        currentIndex = (currentIndex + 1) % slideCount;
        updateGallery();
    }
    
    // Function to go to the previous slide
    function prevSlide() {
        currentIndex = (currentIndex - 1 + slideCount) % slideCount;
        updateGallery();
    }
    
    // Event listeners
    nextBtn.addEventListener('click', nextSlide);
    prevBtn.addEventListener('click', prevSlide);
    
    // Keyboard navigation
    document.addEventListener('keydown', function(e) {
        if (e.key === 'ArrowRight') {
            nextSlide();
        } else if (e.key === 'ArrowLeft') {
            prevSlide();
        }
    });
    
    // Initialize gallery and background
    updateBackground();
    updateGallery();

    let index = 0;
    const velocidad = 50; // Velocidad en milisegundos
    const mensajeElemento = document.getElementById("mensaje");

    function escribirTexto() {
        if (index < mensaje.length) {
            if (mensaje.charAt(index) === "\n") {
                mensajeElemento.innerHTML += "<br>"; // Agrega un salto de línea en HTML
            } else {
                mensajeElemento.innerHTML += mensaje.charAt(index);
            }
            index++;
            setTimeout(escribirTexto, velocidad);
        }
    }

    escribirTexto(); // Iniciar animación
    
    // Auto-rotate slides every 5 seconds (optional)
    // Uncomment the code below if you want auto-rotation
    /*
    setInterval(() => {
        nextSlide();
    }, 5000);
    */
});