// Este es el punto de entrada de tu aplicacion

// import { myFunction } from './lib/index.js';

// myFunction();

const btnRegistro = document.getElementById('registrarse'); 

btnRegistro.addEventListener('click', () => {
 const email = document.getElementById('email').value;
 const password = document.getElementById('password').value;

 firebase.auth().createUserWithEmailAndPassword(email, password)
 .catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    // ...
  });
  // document.getElementById('iniciar-sesion').innerHTML = `
  // <h3>Iniciar Sesión</h3>
  // <form action="">
  //     <input id="email2" type="email" placeholder="Ingresa e-mail">
  //     <input id="password2" type="password" placeholder="Ingresa contraseña">
  //     <input id= "iniciar-sesion" type="button" value="Iniciar Sesión">
  // </form>
  // `
}); 

const btnInicio = document.getElementById('iniciar-sesion'); 

btnInicio.addEventListener('click', () => {
  const email2 = document.getElementById('email2').value;
  const password2 = document.getElementById('password2').value;

  firebase.auth().signInWithEmailAndPassword(email2, password2).
  catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    console.log(errorCode);
    console.log(errorMessage);
    // ...
  });
}); 

function observador() {
  firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      console.log('Existe usuario activo');
      aparece()
      // User is signed in.
      var displayName = user.displayName;
      var email = user.email;
      console.log(email); 
      var emailVerified = user.emailVerified;
      var photoURL = user.photoURL;
      var isAnonymous = user.isAnonymous;
      var uid = user.uid;
      var providerData = user.providerData;
      // ...
    } else {
      // User is signed out.
      console.log('No existe usuario activo'); 
      // ...
    }
  });
}; 
observador(); 

function aparece() {
  const contenido = document.getElementById('contenido');
  contenido.innerHTML = `
  <p>¡Bienvenido!</p>
  <button onclick="cerrar()">Cerrar Sesión</button>
  `; 
}

const cerrar = () => {
  firebase.auth().signOut()
  .then(function(){
    console.log('Saliendo...')
  })
  .catch(function(error){
    console.log(error)
  })
  contenido.style.display = 'none'
}; 
 
 