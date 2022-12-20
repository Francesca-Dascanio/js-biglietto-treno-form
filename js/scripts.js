/*
    1. Inizio
    2. Chiedere all'utente numero di chilometri
    3. Chiedere all'utente età
    4. Calcolare il prezzo di base
    5. Controllare se l'utente è <18 anni
    5a. Applica sconto del 20%
    6. Controllare se l'utente è >65 anni
    6a. Applica sconto del 40%
    7. Output finale: calcolo prezzo in relazione a età e chilometri
    8. Fine
*/

const nome = document.getElementById('nome');
console.log(nome);
console.log(typeof nome);
console.log(nome.value);

// Chiedere all'utente informazioni km - età
const km = document.getElementById('km');
console.log(km);
console.log(typeof km);
console.log(km.value);

let numberKm = km.value;
console.log(numberKm);
numberKm = parseInt(numberKm);
console.log(typeof numberKm);

const age = document.getElementById('age');
console.log(age);
console.log(typeof age);
console.log("L'utente rientra nella fascia di età: ", age);

const bottoneGenera = document.getElementById('bottone-genera');
console.log(bottoneGenera);

bottoneGenera.addEventListener('click',
    function() {
        console.log(nome.value);
        console.log(numberKm);
        console.log(typeof numberKm);
    }
);

