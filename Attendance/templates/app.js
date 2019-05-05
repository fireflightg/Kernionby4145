(function(){
	
	  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyCUDeDtPBxOpUDkA8ip2Wk4wg-ClDzs-k0",
    authDomain: "frc-4145-attendence.firebaseapp.com",
    databaseURL: "https://frc-4145-attendence.firebaseio.com",
    projectId: "frc-4145-attendence",
    storageBucket: "frc-4145-attendence.appspot.com",
    messagingSenderId: "232011675887"
  };
  firebase.initializeApp(config);

    var x = document.getElementById("myNumber");
    var defaultVal = x.defaultValue;
    var currentVal = x.value;

    
const preObject = document.getElementById('object');
if (defaultVal == currentVal){
const dbRefObject = firebase.database().ref().child(defaultVal);

dbRefObject.on('value' , snap => {
	preObject.innerText = JSON.stringify(snap.val(), null, 3);
});
}
else{
    const dbRefObject = firebase.database().ref().child(currentVal);

dbRefObject.on('value' , snap => {
    preObject.innerText = JSON.stringify(snap.val(), null, 3);
});
}
}());
function myFunction(){


    var x = document.getElementById("Student ID");
    var defaultVal = x.defaultValue;
    var currentVal = x.value;
    var y = document.getElementById("write");

    
const preObject = document.getElementById('object');
if (defaultVal == currentVal){
const dbRefObject = firebase.database().ref().child(defaultVal);

dbRefObject.on('value' , snap => {
    preObject.innerText = JSON.stringify(snap.val(), null, 3);
});
}
else{
    const dbRefObject = firebase.database().ref(currentVal).child('Name');

dbRefObject.on('value' , snap => {
    document.getElementById("runboi").innerHTML = JSON.stringify(snap.val().Name, null, 3);
});
}

}
document.body.addEventListener("click", myFunction)
document.body.addEventListener("load", newFunction)
function newFunction(){
  var ji = currentVal.value;
    const dbRefObject = firebase.database().ref(ji).child('Name');

dbRefObject.on('value' , snap => {
    document.getElementById("runboi").innerHTML = JSON.stringify(snap.val(), null, 3);});
}
