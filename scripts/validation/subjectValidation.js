import printErrorMessage from "./errorMessages.js";
export default function checkSubject() {
    const subjectField = document.getElementById("assunto");
    const subjectValue = subjectField.value;
    const inputLength = subjectField.value.length;
    const submitButton = document.getElementById('btnEnviar');
    const minLength = 2;
    const maxLength = 50;
    if (subjectValue === "") {
        printErrorMessage(subjectField, "Este campo é obrigatório");
    } else if (inputLength < minLength) {
        printErrorMessage(subjectField, "Mínimo de 2 caracteres");
    } else if (inputLength > maxLength) {
        printErrorMessage(subjectField, inputLength + " de " + maxLength + " caracteres.");
    } else {
        subjectField.parentNode.classList.remove('erro');
    }
    subjectField.addEventListener("blur", () => checkSubject());
}