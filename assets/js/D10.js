/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Se sei in difficoltà puoi chiedere aiuto a un Teaching Assistant
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per farlo puoi utilizzare il terminale Bash, quello di VSCode o quello del tuo sistema operativo (se utilizzi macOS o Linux)
*/

// JS Basics
console.log("******************************************")
console.log("JS Basics")
console.log("******************************************")
console.log("")
/* ESERCIZIO A
  Crea una variabile chiamata "sum" e assegnaci il risultato della somma tra i valori 10 e 20.
*/
console.log("ESERCIZIO A")
console.log("")

  
let sum;
sum = 10 + 20; 
console.log(sum);
 

console.log("")
/* ESERCIZIO B
  Crea una variabile chiamata "random" e assegnaci un numero casuale tra 0 e 20 (deve essere generato dinamicamente a ogni esecuzione).
*/
console.log("ESERCIZIO B")
console.log("")

  
let random;
random = Math.round(Math.random() * 20);
console.log(random);
 

console.log("")
/* ESERCIZIO C
  Crea una variabile chiamata "me" e assegnaci un oggetto contenente le seguenti proprietà: name = il tuo nome, surname = il tuo cognome, age = la tua età.
*/
console.log("ESERCIZIO C")
console.log("")

  
let me;
me = {
  name: 'Timoteo',
  surname: 'Capurro',
  age: 42
}
console.log(me);
 

console.log("")
/* ESERCIZIO D
  Crea del codice per rimuovere programmaticamente la proprietà "age" dall'oggetto precedentemente creato.
*/
console.log("ESERCIZIO D");
console.log("")

  
delete(me.age)
console.log(me);
 

console.log("")
/* ESERCIZIO E
  Crea del codice per aggiungere programmaticamente all'oggetto precedentemente creato un array chiamato "skills", contenente i linguaggi di programmazione che conosci.
*/
console.log("ESERCIZIO E")
console.log("")
  
me.skills = ['Javascript (Anche se è un linguaggio di scripting :-)', 'PHP (Pure questo è di scripting... hahahah', 'Visual Basic .NET'];
console.log(me);
 

console.log("")
/* ESERCIZIO F
  Crea un pezzo di codice per aggiungere un nuovo elemento all'array "skills" contenuto nell'oggetto "me".
*/
console.log("ESERCIZIO F");
console.log("")
  
  
me.skills.push('Java... Spero fra poco');
console.log(me);
 
  
console.log("")
/* ESERCIZIO G
  Crea un pezzo di codice per rimuovere programmaticamente l'ultimo elemento dall'array "skills" contenuto nell'oggetto "me".
*/
console.log("ESERCIZIO F");
console.log("")
    
  
me.skills.pop();
console.log(me);
 
    
console.log("")
console.log("******************************************")
// Funzioni
console.log("Funzioni")
console.log("******************************************")
console.log("")
/* ESERCIZIO 1
  Crea una funzione chiamata "dice": deve generare un numero casuale tra 1 e 6.
*/
console.log("ESERCIZIO 1");
console.log("")
      
  
const dice = (a,b) => Math.round((Math.random() * (b - a)) + 1);
console.log(dice(1,6));

      
console.log("")
/* ESERCIZIO 2
  Crea una funzione chiamata "whoIsBigger" che riceve due numeri come parametri e ritorna il maggiore dei due.
*/
console.log("ESERCIZIO 2");
console.log("")

  
const whoIsBigger = (x,y) => {
  if (x > y) {
    return `${x} è maggiore di ${y}`;
  } else if (x === y) {
    return `Attenzione! hai inserito due numeri uguali`;
  } else {
    return `${y} è maggiore di ${x}`;
  }
}
console.log(whoIsBigger(25,20));
 

console.log("")
/* ESERCIZIO 3
  Crea una funzione chiamata "splitMe" che riceve una stringa come parametro e ritorna un'array contenente ogni parola della stringa.

  Es.: splitMe("I love coding") => ritorna ["I", "Love", "Coding"]
*/
console.log("ESERCIZIO 3");
console.log("")

  
const splitMe = (str) => { 
  const myArr = [];
  for (let i = 0; i < str.split(" ").length; i++) {
    myArr.push(str.split(" ")[i].charAt(0).toUpperCase() + str.split(" ")[i].slice(1))
  }  
return myArr;
}
console.log(splitMe("I love coding"))
 

console.log("")
/* ESERCIZIO 4
  Crea una funzione chiamata "deleteOne" che riceve una stringa e un booleano come parametri.
  Se il valore booleano è true la funzione deve ritornare la stringa senza il primo carattere, altrimenti la deve ritornare senza l'ultimo.
*/
console.log("ESERCIZIO 4");
console.log("")

  
const deleteOne = (str, b) => (b === true) ? str.slice(1) : str.slice(0, -1);
console.log(deleteOne('Ciao sono io', true));
 

console.log("")
/* ESERCIZIO 5
  Crea una funzione chiamata "onlyLetters" che riceve una stringa come parametro e la ritorna eliminando tutte le cifre numeriche.

  Es.: onlyLetters("I have 4 dogs") => ritorna "I have dogs"
*/
console.log("ESERCIZIO 5");
console.log("")

  
const onlyLetters = str => {
  let myArr = [];
  for (const e of str.split(" ")) {
    if (isNaN(parseInt(e))) {
      myArr.push(e);
    }
  }
  return myArr.join(" ");
}
console.log(onlyLetters("I have 4 dogs 55 245 and 15 cats"));
 

console.log("")
/* ESERCIZIO 6
  Crea una funzione chiamata "isThisAnEmail" che riceve una stringa come parametro e ritorna true se la stringa è un valido indirizzo email.
*/
console.log("ESERCIZIO 6");
console.log("")

  
const isThisAnEmail = mail =>  {
  const eRegex = /^((?!\.)[\w\-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/gm;
  return eRegex.test(mail);
}
console.log(isThisAnEmail("miamail@cicciopasticcio.com"))
 

console.log("")
/* ESERCIZIO 7
  Scrivi una funzione chiamata "whatDayIsIt" che ritorna il giorno della settimana corrente.
*/
console.log("ESERCIZIO 7");
console.log("")
  
    
const whatDayIsIt = () => {
  const giorniSettimana = ['Domenica', 'Lunedì', 'Martedì', 'Mercoledì', 'Giovedì', 'Venerdì', 'Sabato'];
  const oggi = new Date();
  return giorniSettimana[oggi.getDay()]; 
}
console.log("Oggi è: " + whatDayIsIt());
 
console.log("")
/* ESERCIZIO 8
  Scrivi una funzione chiamata "rollTheDices" che riceve un numero come parametro.
  Deve invocare la precedente funzione dice() il numero di volte specificato nel parametro, e deve tornare un oggetto contenente una proprietà "sum":
  il suo valore deve rappresentare il totale di tutti i valori estratti con le invocazioni di dice().
  L'oggetto ritornato deve anche contenere una proprietà "values", contenente un array con tutti i valori estratti dalle invocazioni di dice().

  Example:
  rollTheDices(3) => ritorna {
      sum: 10
      values: [3, 3, 4]
  }
*/
console.log("ESERCIZIO 8");
console.log("")


const rollTheDices = n => {
  const myObj = {
    sum: 0,
    values: []
  }
    for (let i = 0; i < n; i++) {
      myObj.values.push(dice(1,6));
      myObj.sum = myObj.values.reduce((acc, val) => acc + val, 0);
  }
console.log(myObj)
}
rollTheDices(5);
 
console.log("")
/* ESERCIZIO 9
  Scrivi una funzione chiamata "howManyDays" che riceve una data come parametro e ritorna il numero di giorni trascorsi da tale data.
*/
console.log("ESERCIZIO 9");
console.log("")

const howManyDays = (date) => {
const daysDiff = Math.floor((new Date() - new Date(date)) / (1000 /* secondi */ * 60 /* minuti */ * 60 /* ore */ * 24));
return daysDiff;
}
console.log(howManyDays('2024-11-14'));
 
console.log("")
/* ESERCIZIO 10
  Scrivi una funzione chiamata "isTodayMyBirthday" che deve ritornare true se oggi è il tuo compleanno, falso negli altri casi.
*/
console.log("ESERCIZIO 10");
console.log("")

const isTodayMyBirthday = myBirthday => new Date(myBirthday).getMonth()+''+new Date(myBirthday).getDate() === new Date().getMonth()+''+new Date().getDate() ? true: false;
console.log(isTodayMyBirthday('1982-29-01')); 
 
console.log("")
// Arrays & Oggetti

// NOTA: l'array "movies" usato in alcuni esercizi è definito alla fine di questo file

/* Questo array viene usato per gli esercizi. Non modificarlo. */

const movies = [
  {
    Title: 'The Lord of the Rings: The Fellowship of the Ring',
    Year: '2001',
    imdbID: 'tt0120737',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_SX300.jpg',
  },

  {
    Title: 'The Lord of the Rings: The Return of the King',
    Year: '2003',
    imdbID: 'tt0167260',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNzA5ZDNlZWMtM2NhNS00NDJjLTk4NDItYTRmY2EwMWZlMTY3XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg',
  },
  {
    Title: 'The Lord of the Rings: The Two Towers',
    Year: '2002',
    imdbID: 'tt0167261',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNGE5MzIyNTAtNWFlMC00NDA2LWJiMjItMjc4Yjg1OWM5NzhhXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg',
  },
  {
    Title: 'Lord of War',
    Year: '2005',
    imdbID: 'tt0399295',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTYzZWE3MDAtZjZkMi00MzhlLTlhZDUtNmI2Zjg3OWVlZWI0XkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg',
  },
  {
    Title: 'Lords of Dogtown',
    Year: '2005',
    imdbID: 'tt0355702',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNDBhNGJlOTAtM2ExNi00NmEzLWFmZTQtYTZhYTRlNjJjODhmXkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg',
  },
  {
    Title: 'The Lord of the Rings',
    Year: '1978',
    imdbID: 'tt0077869',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BOGMyNWJhZmYtNGQxYi00Y2ZjLWJmNjktNTgzZWJjOTg4YjM3L2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg',
  },
  {
    Title: 'Lord of the Flies',
    Year: '1990',
    imdbID: 'tt0100054',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BOTI2NTQyODk0M15BMl5BanBnXkFtZTcwNTQ3NDk0NA@@._V1_SX300.jpg',
  },
  {
    Title: 'The Lords of Salem',
    Year: '2012',
    imdbID: 'tt1731697',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMjA2NTc5Njc4MV5BMl5BanBnXkFtZTcwNTYzMTcwOQ@@._V1_SX300.jpg',
  },
  {
    Title: 'Greystoke: The Legend of Tarzan, Lord of the Apes',
    Year: '1984',
    imdbID: 'tt0087365',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTM5MzcwOTg4MF5BMl5BanBnXkFtZTgwOTQwMzQxMDE@._V1_SX300.jpg',
  },
  {
    Title: 'Lord of the Flies',
    Year: '1963',
    imdbID: 'tt0057261',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BOGEwYTlhMTgtODBlNC00ZjgzLTk1ZmEtNmNkMTEwYTZiM2Y0XkEyXkFqcGdeQXVyMzU4Nzk4MDI@._V1_SX300.jpg',
  },
  {
    Title: 'The Avengers',
    Year: '2012',
    imdbID: 'tt0848228',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg',
  },
  {
    Title: 'Avengers: Infinity War',
    Year: '2018',
    imdbID: 'tt4154756',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg',
  },
  {
    Title: 'Avengers: Age of Ultron',
    Year: '2015',
    imdbID: 'tt2395427',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTM4OGJmNWMtOTM4Ni00NTE3LTg3MDItZmQxYjc4N2JhNmUxXkEyXkFqcGdeQXVyNTgzMDMzMTg@._V1_SX300.jpg',
  },
  {
    Title: 'Avengers: Endgame',
    Year: '2019',
    imdbID: 'tt4154796',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_SX300.jpg',
  },
]


/* ESERCIZIO 11
  Scrivi una funzione chiamata "deleteProp" che riceve un oggetto e una stringa come parametri; deve ritornare l'oggetto fornito dopo aver eliminato
  in esso la proprietà chiamata come la stringa passata come secondo parametro.
*/
console.log("ESERCIZIO 11");
console.log("")

const deleteProp = (myObj, propDel="") => {
  delete myObj[propDel]
  return myObj
}
console.log(deleteProp(movies[12], 'Poster'))
 
console.log("")
/* ESERCIZIO 12
  Scrivi una funzione chiamata "newestMovie" che trova il film più recente nell'array "movies" fornito.
*/
console.log("ESERCIZIO 12");
console.log("")

const firstFilm = (vArr, yearfilm = {Year: 0}) => {
  vArr.forEach(film => (film.Year >= yearfilm.Year ? yearfilm = film : ''));
  return yearfilm;
}
console.log(firstFilm(movies));
 
console.log("")
/* ESERCIZIO 13
  Scrivi una funzione chiamata countMovies che ritorna il numero di film contenuti nell'array "movies" fornito.
*/
console.log("ESERCIZIO 13");
console.log("")

const countMovies = (mArr, count=0) => {
  mArr.forEach(film => count++)
  return count;
}
console.log(`Il numero di film nell'array sono = ${countMovies(movies)}`);

/* 
Questa è una seconda soluzione

const countMovies = () => `Il numero di film nell'array sono = ${movies.length}`;
console.log(countMovies()) */ 
 
console.log("")
/* ESERCIZIO 14
  Scrivi una funzione chiamata "onlyTheYears" che crea un array con solamente gli anni di uscita dei film contenuti nell'array "movies" fornito.
*/
console.log("ESERCIZIO 14");
console.log("")

const onlyTheYears = (mArr, myArrYear=[]) => {
  mArr.map(film => myArrYear.push(film.Year));
  return myArrYear;
}  
console.log(onlyTheYears(movies));
 
console.log("")
/* ESERCIZIO 15
  Scrivi una funzione chiamata "onlyInLastMillennium" che ritorna solamente i film prodotto nel millennio scorso contenuti nell'array "movies" fornito.
*/
console.log("ESERCIZIO 15");
console.log("")

const onlyInLastMillennium = mArr => mArr.filter(film => film.Year < 2000); 
console.log(onlyInLastMillennium(movies)); 
 
console.log("")
/* ESERCIZIO 16
  Scrivi una funzione chiamata "sumAllTheYears" che ritorna la somma di tutti gli anni in cui sono stati prodotti i film contenuti nell'array "movies" fornito.
*/
console.log("ESERCIZIO 16");
console.log("")

const sumAllTheYears = mArr => mArr.reduce((totale, film) => totale + parseInt(film.Year), 0);
console.log(sumAllTheYears(movies));
 
console.log("")
/* ESERCIZIO 17
  Scrivi una funzione chiamata "searchByTitle" che riceve una stringa come parametro e ritorna i film nell'array "movies" fornito che la contengono nel titolo.
*/
console.log("ESERCIZIO 17");
console.log("")

const searchByTitle = (mArr, strSearch = "") => mArr.filter(film => film.Title.includes(strSearch)); 
console.log(searchByTitle(movies, 'Lord')); 
 
console.log("")
/* ESERCIZIO 18
  Scrivi una funzione chiamata "searchAndDivide" che riceve una stringa come parametro e ritorna un oggetto contenente due array: "match" e "unmatch".
  "match" deve includere tutti i film dell'array "movies" fornito che contengono la stringa fornita all'interno del proprio titolo, mentre "unmatch" deve includere tutti i rimanenti.
*/
console.log("ESERCIZIO 18");
console.log("")

const searchAndDivide = (strSearch = "") => {
  let match = [];
  let unmatch = [];
  for (let i = 0; i < movies.length; i++) {
    if(movies[i].Title.includes(strSearch)) {
      match.push(movies[i])
    } else {
      unmatch.push(movies[i])
    }
  }
  return match && unmatch;
}
console.log(searchAndDivide('Lord')); 
 
console.log("")
/* ESERCIZIO 19
  Scrivi una funzione chiamata "removeIndex" che riceve un numero come parametro e ritorna l'array "movies" fornito privo dell'elemento nella posizione ricevuta come parametro.
*/
console.log("ESERCIZIO 19");
console.log("")

const removeIndex = (n, myArr=[]) => {
  for (let i = 0; i < movies.length; i++) {
    if (i !== n) {
      myArr.push(movies[i])
    } 
  }
  return myArr;
}
console.log(removeIndex(9))
 
console.log("")
// DOM (nota: gli elementi che selezionerai non si trovano realmente nella pagina)

/* ESERCIZIO 20
  Scrivi una funzione per selezionare l'elemento dotato di id "container" all'interno della pagina.
*/
console.log("ESERCIZIO 20");
console.log("")

const selContainer = (container) => container = document.querySelector('#container')
console.log(selContainer())
 
console.log("")
/* ESERCIZIO 21
  Scrivi una funzione per selezionare ogni tag <td> all'interno della pagina.
*/
console.log("ESERCIZIO 21");
console.log("")

const selTd = td => td = document.getElementsByTagName('td')
console.dir(selTd())
 
console.log("")
/* ESERCIZIO 22
  Scrivi una funzione che, tramite un ciclo, stampa in console il testo contenuto in ogni tag <td> all'interno della pagina.
*/
console.log("ESERCIZIO 22");
console.log("")

const contTd = td => {
  td = document.querySelectorAll('td')
  let result = "";
  for (let i = 0; i < td.length; i++) {
    result = result + td[i].innerText + ' '
  }
  return 'Il contenuto dei td nella pagina html sono: ' + result;
}
console.log(contTd());
 
console.log("")
/* ESERCIZIO 23
  Scrivi una funzione per aggiungere un background di colore rosso a ogni link all'interno della pagina.
*/
console.log("ESERCIZIO 23");
console.log("")

const allRed = a => {
  a = document.getElementsByTagName('a')
  for (let i = 0; i < a.length; i++) {
    a[i].style.backgroundColor = 'red'
  }
}
allRed();
 
console.log("")
/* ESERCIZIO 24
  Scrivi una funzione per aggiungere un nuovo elemento alla lista non ordinata con id "myList".
*/
console.log("ESERCIZIO 24");
console.log("")

const addLi = (ul, li) => {
  ul = document.querySelector('#myList')
  li = document.createElement('li')
  li.innerText = 'Elemento 3 - creato in Javascript'
  ul.appendChild(li) 
} 
addLi()
 
console.log("")
/* ESERCIZIO 25
  Scrivi una funzione per svuotare la lista non ordinata con id "myList".
*/
console.log("ESERCIZIO 25");
console.log("")

const delLi = (ul, li) => {
  ul = document.getElementById('myList');
  li = myList.children;
  for (let i = li.length - 1; i >= 0; i--) {
      ul.removeChild(li[i]);
  }
}
delLi()
 
console.log("")
/* ESERCIZIO 26
  Scrivi una funzione per aggiungere ad ogni tag <tr> la classe CSS "test"
*/
console.log("ESERCIZIO 26");
console.log("")

const addClass = tr => {
  tr = document.querySelectorAll('tr');
  tr.forEach(ele => ele.classList.add('test'));
}
addClass();
 
console.log("")
// [EXTRA] JS Avanzato

/* ESERCIZIO 27
  Crea una funzione chiamata "halfTree" che riceve un numero come parametro e costruisce un mezzo albero di "*" (asterischi) dell'altezza fornita.

  Esempio:
  halfTree(3)

  *
  **
  ***

*/
console.log("ESERCIZIO 27");
console.log("")

const halfTree = h => {
  let tree = '';
  for (let i = 1; i <= h; i++) {
    tree += '*';
    for (let r = 0; r < i - h; r++) {
      tree += '*';
    }
    console.log(tree);
  }
} 
halfTree(10);
 
console.log("")
/* ESERCIZIO 28
  Crea una funzione chiamata "tree" che riceve un numero come parametro e costruisce un albero di "*" (asterischi) dell'altezza fornita.

  Esempio:
  tree(3)

    *
   ***
  *****

*/
console.log("ESERCIZIO 28");
console.log("")

const tree = h => {
  for (let i = 1; i <= h; i++) {
    let vuoto = '';
    for (let r = 0; r < h - i; r++) {
      vuoto += ' ';
    }
    let tree = '';
    for (let m = 0; m < (2 * i - 1); m++) {
      tree += '*';
    }
    console.log(vuoto + tree);
  }
}
tree(10);
 
console.log("")
/* ESERCIZIO 29
  Crea una funzione chiamata "isItPrime" che riceve un numero come parametro e ritorna true se il numero fornito è un numero primo.
*/
console.log("ESERCIZIO 29");
console.log("")

const isItPrime = n => {
  nPrimo = true;
  if (n <= 1) {
    nPrimo = false;
    return nPrimo;
  }
  for (let i = 2; i < n; i++) {
    if (n % i === 0) {
      nPrimo = false;
      return nPrimo;
    }
  }
  return nPrimo;
}
console.log(isItPrime(97))