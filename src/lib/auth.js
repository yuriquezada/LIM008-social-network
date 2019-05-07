export const checkEmail = () => 
  firebase.auth().currentUser.sendEmailVerification()

  export const authUser = () => 
firebase.auth().currentUser;
