import { logIn, signOut, googleLogIn, signUp } from './firebase.js';
import { changeHash } from '../route.js';
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
      divElem.style.display = 'none';
      document.getElementById('container').style.display = 'block';
    });

  const contenido = document.getElementById('conteiner');
  contenido.appendChild(divElem);
};

export const pageSignIn = () => {
  const template = `<form class="login">
                      <img class="logo" src="imgs/logo.png" alt="pets">
                      <input class= "space" id="email2" type="email" placeholder="Correo electrónico" required>
                      <input class= "space" id="password2" type="password" placeholder="Contraseña" required>
                      <div id="message"><P>Usuario o contraseña incorrectos</P></div>
                      <button class="button space" id= "btn-log-in">Iniciar sesión</button>
                      <button class="button google space" id= "google-button"><img src="imgs/google-logo.png" alt="Google">Iniciar sesión con Google</button>
                      <img class="pets" src="imgs/pets.png" alt="pets">
                      <p>¿No tienes cuenta? <a id="registrate" href="#">Regístrate</a></p>  
                    </form>`
  const element = document.createElement('div');
  element.innerHTML = template;

  element
    .querySelector('#btn-log-in')
    .addEventListener('click', event => {
      event.preventDefault();
      const email2 = element.querySelector("#email2").value;
      const password2 = element.querySelector("#password2").value;
      logIn(email2, password2);
      changeHash('/home')
    });

  element
    .querySelector('#google-button')
    .addEventListener('click', event => {
      event.preventDefault();
      googleLogIn();
    });

  element
    .querySelector('#registrate')
    .addEventListener('click', event => {
      event.preventDefault();
      changeHash('/signup')
    });

  return element;
};

export const pageSignUp = () => {
  const template = `<form class="register">
                      <img src="imgs/mini-logo.png" alt="pets">
                      <h2>Crea tu cuenta</h2>
                      <input class= "space" id="usser" type="text" placeholder="Elige tu usuario" required>
                      <input class= "space" id="email" type="email" placeholder="Ingresa e-mail" required>
                      <input class= "space" id="password" type="password" placeholder="Ingresa contraseña" required>
                      <div id="message2"><P>No se ingreso usuario, e-mail o contraseña</P></div>
                      <button class="button space" id= "btn-sign-up">Registrar</button>
                    </form>`
  const element2 = document.createElement('div');
  element2.innerHTML = template;

  element2
    .querySelector('#btn-sign-up')
    .addEventListener('click', event => {
      event.preventDefault();
      const email = document.querySelector("#email").value;
      const password = document.querySelector("#password").value;
      signUp(email, password);
      // changeHash('/signin')
    });


  return element2;
};


///CREANDO TEMPLATE DE HOME
export const pageHome = () => {
  const template = `<head class="name-user">
                      <p>Holi</p>
                    </head>
                    `
  const element3 = document.createElement('div');
  element3.innerHTML = template;

  // element3
  //   .querySelector('#btn-sign-up')
  //   .addEventListener('click', event => {
  //     event.preventDefault();
  //     const email = document.querySelector("#email").value;
  //     const password = document.querySelector("#password").value;
  //     signUp(email, password);
  //     changeHash('/signin')

  //   });


  return element3;
};
