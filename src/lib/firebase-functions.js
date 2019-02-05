export const signIn = (email, password) => {

  firebase.auth().signInWithEmailAndPassword(email, password)
    .catch(function (error) {
      // Handle Errors here.
      document.getElementById("message").style.display = "block";
      // alert("Usuario o contraseña incorrectos");
      let errorCode = error.code;
      let errorMessage = error.message;
      alert('Error: ' + errorCode);
      alert('Error: ' + errorMessage);
      // window.location.hash='#/home';
    });
}

export const checkIn = () => {
  firebase.auth().onAuthStateChanged(function (user) {
    if (user) {
      // User is signed in.
      // var displayName = user.displayName;
      // var email = user.email;
      // var emailVerified = user.emailVerified;
      // var photoURL = user.photoURL;
      // var isAnonymous = user.isAnonymous;
      // var uid = user.uid;
      // var providerData = user.providerData;
      const user = firebase.auth().currentUser;
      if (user !== null) {
        const email = user.email;
        window.location.hash = '#/home';
        console.log('sesion iniciada');
      };
    } else {
      console.log('usuario no registrado');
    }
  });
}

export const signUp = (email, password) => {
  // event.preventDefault();
  firebase.auth().createUserWithEmailAndPassword(email, password)
    .then(() => {
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

  user.sendEmailVerification().then(function () {
    console.log("enviando correo");
    // Email sent.
  }).catch(function (error) {
    // An error happened.
    console.log(error);
  });
}

export const signOut = () => {
  console.log("saliendo")
    firebase.auth().signOut()
  } 

export const signInGoogle = () => {
    var provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(provider).then(function(result) {
      // This gives you a Google Access Token. You can use it to access the Google API.
      var token = result.credential.accessToken;
      // The signed-in user info.
      var user = result.user;
      // ...
      console.log('ingreso con google')
      document.getElementById('contenido').innerHTML = 'Ingreso con Google';
    }).catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      // The email of the user's account used.
      var email = error.email;
      // The firebase.auth.AuthCredential type that was used.
      var credential = error.credential;
      // ...
      console.log('no ingreso')
    });
  }