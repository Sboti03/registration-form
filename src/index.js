import './style.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.js'

let userError;
let emailError;
let password1Error;
let password2Error;


let username;
let email;
let password;

function register() {
    emailTest();
    usernameTest();
    password1Test();
    password2Test();
    
}

function usernameTest() {
    let e = document.getElementById('username')
    let upperCaseLetters = /[A-Z]/g
    if (e.value.match(upperCaseLetters)){
        userError.style.display = "block";
        userError.textContent = "Csak kis betűt tartalmazhat!"
    } else if(e.value.length < 3){
        userError.style.display = "block";
        userError.textContent = "Legalább 3 karakter hosszú nevet adjon meg!"
    } else {
        userError.style.display = "none"
        username = e.value
    }
}

function emailTest() {
    let e = document.getElementById('email')
    if(!e.value.match("@")) {
        emailError.style.display = "block"
        emailError.textContent = "'@' karaktert nem tartalmaz!"
    } else {
        emailError.style.display = "none"
        email = e.value
    }
}


function password1Test() {
    let e = document.getElementById('password')
    if(e.value.length < 8) {
        console.log(password1Error)
        password1Error.style.display = "block"
        password1Error.textContent = "Leglább 8 karakter hosszú jelszó kell!"
    } else if(!e.value.match(/[A-Z]/)) {
        password1Error.style.display = "block"
        password1Error.textContent = "Leglább egy nagybetűt kell tartalmaznia!"
    }else if(!e.value.match(/[0-9]/)) {
        password1Error.style.display = "block"
        password1Error.textContent = "Leglább egy számot kell tartalmaznia!"
    }  else {
        password1Error.style.display = "none"
        password = e.value
    }
}

function password2Test() {
    let e = document.getElementById('passwordAgain')
    if(e.value != password) {
        password2Error.style.display = "block"
        password2Error.textContent = "A két jelszó nem egyezik!"
    } else {
        password2Error.style.display = "none"
    }
}



function init() {
/*
    document.getElementById('username').addEventListener('change', usernameTest)
    document.getElementById('email').addEventListener('change', emailTest)
    document.getElementById('password').addEventListener('change', password1Test)
    document.getElementById('passwordAgain').addEventListener('change', password2Test)
*/
    document.getElementById('register').addEventListener('click', register)
    
    userError = document.getElementById('userError')
    userError.style.display = "none"

    emailError = document.getElementById('emailError')
    emailError.style.display = "none"
    
    password1Error = document.getElementById('password1Error')
    password1Error.style.display = "none"
    
    password2Error = document.getElementById('password2Error')
    password2Error.style.display = "none"

    console.log("Loaded")
}







document.addEventListener('DOMContentLoaded', init)
