export { objTemp };
import {btnLogIn, btnRegister, btnGoogle} from 'main.js';
const objTemp = {
  signIn: () => {
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

    const btnSignIn = element.querySelector('#btn-log-in');
    btnSignIn.addEventListener('click', () => {
      event.preventDefault();
      btnLogIn();
    })
    const btnSignInGoogle = element.querySelector('#google-button');
    btnSignInGoogle.addEventListener('click', () => {
      event.preventDefault();
      btnGoogle();
    })
    return element;
  },
  signUp: () => {
    const template = `<form class="register">
                      <input class= "space" id="usser" type="text" placeholder="Elige tu usuario" required>
                      <input class= "space" id="email" type="email" placeholder="Ingresa e-mail" required>
                      <input class= "space" id="password" type="password" placeholder="Ingresa contraseña" required>
                      <button class="button space" id= "btn-sign-up">Registrar</button>
                      </form>`
    const element2 = document.createElement('div');
    element2.innerHTML = template;

    const btnSignUp = element2.querySelector('#btn-sign-up');

    btnSignUp.addEventListener('click', ()=>{
      event.preventDefault();
      btnRegister();
    });

  },
  home: () => {
    const template = `<h1>Bienvenida babyyyyy!!!!!!!1111</h1>
                      <button class="button space" id= "btn-sign-out">Registrar</button>`
    const element3 = document.createElement('div');
    element3.innerHTML = template;

    const btnSignOut =element3.querySelector('#btn-sign-out');
    btnSignOut.addEventListener('click', );

  },
  different: () => {
    const template = `<div id="message">
                      <h2>404</h2>
                      <h1>Página no encontrada</h1>
                      <p>El archivo especificado no se encontró en este sitio web. Por favor, compruebe la URL para errores y vuelva a intentarlo.</p>
                      </div>`
  }
};

