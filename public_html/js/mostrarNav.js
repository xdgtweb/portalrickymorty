function mostrarCaja()
{
    var nav = document.querySelector('.centrado');
    nav.classList.add('mostrarCaja');
}

function ocultarCaja() {
    // Obtener el elemento de navegación y la caja flotante
    var nav = document.querySelector('.centrado');
    var cajaFlotante = document.querySelector('.mostrarCaja');

    // Si la caja flotante está visible
    if (cajaFlotante) {
        // Ocultar la caja flotante y eliminar la clase "mostrar-caja" del elemento de navegación
        cajaFlotante.classList.remove('mostrarCaja');
    }
}
