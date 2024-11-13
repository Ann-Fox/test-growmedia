let form = document.querySelector('.js-form'),
  formInputs = document.querySelectorAll('.js-input'),
  inputEmail = document.querySelector('.js-input-email'),
  inputPhone = document.querySelector('.js-input-phone'),
  select = document.querySelector('.js-input-select'),
  inputCheckbox = document.querySelector('.js-input-checkbox'),
  lableCheckbox = document.querySelector('.js-checkbox-lable')

function validateEmail(email) {
  let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

form.onsubmit = function () {
  console.log('works');
  let emailVal = inputEmail.value;
  let phoneVal = inputPhone.value;
  emptyInputs = Array.from(formInputs).filter(input => input.value === '')

  //Проверка на пустое поле
  formInputs.forEach(function (input) {
    if ((input.value === '')) {
      console.log('err');
      input.classList.add('error');
      input.parentElement.children.namedItem('length').style.display = 'block'
    } else {
      input.classList.remove('error');
      input.parentElement.children.namedItem('length').style.display = 'none'
    }
  });

  if (emptyInputs.length !== 0) {
    console.log('inputs not filled');
    return false;
  }

  //проверка email не полная валидация
  if (!validateEmail(emailVal)) {
    console.log('not validate email');
    inputEmail.classList.add('error');
    return false;
  } else {
    inputEmail.classList.remove('error');
  }

  //проверка чекбокса
  if (!inputCheckbox.checked) {
    console.log('checkbox not checked');
    lableCheckbox.classList.add('error');
    return false;
  } else {
    lableCheckbox.classList.remove('error');
  }
}
