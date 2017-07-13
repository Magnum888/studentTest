function showError(container, errorMessage) {
    container.className = 'error';
    var msgElem = document.createElement('span');
    msgElem.className = "error-message";
    msgElem.innerHTML = errorMessage;
    container.appendChild(msgElem);
}

function resetError(container) {
    container.className = '';
    if (container.lastChild.className == "error-message") {
        container.removeChild(container.lastChild);
    }
}

function validate(form) {
    var elems = form.elements;

    resetError(elems.surname.parentNode);
    if (!elems.surname.value) {
        showError(elems.surname.parentNode, '  Поле Фамилия обязательно к заполнению');
    }
    resetError(elems.username.parentNode);
    if (!elems.username.value) {
        showError(elems.username.parentNode, '  Поле Имя обязательно к заполнению');
    }
    resetError(elems.secondname.parentNode);
    if (!elems.secondname.value) {
        showError(elems.secondname.parentNode, '  Поле Отчество обязательно к заполнению');
    }
    resetError(elems.birthday.parentNode);
    if (!elems.birthday.value) {
        showError(elems.birthday.parentNode, '  Поле Дата рождения обязательно к заполнению');
    }
    resetError(elems.acceptance.parentNode);
    if (!elems.acceptance.value) {
        showError(elems.acceptance.parentNode, '  Поле Дата поступления обязательно к заполнению');
    }
}