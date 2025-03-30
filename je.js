const messages = [
    "¡Hola Mundo!",
    "Recordar comprar leche",
    "Llamar a mamá",
    "Reunión a las 15:00",
    "Terminar el proyecto",
    "Leer un libro",
    "Hacer ejercicio",
    "Pagar las facturas",
    "Feliz cumpleaños",
    "Vacaciones próximas",
    "Aprender algo nuevo",
    "Sonríe hoy",
    "Visitar al dentista",
    "¡Buena suerte!",
    "Tomar agua",
    "Respirar profundo",
    "Ser amable",
    "Mirar las estrellas",
    "Enviar el informe",
    "Bailar como nadie mira"
];

// Función para obtener un mensaje aleatorio
function getRandomMessage() {
    return messages[Math.floor(Math.random() * messages.length)];
}

// Función para crear una nota
function createNote() {
    const note = document.createElement('div');
    note.className = 'note';
    note.textContent = getRandomMessage();
    note.addEventListener('click', throwDartAt);
    return note;
}

// Función para lanzar dardo a una nota
function throwDartAt(event) {
    const note = event.currentTarget;
    
    // Crear dardo
    const dart = document.createElement('div');
    dart.className = 'dart';
    document.body.appendChild(dart);
    
    // Posición inicial del dardo (centro de la pantalla inferior)
    const startX = window.innerWidth / 2;
    const startY = window.innerHeight;
    
    // Posición final del dardo (centro de la nota)
    const noteRect = note.getBoundingClientRect();
    const endX = noteRect.left + noteRect.width / 2;
    const endY = noteRect.top + noteRect.height / 2;
    
    // Posicionar dardo inicial
    dart.style.left = `${startX}px`;
    dart.style.top = `${startY}px`;
    
    // Configurar variables CSS para la animación
    dart.style.setProperty('--start-x', '0px');
    dart.style.setProperty('--start-y', '0px');
    dart.style.setProperty('--end-x', `${endX - startX}px`);
    dart.style.setProperty('--end-y', `${endY - startY}px`);
    
    // Aplicar animación
    dart.style.animation = 'dartTravel 0.5s forwards';
    
    // Cuando termine la animación del dardo
    setTimeout(() => {
        // Animar desaparición de la nota
        note.style.animation = 'noteDisappear 0.5s forwards';
        
        // Eliminar nota y dardo después de la animación
        setTimeout(() => {
            note.remove();
            dart.remove();
        }, 500);
    }, 500);
}

// Función para agregar notas iniciales
function addInitialNotes() {
    const container = document.getElementById('container');
    for (let i = 0; i < 15; i++) {
        container.appendChild(createNote());
    }
}

// Función para agregar más notas
function addMoreNotes() {
    const container = document.getElementById('container');
    for (let i = 0; i < 5; i++) {
        container.appendChild(createNote());
    }
}

// Función para reiniciar
function resetNotes() {
    const container = document.getElementById('container');
    container.innerHTML = '';
    addInitialNotes();
}

// Inicializar
document.addEventListener('DOMContentLoaded', () => {
    addInitialNotes();
    
    // Evento para agregar más notas
    document.getElementById('add-notes').addEventListener('click', addMoreNotes);
    
    // Evento para reiniciar
    document.getElementById('reset').addEventListener('click', resetNotes);
});