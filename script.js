let form = document.querySelector('.js-form'),
    input = document.querySelectorAll('.js-input'),
    select = document.querySelector('.js-select'),
    checkbox = document.querySelector('js-checkbox')
    checkboxLable = document.querySelector('.js-checkbox-lable')

    form.onsubmit = function (event) {
        event.preventDefault();

        //Проверка на пустое поле
        input.forEach(function (input) {
            if ((input.value === '')) {
                console.log('error');

              input.classList.add('error-border');
            //   input.parentElement.children.namedItem('length').style.display = 'block'
            } else {
              input.classList.remove('error-border');
                // input.parentElement.children.namedItem('length').style.display = 'none'
            }
        })

        // if (select.value === '0') {
        //     select.classList.add('error-border');
        //     console.log('error');

        //     // return false;
        //   } else {
        //     select.classList.remove('error-border');
        //   }
          console.log('error');

          if(!checkbox.checked) {
            // checkboxLable.classList.add('error-text');
            checkbox.parentElement.children.namedItem('empty').style.color = 'red'

            checkboxLable.classList.add('error-text');
console.log('error');
            return false;
          } else {
            checkboxLable.classList.remove('error-text')
          }
          event.target.reset();

    }
// const regForm = document.forms.regForm

// const userName = regForm.username
// const userEmail = regForm.email
// const userTel = regForm.usertel

// regForm.addEventListener('submit', (e) => {
//     e.preventDefault();
    
//     //name validation
//     const userNameErrorMessages = userName.parentElement.children
//     const userNameValue = userName.value

//     if(userNameValue.length >= 1) {
//         userNameErrorMessages.namedItem('length').style.display = 'none'
//     } else {
//  userNameErrorMessages.namedItem('length').style.display = 'block'
//     }
// })