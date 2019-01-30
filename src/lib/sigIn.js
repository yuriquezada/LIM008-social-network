export const signUp = (email, password) => {
    // event.preventDefault();
    firebase.auth().createUserWithEmailAndPassword(email, password)
    .then( () => {
      check();
    })
    .catch(function (error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      // ...
    });
  
  }
const check = () => {
  var user = firebase.auth().currentUser;

user.sendEmailVerification().then(function() {
  console.log("envindo correo");
  // Email sent.
}).catch(function(error) {
  // An error happened.
  console.log(error);
});
}


// export const logIn = (email, password) => {

//     firebase.auth().signInWithEmailAndPassword(email, password)
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
