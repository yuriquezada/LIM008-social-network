<<<<<<< HEAD
import { submitPost, deleteOnClickPost, editOnClickPost, submitLike} from './view-controller.js';
=======
<<<<<<< HEAD
import { signOut, showPost, readPost} from './firebase.js';

const itemNote = (objNote) => {
  const liElement = document.createElement('li');
  liElement.classList.add('mdl-list__item');
  liElement.innerHTML = `
    <span class="mdl-list__item-primary-content">
      <span>${objNote.title}</span>
    </span>
    <a class="mdl-list__item-secondary-action" id="btn-deleted-${objNote.id}">
      <i class="material-icons">delete</i>
    </a>
  `;
  // agregando evento de click al btn eliminar una nota
  liElement.querySelector(`#btn-deleted-${objNote.id}`)
    .addEventListener('click', () => deleteNoteOnClick(objNote));
  return liElement;
}





export const home = (note) => {
    const viewHome = `
    <header class="menu-arriba color">
        <img class="" src="imgs/Logo-P.png" alt="home">
=======
import { submitPost, deleteOnClickPost} from './view-controller.js';
>>>>>>> a4bd5666d1a32046e8822e617ae0b6a0b2eef549
import { signOutOnClick } from './view-controller.js';

const itemPost = (objPost) => {
  const liElem = document.createElement('li');
  liElem.innerHTML = `
  <span>
    <textarea id="to-edit-${objPost.id}" disabled>${objPost.comment}</textarea>
  </span>
  <label id="likes">${objPost.reaction}</label>
  <button id ="btn-like-${objPost.id}">Me gusta</button>
  <button id ="btn-delete-${objPost.id}">Eliminar</button>
  <button id ="btn-edit-${objPost.id}">Editar</button>
  <button id ="btn-save-edit" class= "save-post">Guardar</button>
  `;
  liElem.querySelector(`#btn-delete-${objPost.id}`)
  .addEventListener( 'click', () => deleteOnClickPost(objPost));
  const editBtn = liElem.querySelector(`#btn-edit-${objPost.id}`);
  const saveEdit = liElem.querySelector('#btn-save-edit');
  const btnLike = liElem.querySelector(`#btn-like-${objPost.id}`);
  const text = liElem.querySelector(`#to-edit-${objPost.id}`);
  editBtn.addEventListener( 'click', () => {
   text.disabled = false;
   liElem.querySelector(`#btn-save-edit`).style.display = 'block';
  });
  saveEdit.addEventListener( 'click', () => {
    text.disabled = true;
    editOnClickPost(objPost.id, text.value);
    liElem.querySelector(`#btn-save-edit`).style.display = 'none'; 
  });
  btnLike.addEventListener( 'click', () => {
    submitLike(objPost, objPost.reaction += 1 )
  } )
  return liElem;
}

export const home = (posts) => {
    const divElem = document.createElement('div');
    const viewHome = `
    <header class="menu-arriba color">
        <img class="" src="imgs/Logo.png" alt="home">
>>>>>>> 4bcdf4163204e3badc7653a6ed5b541701a65cf5
    </header>
    <section>
      <form action="">
        <textarea name="" id="post" placeholder="Escribe aquí..." cols="80" rows="8"></textarea>
        <select class="button button1">
          <option id="" value="publico">Público</option>
          <option id="" value="privado">Privado</option>
        </select>
        <button id="button-post" class="button button2">Publicar</button>
      </form>
<<<<<<< HEAD
        <div id="table">
          ${readPost()}
        </div>
=======
        <section>
          <ul id="post-list">
          </ul>
        </section>
>>>>>>> 4bcdf4163204e3badc7653a6ed5b541701a65cf5
    </section>
    <footer id="menu-abajo" class="menu-abajo color">
      <img class="icon-signout" src="imgs/publico.png" alt="privado">
      <img  src="imgs/amigos.png" alt="público">
      <a href="#/signIn"><img id="sign-out" src="imgs/salir.png" alt="salir"></a>
    </footer>
    `;
<<<<<<< HEAD
    const divElem = document.createElement('div');
    divElem.setAttribute('id', 'muro');
    divElem.innerHTML = viewHome;
    divElem
     .querySelector('#sign-out')
     .addEventListener('click', () => { 
       signOut();     
     });
    divElem
      .querySelector('#button-post')
      .addEventListener('click', () => { 
        showPost(); 
     });
    return divElem; 
   }; 
=======
    // divElem.setAttribute('id', 'muro');
    divElem.innerHTML = viewHome;
    const buttonaddPost = divElem.querySelector('#button-post');
    const buttonSignOut = divElem.querySelector('#sign-out');
    const ul = divElem.querySelector('#post-list');
    posts.forEach( post => {
      ul.appendChild( itemPost(post));
    });
    buttonaddPost.addEventListener( 'click', e =>{ 
      e.preventDefault();
     submitPost()});
    buttonSignOut.addEventListener( 'click', e =>{ 
      e.preventDefault();
    signOutOnClick()});
    return divElem;
   }
>>>>>>> 4bcdf4163204e3badc7653a6ed5b541701a65cf5
