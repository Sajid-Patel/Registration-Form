a = "Registration Form"
console.log(a)


function checkEmail() {
    var un = document.getElementById("user").value

    var em = document.getElementById("emsg")

    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(un)

    if (emailRegex) {
        em.innerHTML = "Valid Email"
        em.style.color = "green"
        return true

    } else {
        em.innerHTML = "Invalid Email"
        em.style.color = "red"
        return false
    }
}



function checkPass() {

    var p = document.getElementById("pass").value

    var em = document.getElementById("pmsg")

    var passRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/.test(p);

    if (passRegex) {
        em.innerHTML = "Password is Correct"
        em.style.color = "green"
        return true
    } else {
        em.innerHTML = "Incorrect Password"
        em.style.color = "red"
        return false
    }

}


function checkMobile() {
    var m = document.getElementById("mob").value

    var em = document.getElementById("mmsg")

    var mobRegex = /^\d{10}$/.test(m);

    if (mobRegex) {
        em.innerHTML = "Mobile is  Correct"
        em.style.color = "green"
        return true
    } else {
        em.innerHTML = "Mobile is Incorrect"
        em.style.color = "red"
        return false
    }
}

function login() {
    var em = document.getElementById("ln")

    if (checkEmail() && checkPass() && checkMobile) {
        window.open("https://www.youtube.com/@rock_s.p")
    } else {
        em.innerHTML = "User, password, and mobile are invalid";
        em.style.color = "red";
    }
}

