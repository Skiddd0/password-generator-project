function randomChracters(){
    let randomNumber = Math.floor(Math.random()* characters.length)
    return characters[randomNumber]
}

function  generatePasswords() {
    let password = ""
    for (let i = 0; i < passwordlength; i++){
        password += randomChracters()
    
    }
    return password
}

function generatePassword(){
    passwordOneEl.textContent = generatePasswords();
    passwordTwoEl.textContent = generatePasswords();
}
