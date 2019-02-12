import { signUpOnSubmit } from './view-controller.js';

export const pageSignUp = () => {
    const template = `<form class="register">
                      <img src="imgs/logo.png" alt="pets">
                      <input class= "space" id="usser" type="text" placeholder="Elige tu usuario" required>
                      <input class= "space" id="email" type="email" placeholder="Ingresa e-mail" required>
                      <input class= "space" id="password" type="password" placeholder="Ingresa contraseña" required>
                      <div id="message2"><P>No se ingreso usuario, e-mail o contraseña</P></div>
                      <button class="button space" id= "btn-sign-up">Registrar</button>
                      <img src="imgs/pets.png" alt="pets">
                      </form>`
    const element2 = document.createElement('div');
    element2.innerHTML = template;

    element2 
     .querySelector('#btn-sign-up')
     .addEventListener('click', event => {
           event.preventDefault();
           signUpOnSubmit()
         });

      return element2;
};