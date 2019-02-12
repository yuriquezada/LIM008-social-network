import { changeHash } from "../route.js";
import { deletePost, logIn, check, signUp } from "./firebase.js";

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

export const signUpOnSubmit = () => {
    const email = document.querySelector("#email").value;
    const password = document.querySelector("#password").value;
    signUp(email, password)
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


export const deleteNote = (objNote) =>
deletePost(objNote.id)