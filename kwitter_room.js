
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
    if(!firebase.apps.length){
      firebase.initializeApp(firebaseConfig);
    }
    // Initialize Firebase

//ADD YOUR FIREBASE LINKS HERE

username=localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML =  "Welcome " + username + "!";


function add_room(){
      room_name=document.getElementById("room_name").value;
localStorage.setItem("room_name" , room_name);

firebase.database().ref("/").child(room_name).update({

      "purpose":"adding user"
});
window.location="kwitter_page.html";
}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
row="<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'>#"+ Room_names+"</div><hr>";
document.getElementById('output').innerHTML += row;
      //End code
      });});}
getData();


function redirectToRoomName(name){
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location="kwitter_page.html";
}

