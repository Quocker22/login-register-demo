




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
    var errname = document.getElementById("errName");
    if(dowName.value === ''){
        name.innerHTML = 'Chuỗi rỗng';
        dowName.placeholder = 'Tên tài khoản không được để trống !';  
    } else
        name.innerHTML = dowName.value;

    if(dowpass.value === ''){
        pass.innerHTML ='Chuỗi rỗng';
        dowpass.placeholder = 'Mật khẩu không được để trống !';
    }else 
        pass.innerHTML = dowpass.value;
    if(dowEmail.value === ''){
        email.innerHTML = 'Chuỗi rỗng'
        dowEmail.placeholder = 'email không được để trống !';
    }else
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

 
