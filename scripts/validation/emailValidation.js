import printErrorMessage from "./errorMessages.js";
export default function checkEmail() {
    const emailField = document.getElementById("email");
    const emailValue = emailField.value;
    const emailRegex = /^[^@\s]+@[^@\s]+\.[^@\s]+/;
    if (emailValue === "") {
        printErrorMessage(emailField, "E-mail obrigatório");
    } else if (!emailRegex.test(emailField.value)) {
        printErrorMessage(emailField, "Por favor, digite um e-mail válido");
    } else {
        emailField.parentNode.classList.remove('erro');
    }
    emailField.addEventListener("blur", () => checkEmail());
}