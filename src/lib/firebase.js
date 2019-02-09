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

//Publicar - eliminar editar
  
  // let db = firebase.firestore();

  // const buttonPost = document.getElementById("button-post");
  // buttonPost.addEventListener('click', () => {
  //     showPost();
  // })
  
  // //Agregar documentos
  // const showPost = () =>{
  //     const post = document.getElementById("post").value;
  //     db.collection("users").add({
  //         first: post
  //     })
  //     .then(function(docRef) {
  //         console.log("Document written with ID: ", docRef.id);
  //         document.getElementById("post").value="";
  //     })
  //     .catch(function(error) {
  //         console.error("Error adding document: ", error);
  //     });
  // }
  // //leer documentos
  
  // db.collection("users").onSnapshot((querySnapshot) => {
  //     const table = document.getElementById("table");
  //     table.innerHTML="";
  //     querySnapshot.forEach((doc) => {
  //         console.log(`${doc.id} => ${doc.data().first}`);
  //         table.innerHTML+= `
  //         <tr>
  //         <th>${doc.id}</th>
  //         <td>${doc.data().first}</td>
  //         <td><button type="button" class="button button2" onClick="eliminar('${doc.id}')">Eliminar</button></td>
  //         <td><button type="button" class="button button2" onClick="editar('${doc.id}', '${doc.data().first}')">Editar</button></td>
  //       </tr>`
  //     });
  // });
  // function eliminar(id) {
  // //Borrar documentos
  // db.collection("users").doc(id).delete().then(function() {
  //     console.log("Document successfully deleted!");
  // }).catch(function(error) {
  //     console.error("Error removing document: ", error);
  // });
  // }
