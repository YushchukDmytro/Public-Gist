window.addEventListener('DOMContentLoaded', () => {
	const sum = document.querySelector('#sum'),
		button = document.querySelector('.button');


	button.addEventListener('click', (e) => {
		e.preventDefault();
		sum.innerHTML = (+document.querySelector('#your__money').value / +document.querySelector('#bitcoin__price').value).toFixed(7);

	});
});