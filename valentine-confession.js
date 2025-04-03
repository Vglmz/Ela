$("#messageState").on("change", (x) => {
	$(".message").removeClass("openNor").removeClass("closeNor");
	if ($("#messageState").is(":checked")) {
		$(".message").removeClass("closed").removeClass("no-anim").addClass("openNor");
		$(".heart").removeClass("closeHer").removeClass("openedHer").addClass("openHer");
		$(".container").stop().animate({"backgroundColor": "#3a3c6e"}, 2000);
		console.log("Abrindo");
	} else {
		$(".message").removeClass("no-anim").addClass("closeNor");
		$(".heart").removeClass("openHer").removeClass("openedHer").addClass("closeHer");
		$(".container").stop().animate({"backgroundColor": "#b7b9eb"}, 2000);
		console.log("fechando");
	}
});

$(".message").on('webkitAnimationEnd oanimationend msAnimationEnd animationend', function(e) {
	console.log("Animation End");
	if ($(".message").hasClass("closeNor"))
		$(".message").addClass("closed");
	$(".message").removeClass("openNor").removeClass("closeNor").addClass("no-anim");
});

$(".heart").on('webkitAnimationEnd oanimationend msAnimationEnd animationend', function(e) {
	console.log("Animation End");
	if (!$(".heart").hasClass("closeHer"))
		$(".heart").addClass("openedHer").addClass("beating");
	else
		$(".heart").addClass("no-anim").removeClass("beating");
	$(".heart").removeClass("openHer").removeClass("closeHer");
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
