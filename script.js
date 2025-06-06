const rangeVal = document.getElementById('rangeVal')
const rangeSlide = document.getElementById('rangeSlide')
const password = document.getElementById('password')
const lowercase = document.getElementById('lwc')
const uppercase = document.getElementById('upc')
const numbers = document.getElementById('num')
const symbols = document.getElementById('sym')
const genBtn = document.getElementById('pw-btn')
const pwCont = document.querySelector('.pw-cont');
const copyTooltip = document.getElementById('copytooltip');

rangeSlide.textContent = rangeVal.value;
rangeVal.addEventListener('input', ()=> {
    rangeSlide.textContent = rangeVal.value;
})

genBtn.addEventListener('click', ()=> {
    password.textContent = generatePassword();
})

let lwc = 'abcdefghijklmnopqrstuvwxyz'
let upc = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
let num = '1234567890'
let sym = '~!@#$%^&*'

function generatePassword() {
    let genPassword = "";
    let allChars = "";

    allChars += lowercase.checked ? lwc : ""
    allChars += uppercase.checked ? upc : ""
    allChars += numbers.checked ? num : ""
    allChars += symbols.checked ? sym : ""

    if (allChars == "" || allChars.length == 0) {
        return genPassword;
    }

    for (let i = 0; i <= rangeVal.value; i++) {
        genPassword += allChars.charAt(Math.floor(Math.random() * allChars.length))
    }

    return genPassword;
}

password.addEventListener('click', ()=> {
    navigator.clipboard.writeText(password.textContent)
    copyTooltip.textContent = "Copied!"
    setTimeout(() => {
        copyTooltip.textContent = "Copy!"
    }, 1500)
});