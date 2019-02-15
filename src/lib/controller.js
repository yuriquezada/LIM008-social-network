export const logIn = (email, password) => 
    firebase.auth().signInWithEmailAndPassword(email, password)
  
export const signUp = (email, password) =>
    firebase.auth().createUserWithEmailAndPassword(email, password)

export const checkEmail = () => 
  firebase.auth().currentUser.sendEmailVerification()

export const signOut = () => 
    firebase.auth().signOut()
 
export const googleLogIn = () => {
    let provider = new firebase.auth.GoogleAuthProvider();
    return firebase.auth().signInWithPopup(provider)
  } 

  export const showPost = (post) => {
    firebase.firestore().collection("users").add({
    comment: post
  })
}

export const getPost = (callback) => {  
  firebase.firestore().collection('users')
    .onSnapshot((querySnapshot) => {
      const data = [];
      querySnapshot.forEach((doc) => {
        data.push({ id: doc.id, ...doc.data() })
      });
      callback(data);      
    }); 
  }

export const deletePost = (id) =>
  firebase.firestore().collection("users").doc(id).delete();
  
 
