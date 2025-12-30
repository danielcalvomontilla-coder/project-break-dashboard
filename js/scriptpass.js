const pass = document.getElementById("pass");
const btnPass = document.getElementById("btnPass");
const lengthInput = document.getElementById("length");

const mayus = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const minus = "abcdefghijklmnopqrstuvwxyz";
const number = "0123456789";
const symbol = "!@#$%^&*()-_=+";

function randomChar(str) {
    return str.charAt(Math.floor(Math.random() * str.length));
}

function shuffleString(str) {
    return str
        .split("")
        .sort(() => Math.random() - 0.5)
        .join("");
}

btnPass.addEventListener("click", () => {
    const passLength = parseInt(lengthInput.value, 10);

    if (isNaN(passLength) || passLength < 12 || passLength > 50) {
        alert("La longitud debe estar entre 12 y 50 caracteres");
        return;
    }

    const data = mayus + minus + number + symbol;
    let generatedPass = "";

    generatedPass += randomChar(mayus);
    generatedPass += randomChar(minus);
    generatedPass += randomChar(number);
    generatedPass += randomChar(symbol);

    for (let i = generatedPass.length; i < passLength; i++) {
        generatedPass += randomChar(data);
    }

    generatedPass = shuffleString(generatedPass);

    pass.textContent = generatedPass;
});



