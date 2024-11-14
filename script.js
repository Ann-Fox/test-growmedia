let form = document.querySelector(".js-form"),
    formInputs = document.querySelectorAll(".js-input"),
    inputEmail = document.querySelector(".js-input-email"),
    inputPhone = document.querySelector(".js-input-phone"),
    inputNumber = document.querySelector(".js-input-number"),
    inputCheckbox = document.querySelector(".js-input-checkbox"),
    lableCheckbox = document.querySelector(".js-checkbox-lable"),
    modalView = document.querySelector(".js-modal");

let errorText = document.querySelectorAll(".error-text");

function validateEmail(email) {
    let re =
        /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

function validatePhone(phone) {
    let regex = /^(\+7)?[\s]?\(?[0-9]{3}\)?[\s]?[0-9]{3}[\s]?[0-9]{4}$/;
    return regex.test(phone);
}

function validateNumber(number) {
    let regex = /^(0|-?[1-9]\d*)(\.[0-9]{1,2})?$/;
    return regex.test(number);
}

form.onsubmit = function (event) {
    event.preventDefault();

    let emailVal = inputEmail.value;
    let phoneVal = inputPhone.value;
    let numberVal = inputNumber.value;

    emptyInputs = Array.from(formInputs).filter((input) => input.value === "");

    //Проверка на пустое поле
    formInputs.forEach(function (input, errorText) {
        if (input.value === "") {
            console.log("err");
            input.classList.add("error");
            errorText.classList.add("visible");
        } else {
            input.classList.remove("error");
            errorText.classList.remove("visible");
        }
    });

    //проверка email
    if (!validateEmail(emailVal)) {
        console.log("not validate email");
        inputEmail.classList.add("error");
        errorText.classList.add("visible");

        return false;
    } else {
        inputEmail.classList.remove("error");
        errorText.classList.remove("visible");
    }

    //проверка номера телефона
    if (!validatePhone(phoneVal)) {
        console.log("not validate phone");
        inputPhone.classList.add("error");
        return false;
    } else {
        inputPhone.classList.remove("error");
    }

    // проверка числа
    // if (!validateNumber(numberVal)) {
    //   console.log('not validate Number');
    //   numberVal.classList.add('error');
    //    return false;
    // } else {
    //   numberVal.classList.remove('error');
    // }

    if (emptyInputs.length !== 0) {
        console.log("inputs not filled");
        return false;
    }

    //проверка чекбокса
    if (!inputCheckbox.checked) {
        console.log("checkbox not checked");
        lableCheckbox.classList.add("error");
        return false;
    } else {
        lableCheckbox.classList.remove("error");
        modalView.classList.add("active");
    }
    event.target.reset();

    modalView.addEventListener("click", function () {
        modalView.classList.remove("active");
    });
};

// маска для номера телефона
window.addEventListener("DOMContentLoaded", function () {
    [].forEach.call(document.querySelectorAll(".tel"), function (input) {
        var keyCode;
        function mask(event) {
            event.keyCode && (keyCode = event.keyCode);
            var pos = this.selectionStart;
            if (pos < 3) event.preventDefault();
            var matrix = "+7 (___) ___ ____",
                i = 0,
                def = matrix.replace(/\D/g, ""),
                val = this.value.replace(/\D/g, ""),
                new_value = matrix.replace(/[_\d]/g, function (a) {
                    return i < val.length
                        ? val.charAt(i++) || def.charAt(i)
                        : a;
                });
            i = new_value.indexOf("_");
            if (i != -1) {
                i < 5 && (i = 3);
                new_value = new_value.slice(0, i);
            }
            var reg = matrix
                .substr(0, this.value.length)
                .replace(/_+/g, function (a) {
                    return "\\d{1," + a.length + "}";
                })
                .replace(/[+()]/g, "\\$&");
            reg = new RegExp("^" + reg + "$");
            if (
                !reg.test(this.value) ||
                this.value.length < 5 ||
                (keyCode > 47 && keyCode < 58)
            )
                this.value = new_value;
            if (event.type == "blur" && this.value.length < 5) this.value = "";
        }

        input.addEventListener("input", mask, false);
        input.addEventListener("focus", mask, false);
        input.addEventListener("blur", mask, false);
        input.addEventListener("keydown", mask, false);
    });
});
