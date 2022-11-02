'use strict';

const inputName = document.querySelector('.name');
const inputEmail = document.querySelector('.email');
const inputSubject = document.querySelector('.subject');
const btn = document.querySelector('.btn');
const errorMsg = document.querySelector('.msg');
const tasks = document.querySelector('.task');

btn.addEventListener('click', e => {
	e.preventDefault();

	const nameValue = inputName.value;
	const emailValue = inputEmail.value;
	const subjectValue = inputSubject.value;

	if (nameValue === '' || emailValue === '' || subjectValue === '') {
		errorMsg.textContent = 'Please fill the field required!';
		errorMsg.classList = 'msg-field';

		setTimeout(() => {
			errorMsg.textContent = '';
			errorMsg.classList = '';
		}, 2000);

		return;
	}

	// add new element
	const li = document.createElement('li');
	li.classList = 'task';

	li.innerHTML = `<b class="bg">Name:</b> ${nameValue} <br/> <b>Email:</b> ${emailValue} <br/> <b>Subject:</b> ${subjectValue}`;

	li.classList.add('bg');

	tasks.append(li);

	inputName.value = '';
	inputEmail.value = '';
	inputSubject.value = '';
});
