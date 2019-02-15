import { logIn, deletePost, signUp, checkEmail, signOut, showPost, googleLogIn } from "./controller.js";
import { changeHash } from "../route.js";

export const signInOnSubmit = () => {
    const email = document.querySelector('#email2').value;
    const password = document.querySelector('#password2').value;
    logIn(email, password)
        .then(() => changeHash('/home'))
        .catch(() => {document.querySelector("#message").style.display = "block";})
}

export const signInWithGoogle = () => {
    googleLogIn()
        .then(() => changeHash('/home'))
}
export const signUpOnSubmit = () => {
    const email = document.querySelector("#email").value;
    const password = document.querySelector("#password").value;
    signUp(email, password)
        .then(()=> {checkEmail(); changeHash('/home')} )
        .catch (() => {document.getElementById("message2").style.display = "block";})
}

export const submitPost = () => {
const textArea = document.getElementById('post');
    showPost(textArea.value)
}

export const deleteOnClickPost = (objNote) =>
deletePost(objNote.id)

export const signOutOnClick = () => {
    signOut()
        .then(() => changeHash('/signin'))
}

