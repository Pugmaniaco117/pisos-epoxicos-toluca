    const galerias = document.querySelectorAll(".galeria");
    const visor = document.getElementById("visor");
    const imagenGrande = document.getElementById("imagenGrande");
    const numero = document.getElementById("numero");
    const descripcion = document.getElementById("descripcion");
    const cerrar = document.getElementById("cerrar");
    const anterior = document.getElementById("anterior");
    const siguiente = document.getElementById("siguiente");

    const infoGalerias = {
        marimbas: {
        titulo: "Marimbas y franjas",
        tipo: "Imagen",
        textos: [
        "Trabajo de delimitación y aplicación de franjas para mejorar la seguridad y presentación del área.",
        "Marcado de líneas y zonas de tránsito con acabado resistente.",
        "Aplicación de franjas visibles para ordenar el paso y proteger el piso.",
        "Resultado final con señalización limpia, funcional y lista para uso."
        ]
        },

        autonivelante: {
                titulo: "Autonivelante",
                tipo: "Paso",
                textos: [
                    "Preparación del área antes de iniciar la aplicación del piso autonivelante.",
                    "Limpieza de la superficie para retirar polvo, grasa y residuos.",
                    "Revisión del piso para detectar detalles, grietas o zonas irregulares.",
                    "Corrección de imperfecciones antes de aplicar el sistema epóxico.",
                    "Preparación de la base para mejorar la adherencia del material.",
                    "Mezcla y preparación del material autonivelante.",
                    "Aplicación inicial del material sobre la superficie.",
                    "Distribución uniforme del producto en el área trabajada.",
                    "Nivelación del material para lograr una superficie pareja.",
                    "Eliminación de marcas y burbujas durante la aplicación.",
                    "Revisión de cobertura y avance del acabado.",
                    "Inicio del proceso de curado del material aplicado.",
                    "Formación del acabado brillante y uniforme.",
                    "Inspección visual del piso durante el secado.",
                    "Corrección de pequeños detalles en el acabado.",
                    "Limpieza del área después de la aplicación.",
                    "Verificación de brillo, uniformidad y presentación final.",
                    "Piso autonivelante terminado con acabado profesional.",
                    "Resultado final listo para su uso."
                ]
            },

            mortero: {
                titulo: "Mortero epóxico con acabado autonivelante",
                tipo: "Paso",
                textos: [
                    "Preparación del área para aplicar mortero epóxico.",
                    "Limpieza y revisión del concreto antes de iniciar el trabajo.",
                    "Aplicación del mortero epóxico sobre la superficie preparada.",
                    "Distribución del mortero para reforzar y nivelar el piso.",
                    "Aplicación del acabado autonivelante sobre el mortero.",
                    "Revisión de cobertura en zonas de alto tránsito.",
                    "Acomodo del material para dejar una superficie pareja.",
                    "Acabado resistente para negocios, talleres o fábricas.",
                    "Revisión del brillo y uniformidad del acabado.",
                    "Limpieza final del área trabajada.",
                    "Inspección del resultado terminado.",
                    "Entrega del piso con acabado autonivelante listo para uso."
                ]
            }
        };

    let imagenesActuales = [];
let indiceActual = 0;
let seccionActual = "";

function mostrarImagen() {
    const img = imagenesActuales[indiceActual];
    const info = infoGalerias[seccionActual];

    imagenGrande.src = img.src;
    imagenGrande.alt = img.alt;

    if (info) {
        numero.textContent = info.titulo + " - " + info.tipo + " " + (indiceActual + 1) + " de " + imagenesActuales.length;
        descripcion.textContent = info.textos[indiceActual] || img.alt;
    } else {
        numero.textContent = "Imagen " + (indiceActual + 1) + " de " + imagenesActuales.length;
        descripcion.textContent = img.alt;
    }
}

function abrirVisor(imagenes, index, seccion) {
    imagenesActuales = imagenes;
    indiceActual = index;
    seccionActual = seccion;

    visor.style.display = "block";
    mostrarImagen();
}

function siguienteImagen() {
    indiceActual++;

    if (indiceActual >= imagenesActuales.length) {
        indiceActual = 0;
    }

    mostrarImagen();
}

function imagenAnterior() {
    indiceActual--;

    if (indiceActual < 0) {
        indiceActual = imagenesActuales.length - 1;
    }

    mostrarImagen();
}

galerias.forEach((galeria) => {
    const imagenes = Array.from(galeria.querySelectorAll("img"));
    const seccion = galeria.dataset.seccion;

    imagenes.forEach((img, index) => {
        img.addEventListener("click", () => {
            abrirVisor(imagenes, index, seccion);
        });
    });
});

siguiente.addEventListener("click", (e) => {
    e.stopPropagation();
    siguienteImagen();
});

anterior.addEventListener("click", (e) => {
    e.stopPropagation();
    imagenAnterior();
});

cerrar.addEventListener("click", () => {
    visor.style.display = "none";
});

visor.addEventListener("click", (e) => {
    if (e.target === visor) {
        visor.style.display = "none";
    }
});

let inicioToque = 0;
let finToque = 0;

visor.addEventListener("touchstart", (e) => {
    inicioToque = e.changedTouches[0].screenX;
});

visor.addEventListener("touchend", (e) => {
    finToque = e.changedTouches[0].screenX;

    if (inicioToque - finToque > 50) {
        siguienteImagen();
    }

    if (finToque - inicioToque > 50) {
        imagenAnterior();
    }
});
const formulario = document.getElementById("formulario-cotizacion");

formulario.addEventListener("submit", function (evento) {
    evento.preventDefault();

    const nombre = document.getElementById("nombre").value;
    const telefono = document.getElementById("telefono").value;
    const metros = document.getElementById("metros").value;
    const servicio = document.getElementById("servicio").value;
    const mensaje = document.getElementById("mensaje").value;

    const numeroWhatsApp = "527224976140";

    const texto = `
Hola, quiero solicitar una cotización.

Nombre: ${nombre}
Teléfono: ${telefono}
Servicio: ${servicio}
Metros aproximados: ${metros || "No especificados"}
Mensaje: ${mensaje || "Sin mensaje adicional"}
    `;

    const enlace = `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(texto)}`;

    window.open(enlace, "_blank");
});