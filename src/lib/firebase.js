export const logIn = (email, password) => {

    firebase.auth().signInWithEmailAndPassword(email, password)
    // .then(() => {
    //   inicio(); 
    // })
    .catch(function(error) {
        // Handle Errors here.
        let errorCode = error.code;
        let errorMessage = error.message;
        // ...
      });
  }

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

export const observer = () => {
    firebase.auth().onAuthStateChanged(function(user) {
        if (user) {
            console.log("existe");
            //Poner aquí la variable que contega el html
          // User is signed in.
          var displayName = user.displayName;
          var email = user.email;
          var emailVerified = user.emailVerified;
          var photoURL = user.photoURL;
          var isAnonymous = user.isAnonymous;
          var uid = user.uid;
          var providerData = user.providerData;
          // ...
        } else {
          console.log("no existe usuario activo");
          // User is signed out.
          // ...
        }
      });
  }

export const googleLogIn = () => {
  var provider = new firebase.auth.GoogleAuthProvider();
  firebase.auth().signInWithPopup(provider).
  then(function(result) {
    // This gives you a Google Access Token. You can use it to access the Google API.
    var token = result.credential.accessToken;
    // The signed-in user info.
    var user = result.user;
    // ...
    console.log('ingreso con google')
    // inicio();
  }).catch(function(error) {
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

export const signOut = () => {
  firebase.auth().signOut()
  .then( function() {
    console.log('Saliendo...')
  })
  .catch( function(error) {
    console.log(error)
  })
}