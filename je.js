const messages = [
    "Me gusta tu risa cuando algo te da demasiada risa, es muy genuina y me pone feliz",
    "Me gusta la forma de tus ojos, ya lo he dicho, pero son curvitos y se achinan al final, muy perfecto",
    "Me gusta buscar tu pupila en tus ojos, je, cuando se ve es bonito",
    "Me gusta cómo me miras tan fijamente, pero cuando te volteo a mirar te apenas, muy linda",
    "Me gusta cómo juegas con mi mano cuando vamos de la mano",
    "Amo cómo te pones muy 'aaa' cuando te da pena que te vea hacer algo y me pides que no te mire",
    "Amo lo mucho que te gustan las cosas que te gustan, son muy tú",
    "Me encanta lo mucho que eres tú siempre",
    "Amo cómo te apenas cuando me babeas durmiendo, ahaajaaahaj, te ves muy tierna",
    "Tus piernas son muy, muy, muy lindas, me encantan",
    "Me gusta cómo te muerdes el labio cuando estás distraída y tienes esa mirada perdida",
    "Amo las citas contigo",
    "Amo mi vida contigo, Ela",
    "Amo tu compañía",
    "Amo tu ex fanatismo del K-pop, hahaha, y las tardes en las que me cantas y me explicas todo",
    "Tus cejas me parecen muy bonitas, je, me gusta tocarlas",
    "Me gusta acariciarte el brazo cuando duermes en mi pecho",
    "Me encanta todo lo que eres y más, Ela",
    "Me gusta ver tus tatuajes, son muy lindos y te quedan muy bien",
    "Amo lo linda que eres con las personas que quieres, amas muy puramente",
    "Amo lo cercana que eres con tu abuela, es algo muy lindo",
    "Amo que te dejes llevar por cómo te sientes y fluyas tanto",
    "Amo abrazarte, es de las cosas más reconfortantes que puedo pensar",
    "Me gusta lo linda que eres conmigo, Ela",
    "Me gusta lo comprensiva que puedes ser muchas veces",
    "De todo lo que me gusta de ti, creo que lo que más amo es a Cebollón y a Pitayón, ahahah, me los robo",
    "No es precisamente algo de ti, pero en realidad sí. Me gusta la persona que soy contigo y lo que me has hecho solo estando contigo. Gracias, linda",
    "Te ves linda cuando estás enojada o estresada, ahhaaah, muy bonita la verdad",
    "Me gusta invadir tu espacio personal, entre más cerca tuyo estoy, mejor me siento",
    "Más importante que nada, me gusta quién eres y lo que eres, Ela, no lo que puedas ser para mí. Voy a seguir en tu vida porque te amo"
];


function getRandomMessage() {
    return messages[Math.floor(Math.random() * messages.length)];
}

function createNote() {
    const note = document.createElement('div');
    note.className = 'note';
    /*note.textContent = "N"; // Mostrar solo "Nota" en la vista principal*/
    note.dataset.message = getRandomMessage(); // Guardar mensaje en atributo de datos
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
    for (let i = 0; i < 25; i++) {
        container.appendChild(createNote());
    }
}

function addMoreNotes() {
    const container = document.getElementById('container');
    for (let i = 0; i < 5; i++) {
        container.appendChild(createNote());
    }
}

function resetNotes() {
    const container = document.getElementById('container');
    container.innerHTML = '';
    addInitialNotes();
}

document.addEventListener('DOMContentLoaded', () => {
    addInitialNotes();
    document.getElementById('add-notes').addEventListener('click', addMoreNotes);
    document.getElementById('reset').addEventListener('click', resetNotes);
    document.querySelector('.close').addEventListener('click', () => {
        document.getElementById('messageModal').style.display = "none";
    });
});