function printInfo(){
    var name = document.getElementById("name");
    var pass = document.getElementById("pass");
    var email = document.getElementById("email");
    var sex = document.getElementById("sex");
    var dowName = document.getElementById("nameRegister");
    var dowpass = document.getElementById("passRegister");
    var dowEmail = document.getElementById("emailRegister");
    var dowSex = document.getElementById("sexRegister");
    var display = document.getElementById("print-Info");
    name.innerHTML = dowName.value;
    pass.innerHTML = dowpass.value;
    email.innerHTML = dowEmail.value;
    sex.innerHTML = dowSex.value;
    display.style.display = "inline-block"
}

    // register
    function onRegister(){
        var tabRegister =document.getElementById("form-register");
        var tabLogin =document.getElementById("form-login");
        tabRegister.style.display = "block";
        tabLogin.style.display = "none";
    }

    //login
    function onLogin(){
        var tabRegister =document.getElementById("form-register");
        var tabLogin =document.getElementById("form-login");
        tabRegister.style.display = "none";
        tabLogin.style.display = "block";
    }

    // check box

    function checkBox(change) {
        var onOff = document.getElementById("check-box__onOff");
        if(change==1)
            onOff.style.display ="inline-block";
        else
            onOff.style.display ="none";
        }

