export const signUp = (email, password) => {
    // event.preventDefault();
    firebase.auth().createUserWithEmailAndPassword(email, password)
    .catch(function (error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      // ...
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
