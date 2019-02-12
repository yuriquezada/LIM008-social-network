import { changeHash } from "../route.js"
import {deletePost } from "../firebase.js"
import { logIn } from "./firebase.js";

export const signInOnSubmit = () => {
    const email = document.querySelector('#email2').value;
    const password = document.querySelector('#password2').value; 
    logIn(email, password)
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

export const deleteNote = (objNote) =>
deletePost(objNote.id)