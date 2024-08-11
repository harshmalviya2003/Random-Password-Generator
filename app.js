const inputBox = document.getElementById("inputBox");

const length = 12;

const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
const lowerCase = "abcdefghijklmnopqrstuvwxyz"
const number = "0123456789"
const symbol = "~!@#$%^&*()_+-={}[]|/;'"

const addMore = upperCase + lowerCase + number + symbol;

function getPassword(){
    let password = "";
    password += upperCase[Math.floor(Math.random() * upperCase.length)]
    password += lowerCase[Math.floor(Math.random() * lowerCase.length)]
    password += number[Math.floor(Math.random() * number.length)]
    password += symbol[Math.floor(Math.random() * symbol.length)]

    while(length > password.length){
        password += addMore[Math.floor(Math.random() * addMore.length)]
    }

    inputBox.value = password;

}

function copyPassword (){
    inputBox.select()
    document.execCommand('copy')
}