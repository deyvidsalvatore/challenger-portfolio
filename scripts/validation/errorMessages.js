export default function printErrorMessage(field, message) {
    const formField = field.parentElement;
    const errorMessage = formField.querySelector("span");
    errorMessage.innerText = message;
    formField.className = "formulario__campos campo-em-foco erro";
}