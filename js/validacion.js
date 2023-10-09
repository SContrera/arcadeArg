let formulario = document.getElementsByName('formulario')[0],
elementos = formulario.elements,
boton = document.getElementById('btn');

let validarNombre = function(e){
if (formulario.nombre.value == 0){
    alert("Complete el nombre");
    e.preventDefault();

}
};
let validarApellido = function(e){
    if (formulario.apellido.value == 0){
        alert("Complete el apellido");
        e.preventDefault();
    
    }
    };
let validarEmail = function(e){
        if (formulario.email.value == 0){
            alert("Complete el email");
            e.preventDefault();
         
        }
        };

let validarMensaje = function(e){
            if (formulario.mensaje.value == 0){
                alert("Complete el campo mensaje");
                e.preventDefault();
            
            }
            };
                       
let validarRadio = function(e){
if (formulario.conoce[0].checked == true || 
    formulario.conoce[1].checked == true){
                } else{
                    alert("Complete cómo nos conoció");
                    e.preventDefault();
                }
            };

let validar = function(e){
validarNombre(e);
validarApellido(e);
validarEmail(e);
validarMensaje(e);
validarRadio(e);

};
formulario.addEventListener("submit", validar);


let words = document.getElementsByClassName('word');
let wordArray = [];
let currentWord = 0;

words[currentWord].style.opacity = 1;
for (let i = 0; i < words.length; i++) {
  splitLetters(words[i]);
}

function changeWord() {
  let cw = wordArray[currentWord];
  let nw = currentWord == words.length-1 ? wordArray[0] : wordArray[currentWord+1];
  for (let i = 0; i < cw.length; i++) {
    animateLetterOut(cw, i);
  }
  
  for (let i = 0; i < nw.length; i++) {
    nw[i].className = 'letter behind';
    nw[0].parentElement.style.opacity = 1;
    animateLetterIn(nw, i);
  }
  
  currentWord = (currentWord == wordArray.length-1) ? 0 : currentWord+1;
}

function animateLetterOut(cw, i) {
  setTimeout(function() {
		cw[i].className = 'letter out';
  }, i*80);
}

function animateLetterIn(nw, i) {
  setTimeout(function() {
		nw[i].className = 'letter in';
  }, 340+(i*80));
}

function splitLetters(word) {
  let content = word.innerHTML;
  word.innerHTML = '';
  let letters = [];
  for (let i = 0; i < content.length; i++) {
    let letter = document.createElement('h4');
    letter.className = 'letter';
    letter.innerHTML = content.charAt(i);
    word.appendChild(letter);
    letters.push(letter);
  }
  
  wordArray.push(letters);
}

changeWord();
setInterval(changeWord, 4000);
