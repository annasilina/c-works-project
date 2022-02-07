const submitButtons = document.querySelectorAll('.form__button-submit');
const applicationForms = document.querySelectorAll('.form__application');

function changeButtonValue(buttons) {
	buttons.forEach(button => {
		if (document.documentElement.clientWidth < 400) {
		button.textContent = '✌️'
	} else {
		button.textContent = 'Отремонтируйте камеру ✌';
	}
	});
}

changeButtonValue(submitButtons);

window.addEventListener('resize', function() {
	changeButtonValue(submitButtons);
});


applicationForms.forEach(form => {
	form.addEventListener('change', function() {
		const formSubmitButton = form.querySelector('.form__button-submit');

		if (document.documentElement.clientWidth > 400) {
			formSubmitButton.textContent = 'Круто, спасибо за доверие!';
		}
	});
});
