'use strict'

console.log("sono connesso");

function contaElementi() {

    //valore richiesto all'utente
    let userInput = prompt("Inserisci un dato:");

    // inizializiamo una variabile in let vuota
    let myArray = [];

    // finchè non premi nulla i dati veranno inseriti nell array
    while (userInput !== null) {
        // Aggiungiamo l'elemento all'array
        myArray.push(Number(userInput));  
        userInput = prompt("Continua a inserire elementi o premi 'Annulla' per terminare");
    }
    //estraiamo la lunghezza dell array
    return myArray.length;
}

//salviamo la funzione all'interno di una variabile e debuggiamo
let elementsNumber = contaElementi();
console.log(elementsNumber);