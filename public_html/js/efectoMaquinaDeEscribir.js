const letras = document.querySelectorAll('.letraFooter');

  letras.forEach(letra => {
        const contenido = letra.innerHTML;
        let nuevoContenido = '';
        for (let i = 0; i < contenido.length; i++) {
const caracter = contenido[i];
        nuevoContenido += `<span style="display: inline-block; opacity: 0;" class="caracter">${caracter}</span>`;
}

letra.innerHTML = nuevoContenido;
        const caracteres = letra.querySelectorAll('.caracter');
        let delay = 100;
        caracteres.forEach(caracter => {
        setTimeout(() => {
        caracter.style.opacity = '1';
        }, delay);
                delay += 1000;
        });
  });
