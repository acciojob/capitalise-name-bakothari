//your JS code here. If required.
let inputField = document.getElementById("fname");

if (inputField) {
    inputField.addEventListener("blur", () => {
        inputField.value = inputField.value.toUpperCase();
    });
}