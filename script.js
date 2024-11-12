const regForm = document.forms.regForm

const userName = regForm.username
const userEmail = regForm.email
const userTel = regForm.usertel

regForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    //name validation
    const userNameErrorMessages = userName.parentElement.children
    const userNameValue = userName.value

    if(userNameValue.length >= 1) {
        userNameErrorMessages.namedItem('length').style.display = 'none'
    } else {
 userNameErrorMessages.namedItem('length').style.display = 'block'
    }
})