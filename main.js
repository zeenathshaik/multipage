function adduser(){
  user_name=document.getElementById("user_name").value;
    localStorage.setItem("name of the user", user_name);
    password=document.getElementById("password").value;
    localStorage.setItem("userpassword", password);
    
    window.location="second.html"
    
}