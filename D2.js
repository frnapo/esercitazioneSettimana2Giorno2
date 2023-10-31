/* ESERCIZIO 1
 Scrivi un algoritmo per trovare il più grande tra due numeri interi.
*/

var num1 = 15;
var num2 = 20;

if (num1 > num2) {
  console.log("Il numero maggiore è: " + num1);
} else if (num1 < num2) {
  console.log("Il numero maggiore è: " + num2);
} else {
  console.log("I due numeri sono uguali");
}

/* ESERCIZIO 2
  Scrivi un algoritmo che mostri "not equal" in console se un numero intero fornito è diverso da 5.
*/

var num3 = 8;

if (num3 !== 5) {
  console.log("not equal");
}

/* ESERCIZIO 3
  Scrivi un algoritmo che mostri "divisibile per 5" in console se un numero fornito è perfettamente divisibile per 5 (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/

var numeroDivisibile = 10;

if (numeroDivisibile%5 == 0) {
  console.log(numeroDivisibile + " è perfettamente divisibile per 5");
} else {
  console.log(numeroDivisibile + " NON è perfettamente divisibile per 5");
}

/* ESERCIZIO 4
  Scrivi un algoritmo per verificare che, dati due numeri interi, il valore di uno di essi sia 8 oppure se la loro addizione/sottrazione sia uguale a 8.
*/

var primoIntero = 2;
var secondoIntero = 6;

if (primoIntero === 8 || secondoIntero === 8) {
  console.log("Uno dei due numeri è uguale a 8"); // o anche entrambi in questo caso
} else if ((primoIntero + secondoIntero) === 8) {
  console.log("La somma dei due numeri è uguale a 8");
} else if ((primoIntero - secondoIntero) === 8) {
  console.log("La sottrazione tra i due numeri è uguale a 8");
} else {
  console.log("Nessuno dei due numeri è uguale a 8. La loro somma o sottrazione non fa 8.");
}


/* ESERCIZIO 5
  Stai lavorando su un sito di e-commerce. Stai salvando il saldo totale del carrello dell'utente in una variabile "totalShoppingCart".
  C'è una promozione in corso: se il totale del carrello supera 50, l'utente ha diritto alla spedizione gratuita (altrimenti la spedizione ha un costo fisso pari a 10).
  Crea un algoritmo che determini l'ammontare totale che deve essere addebitato all'utente per il checkout.
*/

var totalShoppingCart = 50;
var shippingCost = 10;
var total;

if (totalShoppingCart > 50) {
  total = totalShoppingCart 
  console.log("Hai diritto alla spedizione gratuita spendi " + total);
} else {
  total = totalShoppingCart + shippingCost;
  console.log("Non hai diritto alla spedizione gratuita spendi " + total);
}

/* ESERCIZIO 6
  Stai lavorando su un sito di e-commerce. Oggi è il Black Friday e viene applicato il 20% su ogni prodotto.
  Modifica la risposta precedente includendo questa nuova promozione nell'algoritmo, determinando come prima se le spedizioni sono gratuite oppure no e e calcolando il totale.
*/

var totalShoppingCart = 50;
var shippingCost = 10;
var total;
var blackFriday = 0.8; // sconto 20% black friday

if ((totalShoppingCart * blackFriday) > 50) {
  total = totalShoppingCart 
  console.log("Hai diritto alla spedizione gratuita spendi " + total);
} else {
  total = totalShoppingCart + shippingCost;
  console.log("Non hai diritto alla spedizione gratuita spendi " + total);
}

/* ESERCIZIO 7
  Crea tre variabili, e assegna un valore numerico a ciascuna di esse.
  Utilizzando un blocco condizionale, crea un algoritmo per ordinarle secondo il loro valore, dal più alto al più basso.
  Alla fine mostra il risultato in console.
*/

var valore1 = 10;
var valore2 = 5;
var valore3 = 15;


if (valore1 >= valore2 && valore1 >= valore3) {
  if (valore2 >= valore3) {                          //if annidato
    console.log(valore1, valore2, valore3);          //esegue istruzione 1 altrimenti esegue l'else, se la condizione non rientra nel primo if controlla il secondo ed esegue l'istruzione2 altrimenti l'else etc..
  } else {
    console.log(valore1, valore3, valore2);
  }
} else if (valore2 >= valore1 && valore2 >= valore3) {
  if (valore1 >= valore3) {
    console.log(valore2, valore1, valore3);
  } else {
    console.log(valore2, valore3, valore1);
  }
} else {
  if (valore1 >= valore2) {
    console.log(valore3, valore1, valore2);
  } else {
    console.log(valore3, valore2, valore1);
  }
}

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 8
  Crea un algoritmo per verificare che un valore fornito sia un numero oppure no (suggerimento: cerca su un motore di ricerca "typeof").
*/

var valoreFornito = 10;

if (typeof valoreFornito === 'number') {
  console.log(valoreFornito + " è un numero");
} else {
  console.log(valoreFornito + " NON è un numero");
}

/* ESERCIZIO 9
  Crea un algoritmo per controllare se un numero fornito sia pari o dispari (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/

var x;

if (x%2 == 0) {
  messaggio = x + "e' pari";
} else if (x%2 == 1) {
  messaggio = x + "e' dispari";                   //fatto oggi a lezione
} else {
  messaggio = x + "non e' un numero";
}

/* ESERCIZIO 10
  Modifica la logica del seguente algoritmo in modo che mostri in console il messaggio corretto in ogni circostanza.
  let val = 7
  if (val < 10) {
      console.log("Meno di 10");
    } else if (val < 5) {
      console.log("Meno di 5");
    } else {
      console.log("Uguale a 10 o maggiore");
    }
*/

let val = 7;
if (val < 5) {
  console.log("Meno di 5");  
} else if (val < 10) {
  console.log("Meno di 10");
} else {
  console.log("Uguale a 10 o maggiore");
}

/* ESERCIZIO 11
  Fornito il seguente oggetto, scrivi del codice per aggiungere una proprietà "city", il cui valore sarà "Toronto".
*/

const me = {
  name: 'John',
  lastName: 'Doe',
  skills: ['javascript', 'html', 'css'],
}

  me.city = 'Toronto';

/* ESERCIZIO 12
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere la proprietà "lastName".
*/

  delete me.lastName;

/* ESERCIZIO 13
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere l'ultimo elemento della proprietà "skills".
*/
  me.skills.pop();

/* ESERCIZIO 14
  Scrivi del codice per creare un array inizialmente vuoto. Riempilo successivamente con i numeri da 1 a 10.
*/

var myArray = [];

myArray.push(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
console.log(myArray);



/* ESERCIZIO 15
  Scrivi del codice per sostituire l'ultimo elemento dell'array, ovvero il valore 10, con il valore 100.
*/

myArray[9] = 100;    // inizialmente usato myArray.pop();
                     //                    myArray.push(100);
