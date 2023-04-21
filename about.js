console.log("hello world");



function handleSubmit(evt) {
	evt.preventDefault();
	
	// console.log('form submit');
	alert('The form has been submitted succesfully.')
}

function complimentMessage() {
	alert('You are cuter than the duck!')
}

let form = document.querySelector('#contact');
const duck = document.getElementById('duck')

form.addEventListener('submit', handleSubmit);
duck.addEventListener('mouseover', complimentMessage);