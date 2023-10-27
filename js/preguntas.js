/**
 * funcion del evento que realiza el boton
 * resibe como parametro el id del <div></div> correspondiente
 * evalua el estado de su elemento
 */
function myFunction(idTexto){
const texto = document.getElementById(idTexto);

  if (texto.style.display === 'none') {
    texto.style.display = 'block'; // Mostrar el elemento
  } else {
    texto.style.display = 'none'; // Ocultar el elemento
  }   
} 
