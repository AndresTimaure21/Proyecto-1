 // Obtener referencia al botón
const botonModoNocturno = document.getElementById('modoNocturno');

    // Cambiar la posición del botón
botonModoNocturno.style.position = "fixed";
botonModoNocturno.style.top = "50%";
botonModoNocturno.style.left = "80%";


// Obtener referencia al elemento body
  const body = document.body;

// Agregar evento de clic al botón
 botonModoNocturno.addEventListener('click', function() {
    // Alternar la clase modo-nocturno en el elemento body
     body.classList.toggle('modo-nocturno');
});