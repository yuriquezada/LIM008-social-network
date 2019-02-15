import { submitPost, deleteOnClickPost} from './view-controller.js';
import { signOutOnClick } from './view-controller.js';

const itemPost = (objPost) => {
  const liElem = document.createElement('li');
  liElem.innerHTML = `
  <span>
    <textarea disabled>${objPost.comment}</textarea>
  </span>
  <button id ="btn-delete-${objPost.id}">Eliminar</button>
  `;
  liElem.querySelector(`#btn-delete-${objPost.id}`)
  .addEventListener( 'click', () => deleteOnClickPost(objPost));
  return liElem;
}

export const home = (posts) => {
    const divElem = document.createElement('div');
    const viewHome = `
    <header class="menu-arriba color">
        <img class="" src="imgs/Logo.png" alt="home">
    </header>
    <section>
      <form action="">
        <textarea name="" id="post" placeholder="Escribe aquí..." cols="80" rows="8"></textarea>
        <select class="button button1">
          <option value="amigos">Amigos</option>
          <option value="privado">Privado</option>
        </select>
        <button id="button-post" class="button button2">Publicar</button>
      </form>
        <section>
          <ul id="post-list">
          </ul>
        </section>
    </section>
    <footer id="menu-abajo" class="menu-abajo color">
      <img class="icon-signout" src="imgs/publico.png" alt="privado">
      <img  src="imgs/amigos.png" alt="público">
      <a href="#/signIn"><img id="sign-out" src="imgs/salir.png" alt="salir"></a>
    </footer>
    `;
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
