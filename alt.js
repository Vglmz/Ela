document.addEventListener("DOMContentLoaded", function () {
    
    //------------------------------------------------------------
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
    const mens = `oki linda, como no nos vemos hace tanto y probablemente no nos veamos muy cercano :(\n
    yyy como suelo olvidar tomarme fotos ahaha y se que extrañas mis bonitas cejas :3 aqui tienes muchas\n
    fotos inneditas de vivi chiquita y misteriosa. No voy a dejar que te olvides de mi ni de mis dientes\n
    redondos obvio. eeeeeeeee disfruta? ahhaajhaja`;

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
    
    //Function to update the background with the current image
    function updateBackground() {
        const currentImage = slides[currentIndex].querySelector('img').src;
        background.style.backgroundImage = `url(${currentImage})`;
    }
    
    // Function to update the gallery position
    function updateGallery() {
        gallery.style.transform = `translateX(-${currentIndex * 100}%)`;
        
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
    const velocidad = 65; // Velocidad en milisegundos 75
    const mensajeElemento = document.getElementById("mens");

    function escribirTexto() {
        if (index < mens.length) {
            if (mens.charAt(index) === "\n") {
                mensajeElemento.innerHTML += "<br>"; // Agrega un salto de línea en HTML
            } else {
                mensajeElemento.innerHTML += mensaje.charAt(index);
            }
            index++;
            setTimeout(escribirTexto, velocidad);
        }
    }

    escribirTexto(); // Iniciar animación


    window.addEventListener("load", function () {
        let audio = document.getElementById("background-audio");
    
        // Intenta reproducir automáticamente
        let playPromise = audio.play();
    
        if (playPromise !== undefined) {
            playPromise.catch(() => {
                // Si el navegador bloquea la reproducción, espera la interacción del usuario
                document.addEventListener("click", () => {
                    audio.play();
                }, { once: true }); // Solo se ejecuta una vez
            });
        }
    
        // Evento para pausar y reproducir el audio con el botón
        document.getElementById("toggle-audio").addEventListener("click", function () {
            if (audio.paused) {
                audio.play();
                this.textContent = "⏸"; // Cambia el texto del botón
            } else {
                audio.pause();
                this.textContent = "▶"; // Cambia el texto del botón
            }
        });
    });
    //-----------------------------------------------------------------------------
    // Crear y agregar el div del mensaje si no existe
    let mensDiv = document.getElementById("mens");
    if (!mensDiv) {
        mensDiv = document.createElement("div");
        mensDiv.id = "mens";
        mensDiv.innerHTML = `<span id="cerrarMensaje" style="cursor:pointer; position:absolute; top:5px; right:10px;">✖</span>
                                <p id="mensajeTexto"></p>`;
        document.body.appendChild(mensDiv);

        // Agregar evento al botón de cerrar
        document.getElementById("cerrarMensaje").addEventListener("click", function () {
            mensDiv.style.display = "none";
        });
    }

    // Seleccionar todas las imágenes dentro del carrusel (ruleta)
    const imagenesCarrusel = document.querySelectorAll(".gallery .slide img");
    const mensajeTexto = document.getElementById("mensajeTexto");

    imagenesCarrusel.forEach(img => {
        img.addEventListener("click", function () {
            // Extraer el nombre del archivo sin extensión
            const nombreImagen = this.src.split('/').pop().split('.')[0];

            // Mostrar el mensaje dentro del recuadro
            mensajeTexto.innerText = `¡Hiciste clic en ${nombreImagen.toUpperCase()}!`;
            mensajeDiv.style.display = "block"; 
        });
    });

});
