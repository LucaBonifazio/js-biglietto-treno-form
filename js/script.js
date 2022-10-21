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

    if (age === 'min') {
        discount = 20;
    } else if (age === 'over') {
        discount = 40;
    }

    if (eleName.value === '' || eleKm.value === '' || eleAge.value === 'none'){
        eleBoxTicket.innerHTML = (`Compila il form per generare il tuo biglietto!` );
    } else {
        let totalPrice = basePrice - basePrice * discount / 100;
        totalPrice = parseFloat(totalPrice.toFixed(2));
        eleBoxTicket.innerHTML = (`Prezzo del biglietto: ${totalPrice} €.` );
        
        const fullName = eleName.value;
        const userName = document.querySelector('.ticket_name');
        userName.innerHTML = (`${fullName}` );
    
        const eleWagon = document.querySelector('.wagon');
        numberWagon = Math.floor(Math.random() * 100);
        eleWagon.innerHTML = (`Vagone: ${numberWagon}` );
    
        const eleCode = document.querySelector('.code');
        numberCode = Math.floor(Math.random() * 10000000);
        eleCode.innerHTML = (`Codice CP: n°${numberCode}` );
    
        const eleSweet = document.querySelector('.sweet');
        eleSweet.innerHTML = (`Buon viaggio!` );
    }

});

eleDetelete.addEventListener('click', function () {
    document.location.reload();
});


