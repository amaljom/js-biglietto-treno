const userAge=parseInt( prompt('inserisci la tua età') );
const userDistance=parseInt( prompt('inserisci quanti km vuoi percorrere') );
console.log(userAge, userDistance);

const pricePerKm= 0.21;
let totalPrice= pricePerKm;
console.log(totalPrice)
totalPrice= totalPrice * userDistance;

if( userAge < 18){
    const discount= ((totalPrice * 20) / 100);
    totalPrice=totalPrice-discount;
    
} 

else if( userAge > 65){
        const discount= ((totalPrice * 40) / 100);
        totalPrice=totalPrice-discount;
        
} 

// ? arrotndiamo a due cifre max dopo la virgola

totalPrice= totalPrice.toFixed(2);
console.log(totalPrice);

document.getElementById('costo-biglietto').innerHTML = totalPrice;