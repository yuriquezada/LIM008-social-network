import { home } from './tempString.js';

export const logIn = (email, password, closeConteiner) => {
  firebase.auth().signInWithEmailAndPassword(email, password)
    .then(() => {
      //home();
    })
    .catch(function (error) {
      // Handle Errors here.
      document.querySelector("#message").style.display = "block";
      // alert("Usuario o contraseña incorrectos");
      let errorCode = error.code;
      let errorMessage = error.message;
      console.log(errorCode)
      console.log(errorMessage)
      // ...
    });
}

export const signUp = (email, password) => {
  // event.preventDefault();
  firebase.auth().createUserWithEmailAndPassword(email, password)
    .then(() => {
      check();
      home();

    })
    .catch(function (error) {
      // Handle Errors here.
      document.getElementById("message2").style.display = "block";
      var errorCode = error.code;
      var errorMessage = error.message;
      // ...
    });
}

const check = () => {
  var user = firebase.auth().currentUser;

  user.sendEmailVerification().then(function () {
    console.log("enviando correo");
    // Email sent.
  }).catch(function (error) {
    // An error happened.
    console.log(error);
  });
}

export const signOut = () => {
  console.log("saliendo...")
  firebase.auth().signOut()
}

export const googleLogIn = () => {
  var provider = new firebase.auth.GoogleAuthProvider();
  firebase.auth().signInWithPopup(provider).then(function (result) {
    // This gives you a Google Access Token. You can use it to access the Google API.
    var token = result.credential.accessToken;
    // The signed-in user info.
    var user = result.user;
    // ...
    console.log('ingreso con google')
    home();
    document.getElementById('container').style.display = 'none';
  }).catch(function (error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    // The email of the user's account used.
    var email = error.email;
    // The firebase.auth.AuthCredential type that was used.
    var credential = error.credential;
    // ...
    console.log('no ingreso con google')
  });
}
