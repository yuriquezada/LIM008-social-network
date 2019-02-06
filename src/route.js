import { pageSignIn, pageSignUp } from "./lib/tempString.js";

export const changeHash = (nameHash) => {
    window.location.hash = nameHash;
}

const changeRouter = (hash) => {
    if (hash === '#/' || hash === '' || hash === '#') {
      return showTemplate(hash); //el que carga por defecto, primera vez :3
    } else if (hash === '#/signup' || hash=== '#/signin' || hash === '#/home' ) {
      return showTemplate(hash);
    } else {
      return showTemplate('#/404');
    }
    return showTemplate(hash);
  }
  
  const showTemplate = (routers) => {
    const router = routers.substr(2, routers.length - 2)
    const container = document.getElementById("container")
    container.innerHTML = '';
    switch (router) {
      case 'signin':
        container.appendChild(pageSignIn());
        break;
      case 'signup':
        container.appendChild(pageSignUp());
        break;
      default:
        const templateSignIn = pageSignIn()
        container.appendChild(templateSignIn)
    }
  };
  
  export const initRouterPetbook = () => {
    //window, cuando escuches al evento'load', 
    //o sea, cuando te recargues, ejecútame 
    //esta función 
    window.addEventListener('load', changeRouter(window.location.hash));
    if ('onhashchange' in window) {
       window.onhashchange = () => changeRouter(window.location.hash)
    };
  }