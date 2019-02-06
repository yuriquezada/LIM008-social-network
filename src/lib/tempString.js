import { logIn, signOut, googleLogIn, signUp } from './firebase.js';
export const inicio = () => {
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
       divElem.style.display='none';     
        document.getElementById('container').style.display='block';
     });
 
     const contenido = document.getElementById('contenido');
     contenido.appendChild(divElem); 
   }; 

export const pageSignIn = () => {
    const template = `<form class="register">
                      <img src="imgs/logo.png" alt="pets">
                      <input class= "space" id="email2" type="email" placeholder="Ingresa e-mail">
                      <input class= "space" id="password2" type="password" placeholder="Ingresa contraseña">
                      <div id="message"><P>Usuario o contraseña incorrectos</P></div>
                      <button class="button space" id= "btn-log-in">Iniciar sesión</button>
                      <button class="button google space" id= "google-button"><img src="imgs/google-logo.png" alt="Google">Iniciar sesión con Google</button>
                      <img src="imgs/pets.png" alt="pets">
                      <p>¿No tienes cuenta? <a href="#/registrate">Regístrate</a></p>  
                      </form>`
     const element = document.createElement('div');
     element.innerHTML = template;
     element 
     .querySelector('#btn-log-in')
     .addEventListener('click', event => {
           event.preventDefault();
          const email2 = document.querySelector("#email2").value;
          const password2 = document.querySelector("#password2").value;
            logIn(email2, password2); 
            // 
         });
    element 
    .querySelector('#google-button')
    .addEventListener('click', event => {
        event.preventDefault();
        googleLogIn();
        });

     const container = document.getElementById('container');
     container.appendChild(element); 

    // const btnSignIn = element.querySelector('#btn-log-in');
    // btnSignIn.addEventListener('click', () => {
    //   event.preventDefault();
    //   btnLogIn();
    // })
    // const btnSignInGoogle = element.querySelector('#google-button');
    // btnSignInGoogle.addEventListener('click', () => {
    //   event.preventDefault();
    //   btnGoogle();
    // })
    //return template;
  };

export const pageSignUp = () => {
    const template = `<form class="register">
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
         });

    // const btnSignUp = element2.querySelector('#btn-sign-up');

    // btnSignUp.addEventListener('click', () => {
    //   event.preventDefault();
    //   btnRegister();
    // });

    const container = document.getElementById('container');
     container.appendChild(element2);
};
