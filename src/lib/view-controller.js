<<<<<<< HEAD
import { logIn, deletePost, signUp, checkEmail, signOut, showPost, googleLogIn, editPost, likePost } from "./controller.js";
=======
<<<<<<< HEAD
import {deletePost } from "../firebase.js"
export const deleteNote = (objNote) =>
deletePost(objNote.id)
=======
import { logIn, deletePost, signUp, checkEmail, signOut, showPost, googleLogIn } from "./controller.js";
>>>>>>> a4bd5666d1a32046e8822e617ae0b6a0b2eef549
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
    const textArea = document.querySelector('#post');
    let like = 0;
        showPost(textArea.value, like)
}

export const deleteOnClickPost = (objNote) => {
    if (confirm('De verdad quieres eliminarme?'))
    return deletePost(objNote.id)
}

export const editOnClickPost = (objNote, post) =>
editPost(objNote, post)

export const signOutOnClick = () => {
    signOut()
        .then(() => changeHash('/signin'))
}
export const submitLike = (objNote, reaction) =>
    likePost(objNote.id, reaction)

>>>>>>> 4bcdf4163204e3badc7653a6ed5b541701a65cf5
