// Función para mostrar el section deseado y ocultar el otro
function mostrarSection(sectionId) {
    const section1 = document.getElementById("section1");
    const section2 = document.getElementById("section2");

    if (sectionId === "section1") {
        section1.style.display = "block";
        section2.style.display = "none";
    } else if (sectionId === "section2") {
        section1.style.display = "none";
        section2.style.display = "block";
    }
}

// Asocia la función al evento clic del botón Mostrar Fondo 1
const botonMostrar1 = document.getElementById("mostrarSection1");
botonMostrar1.addEventListener("click", () => mostrarSection("section1"));

// Asocia la función al evento clic del botón Mostrar Fondo 2
const botonMostrar2 = document.getElementById("mostrarSection2");
botonMostrar2.addEventListener("click", () => mostrarSection("section2"));