export const logIn = (email, password) => {

    firebase.auth().signInWithEmailAndPassword(email, password)
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

export const signOut = () => {
  console.log("saliendo")
    firebase.auth().signOut()
  } 
export const observer = () => {
    firebase.auth().onAuthStateChanged(function(user) {
        if (user) {
            console.log("existe");
            showDocument();
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
  const showDocument = () => {
    const contenido = document.getElementById("contenido");
          contenido.innerHTML=`
          <p>Bienvenido</p>
          <input id= "sign-out" type="button" value="Cerrar Sesión">`;
      }
 