import { signOut, showPost, readPost} from './firebase.js';

export const home = () => {
    const viewHome = `
    <header class="menu-arriba color">
        <img class="" src="imgs/Logo-P.png" alt="home">
    </header>
    <section>
      <form action="">
        <textarea name="" id="post" placeholder="Escribe aquí..." cols="80" rows="8"></textarea>
        <select class="button button1">
          <option value="amigos"><img src="imgs/amigos-s.png" alt="iconA">Amigos</option>
          <option value="privado"><img src="" alt="">Privado</option>
        </select>
        <button id="button-post" class="button button2">Publicar</button>
      </form>
        <div id="table">
          <button type="button" id="delete">Eliminar</button>
          <button type="button" id="edit">Editar</button>
        </div>
    <footer id="menu-abajo" class="menu-abajo color">
      <img class="icon-signout" src="imgs/publico.png" alt="privado">
      <img  src="imgs/amigos.png" alt="público">
      <a href="#/signIn"><img id="sign-out" src="imgs/salir.png" alt="salir"></a>
    </footer>
    </section>
    `;
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
        readPost();
     });
     divElem
     .querySelector('#delete')
     .addEventListener('click', () => { 
      
    });
    divElem
      .querySelector('#edit')
      .addEventListener('click', () => { 
       console.log('no se si funciono :S')     
     });
    
    return divElem; 
   }; 
