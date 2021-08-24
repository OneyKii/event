let inputName = document.getElementById("name").value;
let inputEmail = document.getElementById("email").value;
let inputPhone = document.getElementById("phone").value;

    /* if(inputName.length > 0 || inputEmail.length == 50) */


function valideName() {
    if(inputName.value == ""){
        inputName.classList.add("erreur");
        inputName.value.maxLength >=! 50;
    }else{
        
    }
}