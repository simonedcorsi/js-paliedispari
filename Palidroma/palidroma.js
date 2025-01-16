// Palidroma Chiedere all’utente di inserire una parola Creare una funzione per capire se la parola inserita è palindroma

let parola = prompt( "Inserisci una parola" ).toLowerCase()

console.log(`la parola è: ${parola}`)

let parolaInversa = ""

function palindroma(){
    for(let i = parola.length -1; i >= 0; i--){

        parolaInversa += parola.charAt(i)
    }

if( parola === parolaInversa ){
    console.log( `La parola ${parola} e ${parolaInversa} è : palindroma` )
} else {
    console.log( `La parola ${parola} e ${parolaInversa} non è : palindroma` )
}

}

palindroma()