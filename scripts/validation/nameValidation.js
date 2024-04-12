import printErrorMessage from "./errorMessages.js";
export default function checkName() {
    const nameField = document.getElementById("nome");
    const nameValue = nameField.value;
    const inputLength = nameField.value.length;
    const minLength = 2;
    const maxLength = 50;
    if (nameValue === "") {
        printErrorMessage(nameField, "Este campo é obrigatório.");
    } else if (inputLength < minLength) {
        printErrorMessage(nameField, "Por favor, digite um nome válido");
    } else if (inputLength > maxLength) {
        printErrorMessage(nameField, inputLength + " de " + maxLength + " caracteres.");
    } else {
        nameField.parentNode.classList.remove('erro');
    }
    nameField.addEventListener("blur", () => checkName());
}