document.addEventListener('DOMContentLoaded', function() {
    // Elementos del DOM
    const character = document.getElementById('character');
    const messageContainer = document.getElementById('messageContainer');
    const closeButton = document.getElementById('closeButton');
    const cake = document.getElementById('cake');
    const heartsContainer = document.getElementById('hearts-container');
    const musicButton = document.getElementById('music-button');
    const bgMusic = document.getElementById('bgMusic');
    
    // Verificar si el elemento de audio existe y está cargado
    if (bgMusic) {
        console.log("Audio element found");
        
        // Verificar si la fuente del audio está bien configurada
        const audioSource = bgMusic.querySelector('source');
        if (audioSource) {
            console.log("Audio source found:", audioSource.src);
        } else {
            console.error("No audio source found!");
        }
        
        // Manejar errores de carga del audio
        bgMusic.addEventListener('error', function(e) {
            console.error("Audio error:", e);
        });
    } else {
        console.error("Audio element not found!");
    }
    
    // Función para mostrar el mensaje
    function showMessage() {
        messageContainer.classList.add('show');
        createConfetti();
    }
    
    // Función para cerrar el mensaje
    closeButton.addEventListener('click', function() {
        messageContainer.classList.remove('show');
    });
    
    // Interacción con el personaje
    character.addEventListener('click', function() {
        document.getElementById('pompompurin-img').style.transform = 'scale(1.1)';
        createHearts(5, character);
        setTimeout(() => {
            document.getElementById('pompompurin-img').style.transform = 'scale(1)';
        }, 300);
    });
    
    // Interacción con el pastel
    cake.addEventListener('click', function() {
        createHearts(10, cake);
        setTimeout(showMessage, 500);
    });
    
    // Botón del mensaje - Corregido el selector
    const cartaButton = document.querySelector('#cake');  // Usar # para seleccionar por ID
    if (cartaButton) {
        cartaButton.addEventListener('click', showMessage);
    } else {
        console.error("Carta button not found!");
    }
    
    // Función para crear corazones
    function createHearts(count, sourceElement) {
        const rect = sourceElement.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        
        for (let i = 0; i < count; i++) {
            const heart = document.createElement('div');
            heart.className = 'heart';
            heart.textContent = '♥';
            heart.style.left = `${centerX - 10 + Math.random() * 20}px`;
            heart.style.top = `${centerY - 10 + Math.random() * 20}px`;
            heart.style.fontSize = `${15 + Math.random() * 15}px`;
            heart.style.animationDelay = `${Math.random() * 2}s`;
            heartsContainer.appendChild(heart);
            
            setTimeout(() => {
                heartsContainer.removeChild(heart);
            }, 4000);
        }
    }
    
    // Función para crear confeti
    function createConfetti() {
        for (let i = 0; i < 50; i++) {
            const confetti = document.createElement('div');
            confetti.className = 'confetti';
            confetti.style.left = `${Math.random() * 100}%`;
            confetti.style.top = `${Math.random() * 100}%`;
            confetti.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
            confetti.style.width = `${5 + Math.random() * 10}px`;
            confetti.style.height = `${5 + Math.random() * 10}px`;
            confetti.style.borderRadius = Math.random() > 0.5 ? '50%' : '0';
            confetti.style.opacity = '1';
            confetti.style.transition = 'transform 5s, top 5s, opacity 5s';
            
            document.body.appendChild(confetti);
            
            setTimeout(() => {
                confetti.style.transform = `rotate(${Math.random() * 360}deg) translate(${Math.random() * 100 - 50}px, ${Math.random() * -250}px)`;
                confetti.style.opacity = '0';
            }, 10);
            
            setTimeout(() => {
                document.body.removeChild(confetti);
            }, 5000);
        }
    }
    
    // Crear corazones aleatorios de vez en cuando
    setInterval(() => {
        if (Math.random() > 0.7) {
            createHearts(1, character);
        }
    }, 3000);

    // Botón para abrir página de regalo
    const goToPageButton = document.getElementById('goToPageButton');
    if (goToPageButton) {
        goToPageButton.addEventListener('click', function() {
            window.open('regalo.html', '_blank');
        });
    }

    // Controlar la música
    let musicPlaying = false;
    if (musicButton) {
        musicButton.addEventListener('click', function() {
            console.log("Music button clicked, current state:", musicPlaying);
            
            if (musicPlaying) {
                bgMusic.pause();
                musicButton.textContent = '♫';
                musicPlaying = false;
                console.log("Music paused");
            } else {
                // Reiniciar desde el principio si es necesario
                // bgMusic.currentTime = 0;
                
                const playPromise = bgMusic.play();
                
                if (playPromise !== undefined) {
                    playPromise.then(() => {
                        musicButton.textContent = '⏸';
                        musicPlaying = true;
                        console.log("Music playing");
                    }).catch(e => {
                        console.error("Error playing music:", e);
                        alert("No se pudo reproducir la música. Por favor, intenta hacer clic en cualquier parte de la página primero.");
                    });
                }
            }
        });
    } else {
        console.error("Music button not found!");
    }
});
