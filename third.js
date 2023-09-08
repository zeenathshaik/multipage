     // Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDJRg1v63qQtpiE-p2KrNYdl-nin0mGOwk",
  authDomain: "multipage-9ed66.firebaseapp.com",
  databaseURL: "https://multipage-9ed66-default-rtdb.firebaseio.com",
  projectId: "multipage-9ed66",
  storageBucket: "multipage-9ed66.appspot.com",
  messagingSenderId: "39171990308",
  appId: "1:39171990308:web:585b21790e2228757a89b1",
  measurementId: "G-MVFPLTDQC0"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
       
console.log(firebase)
       
user_name=document.getElementById("user_name").value;
addroom1=document.getElementById("searchbox").value;

function send(){
    msg = document.getElementById("msg").value;
    firebase.database().ref("addrooom1").push({
        name:user_name,
        text:msg,
        like:0,
    })
    document.getElementById("msg").value="";
    
}
function getdata(){
    fiebase.database().ref("/"+addroom1).on("value",function(snapshot){
        document.getElementById("output").innerHTML="";
        snapshot.forEach(function(childSnapshot){
            childKey=childSnapshot.key;
            childData = childSnapshot.val();
            if(childKey!="purpose"){
                firebase_message_id=childData;
                message_data=childData;
                console.log(firebase_message_id);
                console.log(message_data);
                name1=message_data["name"];
                message=message_data["message"];
                like=message_data["like"];
                
                name_with_tag= "<h4> "+name1" </h4>";
              message_with_tag="<h4 class='message_h4'>"+message"</h4>";
                like_button="<button class='btn btn-warning' id="+firebase_message_id+"value="+like+"onclick='updateLike(this.id)>";
                span_with_tag="<span class='glyphicon glyphicon-thumbs-up'>Like:"like+"</span></button><hr>";
                row=name_with_tag+message_with_tag+like_button+span_with_tag;
                document.getElementById("output").innerHTML+=row;
                
            }
        })
    }
}

getdata();











