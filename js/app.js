const message = document.querySelector(".message");
let result = document.querySelector(".result");

const encButton = document.querySelector(".enc-btn");
const decButton = document.querySelector(".dec-btn");

encButton.addEventListener('click', function() {
    let encryptedAES = CryptoJS.AES.encrypt(message.value, "My Secret Passphrase");
    result.value = encryptedAES.toString();
});

decButton.addEventListener('click', function() {
    let decryptedBytes = CryptoJS.AES.decrypt(result.value, "My Secret Passphrase");
    let plaintext = decryptedBytes.toString(CryptoJS.enc.Utf8);
    result.value = plaintext;
});