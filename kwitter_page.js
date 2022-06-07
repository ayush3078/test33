var firebaseConfig = {
      apiKey: "AIzaSyDOf7yVRBxSv3wJqzDsdVI13uSHM49as3A",
      authDomain: "kwitter-259fb.firebaseapp.com",
      databaseURL: "https://kwitter-259fb-default-rtdb.firebaseio.com",
      projectId: "kwitter-259fb",
      storageBucket: "kwitter-259fb.appspot.com",
      messagingSenderId: "513229498660",
      appId: "1:513229498660:web:ea520249161e8e6bafabb1"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
var user_name=localStorage.getItem("user_name");
var room_name=localStorage.getItem("room_name");
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code
console.log(firebase_message_id);
console.log(message_data);
name = message_data ['name'];
message = message_data ['message'];
like = message_data ['like'];
namewithtag="<h4>"+name+"<img class='user_tick' src='tick.png'></h4>";
messagewithtag="<h4 class='message_h4'>"+message+"</h4>";
likebutton = "<button class='btn btn-warning' id="+firebase_message_id+"value="+like+"onclick='updatelike(this.id)'>";

spanwithtag="<span class='glyphicon glyphicon-thumbs-up'>Like:"+like+"</span></button><hr>";
row = namewithtag+messagewithtag+likebutton+spanwithtag;
document.getElementById("output.innerHTML").innerHTML+=row;
//End code
      } });  }); }
getData();
function send()
{
      msg = document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            name:user_name,
            message:msg,
            like:0
      });

      document.getElementById("msg").value ="";
}

