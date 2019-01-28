// Este es el punto de entrada de tu aplicacion

// import { myFunction } from './lib/index.js';

// myFunction();

const btnRegistro = document.getElementById('btn-registro'); 

btnRegistro.addEventListener('click', () =>{
 const email = document.getElementById('email').value;
 const password = document.getElementById('password').value;
  console.log(email); 
  console.log(password)

 firebase.auth().createUserWithEmailAndPassword(email, password)
 .catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    // ...
    console.log(errorCode); 
    console.log(errorMessage);
  });
}); 