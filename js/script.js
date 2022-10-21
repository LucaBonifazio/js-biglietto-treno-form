const eleName = document.querySelector('#name');
const eleKm = document.querySelector('#km');
const eleAge = document.querySelector('#age');
const eleBox = document.querySelector('box_info')
const eleConferme = document.querySelector('.btn-success');
const eleBoxTicket = document.querySelector('.box_ticket')
const Km = parseFloat();

const basePrice = parseFloat(Km * 0.21); 
let discount = 0;

if (age < 18) {
    discount = 20
} else if (age >= 65) {
    discount = 40
}

let totalPrice = basePrice - basePrice * discount / 100;
totalPrice = parseFloat(totalPrice.toFixed(2));

eleConferme.addEventListener('click', function () {
	console.log('Conferma cliccata');
	eleBoxTicket.classList.add('box_ticket');
});