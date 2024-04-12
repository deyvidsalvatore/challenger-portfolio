import printErrorMessage from "./errorMessages.js";
export default function checkMessage() {
    const messageField = document.getElementById("mensagem");
    const messageValue = messageField.value;
    const inputLength = messageField.value.length;
    const minLength = 2;
    const maxLength = 300;
    if (messageValue === "") {
        printErrorMessage(messageField, "Este campo é obrigatório");
    } else if (inputLength < minLength) {
        printErrorMessage(messageField, "Mínimo de 2 caracteres");
    } else if (inputLength > maxLength) {
        printErrorMessage(messageField, inputLength + " de " + maxLength + " caracteres.");
    } else {
        messageField.parentNode.classList.remove('erro');
    }
    messageField.addEventListener("blur", () => checkMessage());
}