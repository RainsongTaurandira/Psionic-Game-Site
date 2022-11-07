function auth() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    if(username == "Me" && password == "SecretMap-YouNoLook") {
        window.location.assign("login2.html");
        alert("Login Successfully ");
    }
    else {
        alert("Invalid Information ");
        return;
    }
}