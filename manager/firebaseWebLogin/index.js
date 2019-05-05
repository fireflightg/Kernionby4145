  var config = {
    apiKey: "AIzaSyBaZ2AyEy2K_MVz0qr53SqFBdSVdkDs0jk",
    authDomain: "frc-4145-login.firebaseapp.com",
    databaseURL: "https://frc-4145-login.firebaseio.com",
    projectId: "frc-4145-login",
    storageBucket: "frc-4145-login.appspot.com",
    messagingSenderId: "730665812409"
  };
  firebase.initializeApp(config);
firebase.auth()(function(user) {
  if (user) {
    // User is signed in.

    document.getElementById("user_div").style.display = "block";
    document.getElementById("login_div").style.display = "none";

    var user = firebase.auth().currentUser;

    if(user != null){

      var email_id = user.email;
      document.getElementById("user_para").innerHTML = "Welcome User : " + email_id;

    }

  } else {
    // No user is signed in.

    document.getElementById("user_div").style.display = "none";
    document.getElementById("login_div").style.display = "block";

  }
});

function login(){

  var userEmail = document.getElementById("email_field").value;
  var userPass = document.getElementById("password_field").value;

  firebase.auth().signInWithEmailAndPassword(userEmail, userPass).catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;

    window.alert("Error : " + errorMessage);

    // ...
  });

}

function logout(){
  firebase.auth().signOut();
}
