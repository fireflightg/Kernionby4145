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

}());
function myFunction(){


    var x = document.getElementById("myNumber");
    var defaultVal = x.defaultValue;
    var currentVal = x.value;

const headObject = document.getElementById('okey');
const preObject = document.getElementById('object');
if (defaultVal == currentVal){
alert("type in a value")
}
else{
    const dbRefObject = firebase.database().ref().child(currentVal);

dbRefObject.orderByChild('Name').on('value' , snap => {
    headObject.innerText = JSON.stringify(snap.val().Name, null, 3);
});
dbRefObject.on('value' , snap => {
    preObject.innerText = JSON.stringify(snap.val(), null, 3);
});
}}
function tyo(){

    Papa.parse("https://frc-4145-attendence.firebaseio.com/.json?print=pretty&format=export&download=frc-4145-attendence-export.json",{
    download: true,

    complete: function(results) {

        console.log(results);
            var csv = Papa.unparse(results);

    var csvData = new Blob([csv], {type: 'text/csv;charset=utf-8;'});
    var csvURL =  null;
    
    if (navigator.msSaveBlob)
    {
        csvURL = navigator.msSaveBlob(csvData, 'download.csv');
    }
    else
    {
        csvURL = window.URL.createObjectURL(csvData);
    }

    var tempLink = document.createElement('a');
    tempLink.href = csvURL;
    tempLink.setAttribute('download', 'download.csv');
    tempLink.click();

    }

});

}
function popup(){
    document.getElementById('bodi').style.display = "block";
    document.getElementById('cool').style.filter = "blur(2px)";
    document.getElementById('johf').style.filter = "blur(2px)";
    document.getElementById('bower').style.filter = "blur(10px)";
    document.getElementById('bodi').style.filter = "blur(0px)";

}
function popback(){
    document.getElementById('bodi').style.display = "none";
    document.getElementById('cool').style.filter = "blur(0px)";
    document.getElementById('johf').style.filter = "blur(0px)";
    document.getElementById('bower').style.filter = "blur(0px)";
    document.getElementById('bodi').style.filter = "blur(0px)";

}
function addchild(){ 


// Get a database reference to our blog
var dbReftObject = firebase.database().ref();
    var y = document.getElementById("numinput");
    var defautVal = y.defaultValue;
    var cuurrentVal = y.value;
    var z = document.getElementById("namer")
    var defnam = z.defaultValue;
    var curnam = z.value;
if(defautVal == cuurrentVal){
    alert("type in a ID")

}
if(defnam == curnam){
    alert("type in a Name")
}
else{
var newPostRef = dbReftObject.child(cuurrentVal).set({
    Name: curnam
});
document.getElementById('bodi').style.display = "none";
    document.getElementById('cool').style.filter = "blur(0px)";
    document.getElementById('johf').style.filter = "blur(0px)";
    document.getElementById('bower').style.filter = "blur(0px)";
    document.getElementById('bodi').style.filter = "blur(0px)";

}


}
function logindisplay(){
    var eef = document.getElementById('no');
    var effer = eef.value;
    
if (eef == effer){ 
    currentVaw = firebase.database().ref().child(eef);
}
else()
{


}
}
