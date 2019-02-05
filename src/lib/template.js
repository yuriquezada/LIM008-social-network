export { objTemp };
import { valuesSignIn, valuesSignUp, btnGoogle } from '../main';
const objTemp = {
  signIn: () => {
    const template = `
            <form class="sign-in">
                <img src="imgs/logo.png" alt="pets">
                <fieldset>
                    <input class="space" id="email-sign-in" type="email" placeholder="Ingresa e-mail">
                    <input class="space" id="password-sign-in" type="password" placeholder="Ingresa contraseña">
                </fieldset>
                <fieldset>
                    <button class="button space" id="btn-sign-in">Iniciar sesión</button>
                </fieldset>
                <fieldset>
                    <button class="button google space" id="btn-sign-in-google"><img src="imgs/google-logo.png" alt="Google">Iniciar
                        sesión
                        con Google</button>
                </fieldset>
                <img src="imgs/pets.png" alt="pets">
                <p>¿No tienes cuenta? <a href="#/signup">Regístrate</a></p>
            </form>`
    const element = document.createElement('div');
    element.innerHTML = template;

    const btnSignIn = element.querySelector('#btn-sign-in');
    btnSignIn.addEventListener('click', () => {
      event.preventDefault();
      valuesSignIn();
    })
    const btnSignInGoogle = element.querySelector('#btn-sign-in-google');
    btnSignInGoogle.addEventListener('click', () => {
      event.preventDefault();
      btnGoogle();
    })
    return element;
  },

  signUp: () => {
    const template = `<form class="sign-up">
                          <input class= "space" id="usser" type="text" placeholder="Elige tu usuario" required>
                          <input class= "space" id="email-sign-up" type="email" placeholder="Ingresa e-mail" required>
                          <input class= "space" id="password-sign-up" type="password" placeholder="Ingresa contraseña" required>
                          <button class="button space" id= "btn-sign-up">Registrar</button>
                          </form>`
    const element2 = document.createElement('div');
    element2.innerHTML = template;

    const btnSignUp = element2.querySelector('#btn-sign-up');

    btnSignUp.addEventListener('click', () => {
      event.preventDefault();
      valuesSignUp();
    });
  },
  home: () => {
    const template = `<h1>Bienvenida babyyyyy!!!!!!!1111</h1>
                        <button class="button space" id= "btn-sign-out">Registrar</button>`
    const element3 = document.createElement('div');
    element3.innerHTML = template;

    const btnSignOut = element3.querySelector('#btn-sign-out');
    btnSignOut.addEventListener('click');
  },
  different: () => {
    const template = `<div id="message">
                        <h2>404</h2>
                        <h1>Página no encontrada</h1>
                        <p>El archivo especificado no se encontró en este sitio web. Por favor, compruebe la URL para errores y vuelva a intentarlo.</p>
                        </div>`
  }
};



