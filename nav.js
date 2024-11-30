const botonera = document.querySelector("#botonera");
const abrir = document.querySelector("#abrir");
const cerrar = document.querySelector("#cerrar");


abrir.addEventListener("click", () => {
    botonera.classList.add("visible");
} )
cerrar.addEventListener("click", () => {
    botonera.classList.remove("visible");
} )