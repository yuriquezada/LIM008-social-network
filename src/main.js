// Este es el punto de entrada de tu aplicacion
import { changeTmp } from './lib/controller.js';
import {signIn, checkIn, signUp, signInGoogle} from './lib/firebase-functions';
export { valuesSignIn , valuesSignUp, btnGoogle};

window.addEventListener('load', changeTmp(window.location.hash))
if (("onhashchange" in window)) window.onhashchange = () => changeTmp(window.location.hash);


const valuesSignIn = () => {
    const emailSignIn= element.querySelector('#email-sign-in').value;
    const passwordSignIn = element.querySelector('#password-sign-in').value;
    signIn(emailSignIn, passwordSignIn);
    checkIn();
};

const valuesSignUp = () => {
    const emailSignUp= element.querySelector('#email-sign-up').value;
    const passwordSignUp = element.querySelector('#password-sign-up').value;
    signUp(emailSignUp, passwordSignUp);
};

const btnGoogle = () => {
    signInGoogle();
  };

