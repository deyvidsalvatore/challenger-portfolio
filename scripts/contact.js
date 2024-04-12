import validateForm from "./validation/formValidation.js";
(() => {
    const form = document.getElementById("formulario");
    form.addEventListener("submit", (event) => {
        event.preventDefault();
        validateForm();
    });

    const fields = document.querySelectorAll('.formulario__campos input, .formulario__campos textarea');
    fields.forEach((field) => {
        field.addEventListener('focus', () => {
            field.parentNode.classList.add('campo-em-foco');
        });

        field.addEventListener('blur', () => {
            if (!field.value) {
                field.parentNode.classList.remove('campo-em-foco');
            }
        });
    });
})();