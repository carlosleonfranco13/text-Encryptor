const textArea = document.querySelector(".text-area");
const message = document.querySelector(".message");
const copy = document.querySelector(".copy");
const msgError = document.querySelector(".contain-error")
btnCopy.style.display = "none"

/*=== VALIDATE TEXT ===*/
function validateText() {
    let writeText = document.querySelector(".text-area").value;
    let validator = writeText.match(/^[a-z]*$/);

    if(!validator || validator === 0) {
        alert("Only lowercase letters and no accents are allowed");
        location.reload();
        return true;
    }
}

/* === FUNCTION BTN ENCRYPT === */
function btnEncrypt() {
    if(!validateText())  {
        const textEncrypt = encrypt(textArea.value)
        message.value = textEncrypt
        textArea.value = "";
        message.style.backgroundImage = "none";
        msgError.style.display = "none";
    }
}

//Laves de encriptacion
// `La letra "e" es convertida para "enter"`
// `La letra "i" es convertida para "imes"`
// `La letra "a" es convertida para "ai"`
// `La letra "o" es convertida para "ober"`
// `La letra "u" es convertida para "ufat"`

/* === FUNCTION ENCRYPT === */
function encrypt(stringEncrypt) {
    let matrixCode = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringEncrypt = stringEncrypt.toLowerCase();

    for(let i = 0; i < matrixCode.length; i++) {
            if(stringEncrypt.includes(matrixCode[i][0])) {
                stringEncrypt = stringEncrypt.replaceAll(matrixCode[i][0],matrixCode[i][1])
        }
    }
    return stringEncrypt
}

/* === FUNCTION BTN DECRYPT === */
function btnDecrypt() {
    const textEncrypt = decrypt(textArea.value);
    message.value = textEncrypt
    textArea.value = "";
}

/* === FUNCTION DECRYPT === */
function decrypt(stringDecrypt) {
    let matrixCode = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringDecrypt = stringDecrypt.toLowerCase();

    for(let i = 0; i < matrixCode.length; i++) {
        if(stringDecrypt.includes(matrixCode[i][1])) {
            stringDecrypt = stringDecrypt.replaceAll(matrixCode[i][1],matrixCode[i][0])
        }
    }
    return stringDecrypt
}

function btnCopy() {
    message.select();
    navigator.clipboard.writeText(message.value);
    message.value = "";
    alert("Copied text!")
}