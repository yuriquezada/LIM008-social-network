<<<<<<< HEAD
import { logIn, googleLogIn } from './firebase.js';
import { changeHash } from '../route.js';

export const pageSignIn = () => {
    const template = `<form class="register">
                      <img src="imgs/logo.png" alt="pets">
                      <input class= "space" id="email2" type="email" placeholder="Ingresa e-mail" required>
                      <input class= "space" id="password2" type="password" placeholder="Ingresa contraseña" required>
                      <div id="message"><P>Usuario o contraseña incorrectos</P></div>
                      <button class="button space" id= "btn-log-in">Iniciar sesión</button>
                      <button class="button google space" id= "google-button"><img src="imgs/google-logo.png" alt="Google">Iniciar sesión con Google</button>
                      <img src="imgs/pets.png" alt="pets">
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

    //  const container = document.getElementById('container');
    //  container.appendChild(element); 
     return element; 
=======
import { signInOnSubmit, signInWithGoogle } from './view-controller.js';

export const pageSignIn = () => {
    const formElem = document.createElement('form');
    const formSignIn = `
                        <img class="logo" src="imgs/Logo.png" alt="pets">
                        <section class="inputs-buttons-img">
                        <div class="inputs-buttons">
                            <input class= "space" id="email2" type="email" placeholder="Correo electrónico" required>
                            <input class= "space" id="password2" type="password" placeholder="Contraseña" required>
                            <div id="message"><P>Usuario o contraseña incorrectos</P></div>
                            <button class="button space" id= "btn-log-in">Iniciar sesión</button>
                            <button class="button google space" id= "google-button"><img src="imgs/google-logo.png" alt="Google">Iniciar sesión con Google</button>
                        </div>
                        <div class="pets-signup">
                            <img class="pets" src="imgs/pets.png" alt="pets">
                            <p>¿No tienes cuenta? <a id="registrate" href="#/signUp">Regístrate</a></p>  
                        </div>
                        </section>
                    `
    
    formElem.classList.add('login')
    formElem.innerHTML = formSignIn;
    const btnSignIn = formElem.querySelector('#btn-log-in');
    const btnSignInWithGoogle = formElem.querySelector('#google-button');
    btnSignIn.addEventListener( 'click', e => {
        e.preventDefault();
        signInOnSubmit()});
    btnSignInWithGoogle.addEventListener( 'click', e => {
        e.preventDefault();
        signInWithGoogle()});
     return formElem; 
>>>>>>> 4bcdf4163204e3badc7653a6ed5b541701a65cf5
  };
