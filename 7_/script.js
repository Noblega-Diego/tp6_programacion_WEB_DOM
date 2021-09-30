const inUser = document.getElementById("user");
const inPassword = document.getElementById("password");
const inSecondPassword = document.getElementById("secondPassword");

document.getElementById("form1").addEventListener("submit",e =>{
    e.preventDefault()

    if(!inUser.value || !inPassword.value || !inSecondPassword.value){
        alert("Los campos se encuentran vacios")
        return
    }

    if(inPassword.value !== inSecondPassword.value){
        alert("Los password no coinciden")
        return
    }

})