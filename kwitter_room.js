
//ADD YOUR FIREBASE LINKS HERE




const firebaseConfig = {
      apiKey: "AIzaSyB9lXsgTF8wLjHiVO8Kv-kmj4v0tay2fYE",
      authDomain: "fir-b1540.firebaseapp.com",
      databaseURL: "https://fir-b1540-default-rtdb.firebaseio.com",
      projectId: "fir-b1540",
      storageBucket: "fir-b1540.appspot.com",
      messagingSenderId: "153102302663",
      appId: "1:153102302663:web:c1798dc11ad1faf2e12de2"
    };
    
    // Initialize Firebase
firebase.initializeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
