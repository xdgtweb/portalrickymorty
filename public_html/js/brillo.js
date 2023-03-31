function main()
{
    porDefecto();
    document.getElementById("rango").oninput = manejadorRango; 
}

function manejadorRango()
{
    let div = document.getElementById("cajaBrillo");
    
    div.style.opacity = this.value / 100;
}

function porDefecto()
{
    let div = document.getElementById("cajaBrillo");
    div.style.opacity = 1;
}

window.onload = main();