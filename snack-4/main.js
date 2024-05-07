// Crea due array che hanno un numero di elementi diversi.
// Aggiungi elementi casuali all’array che ha meno elementi,
// fino a quando ne avrà tanti quanti l’altro.


//arrayLIst
let myArray1 = ['1','2','3','4','5'];
let myArray2 = ['1','2','3','4','5','6','7','8','9','10'];



console.log(myArray1.length);
console.log(myArray2.length);

// Ciclo while per aggiungere elementi all'array più corto
while(myArray1.length !== myArray2.length){
    // Condiione per verificare quale array è più corto
    if (myArray1.length < myArray2.length) {
        // aggiunta un elemento casuale all'array1
        myArray1.push((Math.floor(Math.random() * 10) + 1).toString());
    } else {
        //  aggiunta un elemento casuale all'array2
        myArray2.push((Math.floor(Math.random() * 10) + 1).toString());
    }
}

console.log("myArray1:", myArray1);
console.log("myArray2:", myArray2);
