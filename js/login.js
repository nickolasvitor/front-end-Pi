function logar()
{

    var email = document.getElementById("login-input");

    var password = document.getElementById("password-input");
    
    console.log(email.value+password.value);

    if(email.value=="admin@admin.com" && password.value=="admin")
    {
        console.log("entrou")
        console.log(email.value +" "+password.value)

        localStorage.setItem("acesso",true);

        location.href="homes.html";

    
        alert("Bem vindo")
        
     

    }else
    {
        console.log("errou")

        console.log(window.location.protocol)
        console.log(window.location.host)
        console.log(window.location.pathname)



        alert("Usuário ou senha incorreto")
     
    }

};