import { signOut } from './firebase.js';

export const home = () => {
    const bienvenido = `
    <h1>Bienvenido</h1>
    <button class='btn-signout'>Cerrar Sesión</button>
    `;
    const divElem = document.createElement('div');
    divElem.setAttribute('id', 'bienvenido'); 
    divElem.innerHTML = bienvenido;
    divElem
     .querySelector('.btn-signout')
     .addEventListener('click', () => { 
       signOut();     
      //  divElem.style.display='none';     
      //   document.getElementById('container').style.display='block';
     });
 
    //  const contenido = document.getElementById('conteiner');
    //  contenido.appendChild(divElem); 
    return divElem; 
   }; 
