//YOUR FIREBASE LINKS


const firebaseConfig = {
      apiKey: "AIzaSyB9lXsgTF8wLjHiVO8Kv-kmj4v0tay2fYE",
      authDomain: "fir-b1540.firebaseapp.com",
      databaseURL: "https://fir-b1540-default-rtdb.firebaseio.com",
      projectId: "fir-b1540",
      storageBucket: "fir-b1540.appspot.com",
      messagingSenderId: "153102302663",
      appId: "1:153102302663:web:c1798dc11ad1faf2e12de2"
    };
    if(!firebase.apps.length){
      firebase.initializeApp(firebaseConfig);
    }
room_name=localStorage.getItem("room_name");
user_name=localStorage.getItem("user_name");



function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();

function send(){

      msg = document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
        name:user_name,
        message:msg,
        like:0    
      });

      document.getElementById("msg").value="";
}



function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
window.location="index.html";

}
