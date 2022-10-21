const eleName = document.querySelector('#name');
const eleKm = document.querySelector('#km');
const eleAge = document.querySelector('#age');
const eleBox = document.querySelector('box_info');
const eleBoxTicket = document.querySelector('.box_ticket');
const eleConferme = document.querySelector('.btn-success');
const eleDetelete = document.querySelector('.btn-danger');

eleConferme.addEventListener('click', function () {
    const Km = parseFloat(eleKm.value);
    const basePrice = parseFloat(Km * 0.21); 
    const age = eleAge.value;
    let discount = 0;

    if (age === '.min') {
        discount = 20;
    } else if (age === '.over') {
        discount = 40;
    }

    let totalPrice = basePrice - basePrice * discount / 100;
    totalPrice = parseFloat(totalPrice.toFixed(2));
    eleBoxTicket.innerHTML = (`Questo è il prezzo del tuo biglietto: ${totalPrice}€. Fai buon viaggio!` );
});

eleDetelete.addEventListener('click', function () {
    document.location.reload();
});