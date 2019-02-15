import {deletePost } from "../firebase.js"
export const deleteNote = (objNote) =>
deletePost(objNote.id)