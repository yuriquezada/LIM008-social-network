import { logIn, googleLogIn } from './firebase.js';
import { changeHash } from '../route.js';

export const pageSignIn = () => {
    const template = `<form class="login">
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
                            <p>¿No tienes cuenta? <a id="registrate" href="#">Regístrate</a></p>  
                        </div>
                        </section>
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
  };
