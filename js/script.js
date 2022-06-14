const userAge=parseInt( prompt('inserisci la tua età') );
const userDistance=parseInt( prompt('inserisci quanti km vuoi percorrere') );
console.log(userAge, userDistance);

const pricePerKm= 0.21;
let totalPrice= pricePerKm;
console.log(totalPrice)

if( userAge < 18){
    totalPrice= pricePerKm * userDistance;
    const discount= ((totalPrice * 20) / 100);
    totalPrice=totalPrice-discount;
    console.log(totalPrice);
} else if( userAge > 65){
        totalPrice= pricePerKm * userDistance;
        const discount= ((totalPrice * 40) / 100);
        totalPrice=totalPrice-discount;
        console.log(totalPrice);
} else{
        totalPrice= pricePerKm * userDistance;
        console.log(totalPrice);
}


document.getElementById('costo-biglietto').innerHTML = totalPrice;