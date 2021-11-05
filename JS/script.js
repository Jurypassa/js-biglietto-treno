const Km = prompt("inserisci numero Km");
console.log(Km);

const età = prompt("inserisci la tua età");
console.log(età);

let prezzo = 0.21

const prezzoKm = 0.21 * Km
console.log(prezzoKm);

if (età < 18){
     const U18 = prezzoKm - (prezzoKm * 20 / 100)
     console.log(U18);
}

if (età > 65){
    const O65 = prezzoKm - (prezzoKm * 40 / 100)
    console.log(O65);
}