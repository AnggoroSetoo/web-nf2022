function login() {
    event.preventDefault();

    let uname = document.getElementById("username").value;
    let pass = document.getElementById("password").value;

    if (uname == "ahmad2017" && pass == "integrity") {

        alert("Login Berhasil");
        location.replace("success.html");
    } else {
        alert("Username atau password salah");
    }
}
