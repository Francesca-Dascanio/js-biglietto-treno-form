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

// Chiedere all'utente nome e cognome
const nome = document.getElementById('nome');
console.log(nome);
console.log(typeof nome);
console.log(nome.value);

// Chiedere all'utente km
const km = document.getElementById('km');
console.log(typeof km);

// let numberKm = km.value;
// console.log(typeof numberKm);
// numberKm = parseInt(numberKm);
// console.log(typeof numberKm);

// Chiedere all'utente se è maggiorenne o no
const age = document.getElementById('age');
console.log(age);
console.log(typeof age);
console.log("L'utente rientra nella fascia di età: ", age);


// All'evento click sul bottone "genera" controlla in console cosa ha inserito utente
const bottoneGenera = document.getElementById('bottone-genera');
console.log(bottoneGenera);

bottoneGenera.addEventListener('click',
    function() {
        console.log(nome.value);
        console.log(km.value);
        console.log(age.value);

        // Calcola prezzo biglietto rispetto a Km indicati dall'utente
        numberKm = km.value;
        numberKm = parseInt(numberKm);
        console.log(numberKm);
        let priceKm = (numberKm * 0.21);
        console.log('Il prezzo per i chilometri indicati è', (numberKm * 0.21));

        if (age.value == 'minorenne') {
            priceKm = (numberKm * 0.21) * 0.8;
            console.log('Il prezzo scontato per i minorenni è: ', priceKm);
        }
        else if (age.value == 'anziano') {
            priceKm = (numberKm * 0.21) * 0.6;
            console.log('Il prezzo scontato per gli over 65 è: ', priceKm);
        }
        else if (age.value == 'maggiorenne') {
            priceKm = numberKm * 0.21;
            console.log('Il prezzo per i maggiorenni è: ', priceKm);
        }
    }
);


