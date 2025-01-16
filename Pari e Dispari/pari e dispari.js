// Pari e Dispari L’utente sceglie pari o dispari e inserisce un numero da 1 a 5. Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione). Sommiamo i due numeri Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione) Dichiariamo chi ha vinto. 

function numeriRandom(min,max) {
    let random = Math.floor(Math.random() * max) + min;
    return random
}

function pariODispari(x) {

    if (x % 2 === 0) {
        risultatoPariDispari = "pari"
        return console.log(`Il numero scelto: ${x} è pari`)
    } else {
        risultatoPariDispari = "dispari"
        return console.log(`Il numero scelto: ${x} è  dispari`)
    }

}

let sceltaUtente = prompt( "Scegli fra la parola Pari o Dispari").toLowerCase()
let numeroUtente = parseInt(prompt("inserisci un numero da 1 a 5"))
let numeroComputer = numeriRandom(1, 5)
let sommaNumeri = numeroUtente + numeroComputer
let risultatoPariDispari = ""

pariODispari(sommaNumeri)

if( sceltaUtente === risultatoPariDispari){
    console.log("complimenti hai vinto")
}else{
    console.log("hai perso")
}