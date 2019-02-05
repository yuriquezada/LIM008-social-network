// import { googleLogIn } from './lib/firebase.js';
import { pageSignIn, pageSignUp  } from './lib/tempString.js';

pageSignIn();
pageSignUp(); 


// const btnSigUp = document.getElementById("btn-sign-up");
// btnSigUp.addEventListener('click', event => {
//   event.preventDefault();
//   const email = document.getElementById("email").value;
//   const password = document.getElementById("password").value;
//   signUp(email, password);
// })

// const btnLogIn = document.getElementById("btn-log-up");
// btnLogIn.addEventListener('click', event => {
//   event.preventDefault();
//  const email2 = document.getElementById("email2").value;
//  const password2 = document.getElementById("password2").value;
//    logIn(email2, password2); 
//    document.getElementById('container').style.display='none';
// })

// const btnGoogle = document.getElementById("google-button");
//  btnGoogle.addEventListener('click', event => {
//    event.preventDefault();
//    googleLogIn();
//    document.getElementById('container').style.display='none';
//  });

// const btnLogOut = document.querySelectorAll('.btn-sign-out');
//  btnLogOut.addEventListener('click', event => {
//   event.preventDefault();
//    signOut();
//  })

// observer();



// Ordenando código
// const signIn = () => {
//   const email = document.getElementById("email").value;
//   const password = document.getElementById("password").value;
//         firebase.auth().createUserWithEmailAndPassword(email, password)
//         .catch(function(error) {
//             // Handle Errors here.
//             var errorCode = error.code;
//             var errorMessage = error.message;
//             // ...
//         });
//   }

//   const logIn = () => {
//     const email2 = document.getElementById("email2").value;
//     const password2 = document.getElementById("password2").value;
//     firebase.auth().signInWithEmailAndPassword(email2, password2)
//     .catch(function(error) {
//         // Handle Errors here.
//         var errorCode = error.code;
//         var errorMessage = error.message;
//         // ...
//       });
//       const contenido = document.getElementById("contenido");
//       contenido.innerHTML=`
//       <p>Bienvenido</p>
//       <input id= "cerrando" type="submit" value="Cerrar Sesión">`;
//   }
  
//   const btnSignIn = document.getElementById("registrarse");
//    btnSignIn.addEventListener('click', () => {
//     signIn();
//     });

//   const btnLogIn = document.getElementById("iniciando");
//     btnLogIn.addEventListener('click', () => {
//     logIn();
//     });
  
  
  // const cerrar = () =>{
  //     firebase.auth().signOut()
  //     .then( function(){
  //         console.log("Sliendo...")
  //     })
  //     .catch(function(error){
  //         console.log(error)
  //     })
  // }

  // const signOut = () => {
  //   firebase.auth().signOut()
  //     .then(element => {
  //       location.href('../index.html');
  //     }).catch(error => {
  //       console.log('Error al cerrar sesión');
  //     });
  // }

  // const cerrando = document.getElementById("cerrando");
  // cerrando.addEventListener('click', () => {
  //     cerrar();
  //     });

  // const observador = () => {
  //   firebase.auth().onAuthStateChanged(function(user) {
  //       if (user) {
  //           console.log("existe");
  //           iniciando;
  //           //Poner aquí la variable que contega el html
  //         // User is signed in.
  //         var displayName = user.displayName;
  //         var email = user.email;
  //         var emailVerified = user.emailVerified;
  //         var photoURL = user.photoURL;
  //         var isAnonymous = user.isAnonymous;
  //         var uid = user.uid;
  //         var providerData = user.providerData;
  //         // ...
  //       } else {
  //         // User is signed out.
  //         // ...
  //       }
  //     });
  // }
  // observador();

