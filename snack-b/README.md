snack-b
scrivere una funzione trovaIndice() che, dati un array e un elemento in input, restituisca la posizione in cui si trova l'elemento all'interno dell'array; se l'elemento non è presente nell'array, allora la funzione deve restituire -1

//scrivere un array che riceva un input

// Inizializza un array con alcuni valori predefiniti
let myArray = [1, 2, 3, 4, 5];

// Ciclo while che continua fino a quando l'utente non preme "Annulla" nel prompt
while (true) {
    // Chiede all'utente di inserire un elemento e memorizza l'input nell variabile 'userInput'
    let userInput = prompt("Inserisci un elemento all'interno dell'array");

    // Se l'utente preme "Annulla", esce dal ciclo
    if (userInput === null)
        break;

    // Converte l'input dell'utente in un numero e lo aggiunge all'array 'myArray'
    myArray.push(Number(userInput));
}

// Stampa la lunghezza dell'array 'myArray'
console.log("Lunghezza dell'array:", myArray.length);

// Stampa il contenuto dell'array 'myArray'
console.log("Contenuto dell'array:", myArray);

// Definisce una funzione 'trovaIndice' che cerca un elemento all'interno di un array e restituisce il suo indice
function trovaIndice(array, elemento) {
    // Scansiona ogni elemento dell'array
    for (let i = 0; i < array.length; i++) {
        // Se l'elemento corrente è uguale a quello cercato, restituisce l'indice
        if (array[i] === elemento) {
            return i;
        }
    }
    // Se l'elemento non è presente nell'array, restituisce -1
    return -1;
}

// Chiede all'utente di inserire un elemento da cercare nell'array
let userPrompt = prompt("Inserisci un elemento da cercare nell'array");

// Chiama la funzione 'trovaIndice' passando 'myArray' e l'elemento inserito dall'utente, quindi memorizza l'indice restituito
let indice = trovaIndice(myArray, Number(userPrompt));

// Se l'elemento è presente nell'array, stampa il suo indice
if (indice !== -1) {
    console.log("L'elemento", userPrompt, "si trova all'indice:", indice);
} 
// Altrimenti, stampa un messaggio che indica che l'elemento non è presente nell'array
else {
    console.log("L'elemento", userPrompt, "non è presente nell'array.");
}

