
let username = "Ali@gmail.com";
let userpassword = "123456";


let inputname = document.getElementById("exampleInputEmail1");
let inputpass = document.getElementById("exampleInputPassword1");



function login() {
    if (username == inputname.value && userpassword == inputpass.value) {
        window.location.href = "Home.html";
    } else {
        alert('Wrong Username OR Password');

    }
}



