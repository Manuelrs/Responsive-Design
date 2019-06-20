window.onload = function () {
    document.querySelector("#boton").addEventListener("click", toggle);
};

window.onresize = function () {
    mostrarNav();
};

function toggle() {
    var lista = document.querySelector(".nav");
    if (lista.style.display === "flex") {
	lista.style.display = "none";
    } else {
	lista.style.display = "flex";
    }

}

function mostrarNav() {
    var navegador = window.matchMedia("(min-width: 550px)"); 
    var lista = document.querySelector(".nav");
    if (navegador.matches) {
	lista.style.display = "flex";
    } else {
	navegador = window.matchMedia("(max-width: 550px)"); 
	if (navegador.matches) {
	    lista.style.display = "none";
	}

    }
}


