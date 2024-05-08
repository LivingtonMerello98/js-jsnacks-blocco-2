snack-b
scrivere una funzione trovaIndice() che, dati un array e un elemento in input, restituisca la posizione in cui si trova l'elemento all'interno dell'array; se l'elemento non è presente nell'array, allora la funzione deve restituire -1

//scrivere un array che riceva un input
--let array= [];
 
 //input in entrata con un ciclo while
 while (true){
    //input in entrata
    let userPrompt = prompt("inserisci un elemento all'interno dell'array");

    //uscita dalla condizione
    if(userPrompt === null)
    break;

    //aggiunta dell input all'interno dell'array
    array.push(userPrompt);

 }

 console.log(array.lenght);

//scrivere una funzione trovaIndice()
