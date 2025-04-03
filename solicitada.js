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
    const labels = ['sonrojadita', 'malmirada ahahah', 'caperucita  je', 'ajsdkasdasd???', 'mis pocos brotes artisticos', 'tatuajes gays. Mi mejor momento tatuada, gay y con camiseta del barcelona je', 'JASJDJASJ vivi ranita', 'lindas trensas', 'costurera??', 'aaaaa un perezoso que lindo', 'foto alterna inedita de la iconica ahahha', 'no se que monda era eso estaba rico', 'que asco viviana', 'JAJAJJAJAJA vivi capul debe ser borrada de las memorias', 'JAJAJAJAJAJAJ soy una dramatica', 'ajsdasjdas estaba enfermita con mi ojo diomedes diaz', 'el celular de mi mama tenia meros juegos :)', 'JAJAJAJAJJAJA re tiesa', 'dato curioso: de mis regalos favoritos jamas. me lo dio mi tia que fallecio y me pone triste que lo regalaron :(', 'vivi gay. asi te enamoro no? ;)', 'JAJAJAJJAJJAJAJAJJAJJA sin comentarios. la rompi', 'dientes redondos para ti amor :)', 'profundo cuento que reflejaba mi necesidad de un perro... y como ves daniela siempre fue mi nombre favorito. el nombre del amor de mi vida diria yo', 'asjdajsdja porque lloraba?? me gustaba esa chaqueta alto flow', 'dramatica, mira mi lunar je ;)','foto final de la programadora que hizo esto con mucho amor para ti hermosa. te amo no sabes cuanto amor.', 'y mi foto favorita hasta la fecha. de los mejores dias de mi vida ela'];
    const mensaje = `oki linda, como no nos vemos hace tanto y probablemente no nos veamos muy cercano :(\n
    yyy como suelo olvidar tomarme fotos ahaha y se que extrañas mis bonitas cejas :3 aqui tienes muchas\n
    fotos inneditas de vivi chiquita y misteriosa. No voy a dejar que te olvides de mi ni de mis dientes\n
    redondos obvio. teamoteamoteamo hermosa. eeeeeeeee disfruta? ahhaajhaja`;

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
        // Aplicamos la transformación de manera consistente para todas las imágenes
        gallery.style.transform = `translateX(-${currentIndex * 100}%)`;
        
        // Aseguramos que cada slide mantiene su anchura exacta
        slides.forEach(slide => {
            slide.style.width = '100%';
            slide.style.flex = '0 0 100%';
        });
        
        // Actualizamos la etiqueta alternando entre los dos valores
        imageLabel.textContent = labels[currentIndex % labels.length];
        
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
        // Aseguramos que el índice está dentro del rango
        if (index < 0) index = slideCount - 1;
        if (index >= slideCount) index = 0;
        
        currentIndex = index;
        updateGallery();
    }
    
    // Function to go to the next slide
    function nextSlide() {
        goToSlide((currentIndex + 1) % slideCount);
    }
    
    // Function to go to the previous slide
    function prevSlide() {
        goToSlide((currentIndex - 1 + slideCount) % slideCount);
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
});