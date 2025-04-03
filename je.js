const messages = [
    "Me gusta tu risa cuando algo te da demasiada risa, es muy genuina y me pone feli",
    "Me gusta la forma de tus ojos, ya lo he dicho, pero son curvitos y se achinan al final, son perfectos",
    "Me gusta buscar tu pupila en tus ojos, je, cuando se ve es muy bonito",
    "Me gusta cómo me miras tan fijamente, pero cuando te volteo a mirar te apenas, muy linda",
    "Me gusta cómo juegas con mi mano cuando vamos de la mano",
    "Amo cómo te pones muy aaa cuando te da pena que te vea hacer algo y me pides que no te mire",
    "Me encanta lo mucho que te gustan las cosas que te gustan, son muy tu",
    "Me encanta lo mucho que eres tu siempre",
    "Amo cómo te apenas cuando me babeas durmiendo ahaajaaahaj, te ves muy tierna",
    "Tus piernas son muy, muy, muyyyyy lindas, me encantan lo sabes ;)",
    "Me gusta cómo te muerdes el labio cuando estas distraída y tienes esa mirada perdida",
    "Amo las citas contigo ela, no importa que sea amo estar contigo",
    "Amo mi vida contigo Ela",
    "Amo tu compañía siempre, por mas sutil que sea me siento muy feliz",
    "Amo tu ex fanatismo del K-pop hahaha, y las tardes en las que me cantas y me explicas todo",
    "Tus cejas me parecen muy bonitas, je, me gusta tocarlas",
    "Me gust mucho tu piercing hot je",
    "AMO dormir contigo y que me babees ahahahahha",
    "Me encanta acariciarte cuando duermes en mi pecho",
    "Me encanta todo lo que eres y mas ela",
    "Me gustas con el cabello corto",
    "Yyyy me vas a gustar con el cabello largo je",
    "Me gustas con capul je ;)",
    "Yyyyy me gustas sin capul ahahhaa",
    "Daniela me gustas como sea, no sabes cuanto",
    "Me gusta ver tus tatuajes, son muy lindos y tocarlos mas aun ;)",
    "Amo lo linda que eres con las personas que quieres, amas muy puramente",
    "Amo lo cercana que eres con tu abuela, es algo muy lindo",
    "Amo que te dejes llevar por cómo te sientes y fluyas tanto",
    "Amo abrazarte, es de las cosas más reconfortantes que puedo pensar",
    "Me gusta lo linda y ligeramente debil que eres conmigo Ela, no dejes de serlo porfa hermosa",
    "Me gusta lo comprensiva que puedes ser muchas veces",
    "Me gusta todo de ti ela, no cambiaria una sola cosa de verdad",
    "De todo lo que me gusta de ti, creo que lo que más amo es a Cebollón y a Pitayón, ahahah, me los robo",
    "No es precisamente algo de ti, pero en realidad sí. Me gusta la persona que soy contigo y lo que me has hecho solo estando contigo. Gracias, linda",
    "Te ves linda cuando estás enojada o estresada, ahhaaah, muyyyy hermosa la verdad",
    "Me gusta invadir tu espacio personal, entre más cerca tuyo estoy, mejor me siento",
    "Más importante que nada, me gusta quién eres y lo que eres Ela, no lo que puedas ser para mí. Voy a seguir en tu vida porque te amo"
];

// Imágenes para las notas
const images = [
    "coca.png",
    "marina.png", 
    "ajolote.png",
    "orquid.png",
    "fresas.png",  
    "Knuckles_29.webp",
    "curita.png",
    "kirby.png",
    "chansey.png",
    "hamster.png",
    "rose.png",
    "bonnie.webp",
    "knuckles_ramo.png",
    "purin.png",
    "puppycat.png",
    "fresa.png",
    "gatogalleta.png",
    "adrian.png",
    "mc.png",
    "kirby2.png",
    "justin.png"
];

// Variables para rastrear índices actuales
let messageIndex = 0;
let imageIndex = 0;

function getNextMessage() {
    // Obtenemos el mensaje actual y avanzamos al siguiente
    const message = messages[messageIndex];
    messageIndex = (messageIndex + 1) % messages.length;
    return message;
}

function getNextImage() {
    // Obtenemos la imagen actual y avanzamos a la siguiente
    // Las imágenes se repetirán cuando se termine la lista
    const image = images[imageIndex];
    imageIndex = (imageIndex + 1) % images.length;
    return image;
}

function createNote() {
    const note = document.createElement('div');
    note.className = 'note';
    note.dataset.message = getNextMessage(); // Obtener el siguiente mensaje en secuencia
    
    // Crear y añadir imagen a la nota
    const img = document.createElement('img');
    img.src = getNextImage(); // Obtener la siguiente imagen en secuencia
    img.alt = "Imagen decorativa";
    note.appendChild(img);
    
    note.addEventListener('click', showMessage);
    return note;
}

function showMessage(event) {
    const message = event.currentTarget.dataset.message;
    document.getElementById('modalMessage').textContent = message;
    document.getElementById('messageModal').style.display = "block";
}

function addInitialNotes() {
    const container = document.getElementById('container');
    for (let i = 0; i < 38; i++) {
        container.appendChild(createNote());
    }
}

document.addEventListener('DOMContentLoaded', () => {
    addInitialNotes();
    
    // Modal close button
    document.querySelector('.close').addEventListener('click', () => {
        document.getElementById('messageModal').style.display = "none";
    });
    
    // Close modal when clicking outside of it
    window.addEventListener('click', (event) => {
        const modal = document.getElementById('messageModal');
        if (event.target == modal) {
            modal.style.display = "none";
        }
    });

    window.addEventListener("load", function () {
        let audio = document.getElementById("bgMusic"); // Música
        let toggleButton = document.getElementById("music-button"); // Botón correcto
    
        // Asegurar que el botón cambia entre reproducir y pausar
        toggleButton.addEventListener("click", function () {
            if (audio.paused) {
                audio.play();
                toggleButton.textContent = "⏸"; // Cambia el ícono cuando está reproduciendo
            } else {
                audio.pause();
                toggleButton.textContent = "♫"; // Cambia el ícono cuando está en pausa
            }
        });
    
        // Prevenir que la música no inicie si el navegador lo bloquea
        let playPromise = audio.play();
        if (playPromise !== undefined) {
            playPromise.catch(() => {
                console.log("Reproducción automática bloqueada, esperando interacción...");
            });
        }
    });
});