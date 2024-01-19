const SendButton = document.querySelector("#send_button");
const FormNom = document.querySelector("#nom");
const FormPrenom = document.querySelector("#Prenom");
const FormEmail = document.querySelector("#email");
let TextError = document.querySelector("#text_error");

SendButton.addEventListener("click", (event) => {
    if (FormNom.value === "" || FormPrenom.value === "" || FormEmail.value === "") {
        TextError.textContent = "Veuillez remplir toutes les cases avant d'envoyer"
    }
    else {
        TextError.textContent = "Informations envoyé avec succés"
    }
});

function storage (){
let item = JSON.parse(localStorage.getItem("item")) // récupérer la donnée

const data = JSON.stringify(item); // transformer l'item en json
localStorage.setItem("item", data);  // sotcker l'item
}