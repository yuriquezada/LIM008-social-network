import { objTemp } from './template.js'
export { changeTmp };

const changeTmp = (hash) => {
//   if (hash === '#/' || hash === '' || hash === '#') {
//     return viewTmp('#/home');
//   } else if (hash === '#/signUp') {
//     return viewTmp(hash);
//   } else {
//     return viewTmp('#/different');
//   }
return viewTmp(hash);
 }

const viewTmp = (routers) => {
  let router;
  if(routers) {
    router = routers.substr(2, routers.length - 2);
  } else {
    router = 'home'
    router = 'signIn'
  };
  // const router = routers.substr(2, routers.length - 2)
  // const container = document.getElementById("container")
  // container.innerHTML = objTemp[router];
};
const container = document.getElementById("container")
container.innerHTML = '';
const section = container.appendChild(objTemp[router]());

