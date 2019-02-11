import { changeHash } from "../route.js";

export const logIn = (email, password) => {

    firebase.auth().signInWithEmailAndPassword(email, password)
    .then(() => {
      changeHash('/home')
     })
    .catch(function(error) {
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
    .then( () => {
      check();
      changeHash('/home') 
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

user.sendEmailVerification().then(function() {
  console.log("enviando correo");
  // Email sent.
}).catch(function(error) {
  // An error happened.
  console.log(error);
});
}

export const signOut = () => {
  console.log("saliendo...")
    firebase.auth().signOut()
    changeHash('/signin')
  } 

export const googleLogIn = () => {
    var provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(provider).then(function(result) {
      // This gives you a Google Access Token. You can use it to access the Google API.
      var token = result.credential.accessToken;
      // The signed-in user info.
      var user = result.user;
      // ...
      console.log('ingreso con google')
      changeHash('/home')
      //document.getElementById('container').style.display='none';
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

  export const showPost = () =>{
    const post = document.getElementById("post").value;
    firebase.firestore().collection("users").add({
        first: post
    })
    .then(function(docRef) {
        console.log("Document written with ID: ", docRef.id);
        document.getElementById("post").value="";
    })
    .catch(function(error) {
        console.error("Error adding document: ", error);
    });
}

// export const observer = () => {
//     firebase.auth().onAuthStateChanged(function(user) {
//         if (user) {
//             console.log("existe");
//             showDocument();
//             //Poner aquí la variable que contega el html
//           // User is signed in.
//           var displayName = user.displayName;
//           var email = user.email;
//           var emailVerified = user.emailVerified;
//           var photoURL = user.photoURL;
//           var isAnonymous = user.isAnonymous;
//           var uid = user.uid;
//           var providerData = user.providerData;
//           // ...
//         } else {
//           console.log("no existe usuario activo");
//           // User is signed out.
//           // ...
//         }
//       });
//   }
  // const showDocument = () => {
  //   const contenido = document.getElementById("contenido");
  //         contenido.innerHTML=`
  //         <p>Bienvenido</p>
  //         <input id= "sign-out" type="button" value="Cerrar Sesión">`;
  //     }
 
