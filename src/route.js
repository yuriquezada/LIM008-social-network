import { home } from "./lib/templateHome.js";
import { pageSignIn } from "./lib/templateSignIn.js";
import { pageSignUp } from "./lib/templateSignUp.js";
<<<<<<< HEAD
=======
import { getPost } from "./lib/controller.js";
>>>>>>> 4bcdf4163204e3badc7653a6ed5b541701a65cf5

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
<<<<<<< HEAD
    return showTemplate(hash);
=======
    // return showTemplate(hash);
>>>>>>> 4bcdf4163204e3badc7653a6ed5b541701a65cf5
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
      case 'home':
<<<<<<< HEAD
        container.appendChild(home());
=======
        getPost((posts) => {
          container.innerHTML = '';
          container.appendChild(home(posts));
      })
>>>>>>> 4bcdf4163204e3badc7653a6ed5b541701a65cf5
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