const SendButton = document.querySelector("#send_button");
const FormNom = document.querySelector("#nom");
const FormPrenom = document.querySelector("#Prenom");
const FormEmail = document.querySelector("#email");
let TextError = document.querySelector("#text_button_click");

SendButton.addEventListener("click", (event) => {
    if (FormNom.value === "" || FormPrenom.value === "" || FormEmail.value === "") {
        TextError.textContent = "Veuillez remplir toutes les cases avant d'envoyer";
    }
    else {
        TextError.textContent = "Informations envoyé avec succés";
        FormNom.value = "";
        FormPrenom.value = "";
        FormEmail.value = "";
    }
});
