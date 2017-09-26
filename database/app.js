var config = {
    apiKey: "AIzaSyAUQbOpK-5P0H_-WqAEX9yJxFvc6fvS1fE",
    authDomain: "auth-c9958.firebaseapp.com",
    databaseURL: "https://auth-c9958.firebaseio.com",
    projectId: "auth-c9958",
    storageBucket: "auth-c9958.appspot.com",
    messagingSenderId: "15222367123"
};
firebase.initializeApp(config);

//select object from the DOM
const preObject = document.querySelector("#object");

//ref gets you to the root of the database.
//.child('object') looks for child called object.
const dbRefObject = firebase.database().ref().child('object');

//first argument is event type.
//event type is how you control the level of synchronization from the database.
//second argument is callback function. event type controls when callback function is called.
//for value, the callback funciton will be called each and every time there is a change in the database.
//snap is a snapshot of the database, which returns a lot of info.
//to get just the value, use .val()
dbRefObject.on( 'value', snap => console.log( snap.val() ) );