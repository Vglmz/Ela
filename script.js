document.addEventListener('DOMContentLoaded', function() {
    const character = document.getElementById('character');
    const messageContainer = document.getElementById('messageContainer');
    const closeButton = document.getElementById('closeButton');
    const cake = document.getElementById('cake');
    const heartsContainer = document.getElementById('hearts-container');
    const musicButton = document.getElementById('music-button');
    const bgMusic = document.getElementById('bgMusic');
    const cartaButton = document.querySelector('.nav-button');
    
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
    
    // Botón de carta
    cartaButton.addEventListener('click', showMessage);
    
    // Controlar la música
    let musicPlaying = false;
    musicButton.addEventListener('click', function() {
        if (musicPlaying) {
            bgMusic.pause();
            musicButton.textContent = '⏸';
        } else {
            bgMusic.play().catch(e => console.log('Error al reproducir música:', e));
            musicButton.textContent = '▶';
        }
        musicPlaying = !musicPlaying;
    });
    
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
});