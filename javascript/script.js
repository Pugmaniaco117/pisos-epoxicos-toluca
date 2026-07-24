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
        "1. Preparación inicial del área. Se revisa el estado del piso y se retiran residuos antes de comenzar el trabajo.",

        "2. Limpieza y acondicionamiento del concreto. La superficie se prepara para mejorar la adherencia del sistema epóxico.",

        "3. Aplicación de la capa de preparación. Se cubre la superficie y se trabajan las uniones cercanas a los muros.",

        "4. Formación del zoclo sanitario. Se detallan cuidadosamente los bordes, las columnas y los encuentros con las paredes.",

        "5. Cobertura de la superficie. La base queda aplicada de manera uniforme sobre toda el área.",

        "6. Preparación de pasillos y esquinas. Se completa la aplicación en zonas estrechas y alrededor de los muros.",

        "7. Aplicación inicial de la capa base. El material se distribuye por secciones sobre la superficie preparada.",

        "8. Capa base terminada. El área queda completamente cubierta y lista para recibir el acabado autonivelante.",

        "9. Inicio del acabado autonivelante. El recubrimiento comienza a extenderse para formar una superficie continua.",

        "10. Distribución uniforme del material. Se controla la cobertura para obtener un acabado parejo en toda el área.",

        "11. Nivelación de la superficie. El producto se acomoda para reducir marcas y mantener un espesor uniforme.",

        "12. Aplicación del recubrimiento final. El personal distribuye cuidadosamente el material sobre el piso.",

        "13. Revisión del avance. Se verifica la continuidad, nivelación y cobertura del sistema autonivelante.",

        "14. Formación del acabado brillante. La superficie comienza a mostrar una apariencia lisa y reflectante.",

        "15. Acabado continuo y uniforme. El piso queda sin uniones visibles y con una presentación profesional.",

        "16. Vista general del resultado. Se aprecia el brillo y la nivelación obtenidos en toda el área.",

        "17. Detalle del acabado terminado. El recubrimiento presenta una superficie lisa, brillante y fácil de limpiar.",

        "18. Resultado final. Piso epóxico autonivelante completamente terminado y listo para su uso."
    ]
},

        mortero: {
    titulo: "Mortero epóxico con acabado autonivelante",
    tipo: "Paso",
    textos: [
        "1. Preparación y reparación del piso. Se corrigen grietas, desniveles y zonas dañadas antes de aplicar el mortero epóxico.",

        "2. Compactación del mortero epóxico. El material se distribuye y compacta para crear una base resistente y uniforme.",

        "3. Nivelación manual de la superficie. Se extiende cuidadosamente el mortero epóxico para eliminar irregularidades.",

        "4. Avance de la base epóxica. El área queda cubierta con una capa firme y nivelada de mortero epóxico.",

        "5. Aplicación por secciones. Se continúa colocando el mortero hasta cubrir completamente la superficie industrial.",

        "6. Base de mortero terminada. La superficie queda compacta, uniforme y preparada para recibir el acabado autonivelante.",

        "7. Aplicación del recubrimiento autonivelante. Se distribuye la resina epóxica para obtener una superficie lisa y continua.",

        "8. Nivelación del recubrimiento epóxico. El material se extiende uniformemente para lograr un acabado brillante y sin uniones.",

        "9. Primera vista del acabado final. El piso presenta una superficie continua, lisa, brillante y de fácil limpieza.",

        "10. Brillo y uniformidad del piso. Se aprecia el reflejo del acabado autonivelante aplicado sobre toda el área.",

        "11. Cobertura completa del área. El sistema epóxico forma una superficie resistente y uniforme para uso industrial.",

        "12. Resultado final. Mortero epóxico con acabado autonivelante completamente terminado, resistente, brillante y de excelente presentación."
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