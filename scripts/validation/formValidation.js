import checkName from "./nameValidation.js";
import checkEmail from "./emailValidation.js";
import checkSubject from "./subjectValidation.js";
import checkMessage from "./messageValidation.js";
export default function validateForm() {
    checkName();
    checkEmail();
    checkSubject();
    checkMessage();
    const form = document.getElementById("formulario");
    const fields = form.querySelectorAll(".formulario__campos");
    const submitButton = document.getElementById('btnEnviar');
    function validateFields() {
        const isValid = [...fields].every((field) => {
            return field.className === "formulario__campos campo-em-foco";
        });
        if (isValid) {
            form.submit();
            submitButton.classList.remove('campo-com-erro');
        } else {
            submitButton.classList.add('campo-com-erro');
        }
    }
    fields.forEach((field) => {
        field.addEventListener('focus', validateFields);
        field.addEventListener('blur', validateFields);
    });
    validateFields();
}