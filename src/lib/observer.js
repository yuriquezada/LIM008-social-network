
  export const observer = () => {
    firebase.auth().onAuthStateChanged(function(user) {
        if (user) {
            console.log("existe");
            showDocument();
            //Poner aquí la variable que contega el html
          // User is signed in.
          var displayName = user.displayName;
          var email = user.email;
          var emailVerified = user.emailVerified;
          var photoURL = user.photoURL;
          var isAnonymous = user.isAnonymous;
          var uid = user.uid;
          var providerData = user.providerData;
          // ...
        } else {
          console.log("no existe usuario activo");
          // User is signed out.
          // ...
        }
      });
  }
  const showDocument = () => {
    const contenido = document.getElementById("contenido");
          contenido.innerHTML=`
          <p>Bienvenido</p>
          <input id= "signOut" type="button" value="Cerrar Sesión">`;
      }
