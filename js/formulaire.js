const button = document.getElementById("signup-form");

button.addEventListener("submit", (event) => {
    

    let inputName = document.forms["myForm"]["name"].value;
    let inputEmail = document.forms["myForm"]["email"].value;
    let inputPhone = document.forms["myForm"]["phone"].value;
    var letter = /^[a-zA-Z]+$/;
    let email = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    /* vérifie le nom */
    if (
        ((inputName.length == 0 || inputName.length > 50) &&
            inputEmail.length == 0 &&
            (inputPhone.length == 0 || inputPhone.length > 10)) ||
        inputPhone.lastIndexOf(letter) === 0
    ) {
        document.getElementById("name").style.border = "2px solid #f2190a";
        document.getElementById("email").style.border = "2px solid #f2190a";
        document.getElementById("phone").style.border = "2px solid #f2190a";

        return false;
    } else if (
        (inputName.length > 0 || inputName.length == 50) &&
        inputEmail.length > 0 &&
        inputEmail.match(email) &&
        (inputPhone.length > 0 || inputPhone.length == 10) &&
        (inputPhone.lastIndexOf("06") == 0 || inputPhone.lastIndexOf("07") == 0)
    ) {
        document.getElementById("name").style.border = "2px solid #0af21d";
        document.getElementById("email").style.border = "2px solid #0af21d";
        document.getElementById("phone").style.border = "2px solid #0af21d";
        return false;
    }
});

/* vérifie les éléments lors de l'écrit dans l'input */
const form = document.querySelector("#signup-form");

form.addEventListener("input", function () {
    let inputName = document.forms["myForm"]["name"].value;

    /* vérifie le nom */
    if (inputName.length == 0 || inputName.length > 50) {
        document.getElementById("name").style.border = "2px solid #f2190a";

        return false;
    } else if (inputName.length > 0 || inputName.length == 50) {
        document.getElementById("name").style.border = "2px solid #0af21d";
            return false;
    }
});

form.addEventListener("input", function () {
    let inputEmail = document.forms["myForm"]["email"].value;
    let email = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

        /* Verifie l'email après le nom */
        if (inputEmail.length == 0) {
            document.getElementById("email").style.border = "2px solid #f2190a";
            return false;
        } else if (inputEmail.length > 0 && inputEmail.match(email)) {
            document.getElementById("email").style.border = "2px solid #0af21d";
            return false;
            }
        return false;
});

form.addEventListener("input", function () {
    let inputPhone = document.forms["myForm"]["phone"].value;
    let letter = /^[a-zA-Z]+$/;
            /* Verifie le numéro de tel après l'email*/
            if (inputPhone.length == 0 || inputPhone.length > 10 || inputPhone.lastIndexOf(letter) === 0) {
                document.getElementById("phone").style.border = "2px solid #f2190a";

                return false;
            } else if (
                (inputPhone.length > 0 || inputPhone.length == 10) &&
                (inputPhone.lastIndexOf("06") === 0 || inputPhone.lastIndexOf("07") === 0)
            ) {
                document.getElementById("phone").style.border = "2px solid #0af21d";
                return false;
            }
});
