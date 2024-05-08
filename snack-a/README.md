scrivere una funzione contaElementi() che, dato un array in input, restituisca il numero di elementi presenti nell'array

// Inizio programma--funzione contaElementi()

//--- all interno di contaElementi()---//

        user = prompt( inserisci dato );
        array = 0;

        //ciclo do while//

        //finchè un dato 
        while (user !== null){
            array.push(user) --> aggiungere
        }
    
    //estraiamo la lunghezza dell array
    return.array.lenght

//---fine funzione
    //creiamo una variabile che racchiuda la funzione
    let elementsNumber = contaElementi()
    console.log(elementsNumber);


function contaElementi() {
    let userInput = prompt("Inserisci un dato:");

    // Array dove saranno inseriti gli elementi
    let myArray = [];

    // I dati verranno inseriti nel prompt finché non premi annulla
    while (userInput !== null) {
        // Aggiungiamo l'elemento all'array
        myArray.push(Number(userInput));  
        userInput = prompt("Continua a inserire elementi o premi 'Annulla' per terminare");
    }

    return myArray.length;
}

let elementsNumber = contaElementi();
console.log(elementsNumber);