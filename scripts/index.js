const submitButtons = document.querySelectorAll('.form__button-submit');
const applicationForms = document.querySelectorAll('.form_type_application');

//функция замены текста на кнопке формы в зависимости от ширины экрана клиента
function changeButtonValue(buttons) {
	buttons.forEach(button => {
		if (document.documentElement.clientWidth < 760) {
			button.textContent = '✌️'
		} else {
			button.textContent = 'Отремонтируйте камеру\u00A0 ✌️';
		}
	});
}

//вызываем функцию замены текста на кнопке при первой загрузке сайте
changeButtonValue(submitButtons);

//вешаем слушателя на изменение ширины экрана
window.addEventListener('resize', function() {
	changeButtonValue(submitButtons);
});

//функция проверки ввода email
function validateForm(value) {
	const indexAt = value.indexOf('@');
	const indexDot = value.lastIndexOf('.');

	return !(indexAt < 1 || indexDot < indexAt);
}

//проверяем для каждой формы корректность ввода email.
applicationForms.forEach(form => {
	const input = form.querySelector('.form__item_el_email');

	input.addEventListener('change', function() {
		if (validateForm(input.value) && document.documentElement.clientWidth > 759) {
			const formSubmitButton = form.querySelector('.form__button-submit');

			formSubmitButton.textContent = 'Круто, спасибо за доверие!';
		}
	});
});