function() {
	var config = {
    	apiKey: "AIzaSyCUDeDtPBxOpUDkA8ip2Wk4wg-ClDzs-k0",
    	authDomain: "frc-4145-attendence.firebaseapp.com",
   		databaseURL: "https://frc-4145-attendence.firebaseio.com",
    	projectId: "frc-4145-attendence",
    	storageBucket: "frc-4145-attendence.appspot.com",
    	messagingSenderId: "232011675887"
	};
	firebase.initializeApp(config);

	var x = document.getElementByName("Student ID");
	var defaultVal = x.defaultValue;
	var currentVal = x.value;

	const preObject = document.getElementById('object');
	if (defaultVal == currentVal){
	const dbRefObject = firebase.database().ref().child(defaultVal).child('Name');

	dbRefObject.on('value' , snap => {
		preObject.innerText = JSON.stringify(snap.val(), null, 3);
	});
	}
	else{
    	const dbRefObject = firebase.database().ref().child(currentVal).child('Name');

	dbRefObject.on('value' , snap => {
    	preObject.innerText = JSON.stringify(snap.val(), null, 3);
	});
	}
};

function myFunction() {

	var x = document.getElementByName("Student ID");
	var defaultVal = x.defaultValue;
	var currentVal = x.value;

	const preObject = document.getElementById('object');
	if (defaultVal == currentVal){
	const dbRefObject = firebase.database().ref().child(defaultVal).child('Name');

	dbRefObject.on('value' , snap => {
		preObject.innerText = JSON.stringify(snap.val(), null, 3);
	});
	}
	else{
    	const dbRefObject = firebase.database().ref().child(currentVal).child('Name');

	dbRefObject.on('value' , snap => {
    	preObject.innerText = JSON.stringify(snap.val(), null, 3);
	});
	}
};
