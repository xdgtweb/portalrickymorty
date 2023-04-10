const cajaBrillo = document.querySelector('#cajaBrillo');
const contenedor = document.querySelector('.contenedor');
const progreso = document.querySelector('.progreso');

const obtenerProgreso = () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const scrollHeight = cajaBrillo.scrollHeight - window.innerHeight;
    const scrolled = scrollTop / scrollHeight * 100;
    return Math.round(scrolled);
};

const actualizarProgreso = () => {
    const scrolled = obtenerProgreso();
    progreso.style.width = `${scrolled}%`;
};

window.addEventListener('scroll', () => {
    requestAnimationFrame(actualizarProgreso);
});

window.addEventListener('resize', () => {
    requestAnimationFrame(actualizarProgreso);
});