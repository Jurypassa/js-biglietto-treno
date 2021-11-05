const Km = prompt("inserisci numero Km");
console.log(Km);

const età = prompt("inserisci la tua età");
console.log(età);

let prezzo = 0.21;

const prezzoKm = 0.21 * Km;
console.log(prezzoKm);

if (età < 18){

     let U18 = prezzoKm - (prezzoKm * 20 / 100);
     U18 = U18.toFixed(2);
     document.getElementById("prova").innerHTML = U18;
     console.log(U18);

}   if (età > 65){

    let O65 = prezzoKm - (prezzoKm * 40 / 100);
    O65 = O65.toFixed(2);
    document.getElementById("prova").innerHTML = O65;
    console.log(O65);
}

