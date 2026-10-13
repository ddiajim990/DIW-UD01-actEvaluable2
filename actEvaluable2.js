const url_actual = document.getElementById("url").textContent = window.location;
const nom_nav = document.getElementById("nom").textContent = window.navigator.userAgent;
const ancho_alto = document.getElementById("tam").textContent = window.screen.availWidth + " x " + window.screen.availHeight;
const idioma_nav = document.getElementById("idioma").textContent = window.navigator.language;

function ejercicio2() {
    alert("Ancho y alto de la ventana del navegador: " + window.outerWidth + " x " + window.outerHeight);
    alert("Ancho y alto de la zona visible de la pagina: " + window.innerWidth + " x " + window.innerHeight);
}

function volver() {
    window.history.back();
}

function recargar() {
    window.location.reload();
}

function Iniciar() {
    
}

function Detener() {

}

function abrirVentana() {
    window.open("https://www.google.com");
}

function cerrarVentana() {
    window.close();
}

function cambiarFondo() {
    
}