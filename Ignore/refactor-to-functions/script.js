// Funkcijai ir jāveic viens uzdevums, jo tad tā spēs
// uzdevumu paveikt labi.
// 1. Refaktorē kodu - no zemāk redzamā koda izveido 4 funkcijas.
// 2. Tā kā refaktorēšana nedrīkst mainīt rezultātu,
// neaizmirsti izsaukt funkcijas.
// 3. Dokumentē katru no tām, izmantojot JSDoc
// 4. Izveido dokumentāciju!

const pirmaisSkaitlis = 5;
const otraisSkaitlis = 4;


/**
 * Summa starp 2 skaitļiem
 * @param {int} pirmaisSkaitlisFunc - Pirmais skaitlis, kas tiks summēts.
 * @param {int} otraisSkaitlisFunc - Otrais skaitlis, kas tiks summēts.
 */
function summa(pirmaisSkaitlisFunc, otraisSkaitlisFunc) {
        let summaFunc = pirmaisSkaitlisFunc+otraisSkaitlisFunc;
        console.log(pirmaisSkaitlisFunc + " + " + otraisSkaitlisFunc + " = " + summaFunc);
}
summa(pirmaisSkaitlis, otraisSkaitlis);



/**
 * Starpība starp 2 skaitļiem
 * @param {int} pirmaisSkaitlisFunc - Pirmais skaitlis, no kura atņems.
 * @param {int} otraisSkaitlisFunc - Otrais skaitlis, cik atņems no pirmā.
 */
 function starpiba(pirmaisSkaitlisFunc, otraisSkaitlisFunc) {
    let starpibaFunc = pirmaisSkaitlisFunc-otraisSkaitlisFunc;
    console.log(pirmaisSkaitlisFunc + " - " + otraisSkaitlisFunc + " = " + starpibaFunc);
}
starpiba(pirmaisSkaitlis, otraisSkaitlis);




/**
 * Reizinajums starp 2 skaitļiem
 * @param {int} pirmaisSkaitlisFunc - Pirmais skaitlis, kuru reizina.
 * @param {int} otraisSkaitlisFunc - Otrais skaitlis, uz cik reizēm reizina.
 */
 function reizinajums(pirmaisSkaitlisFunc, otraisSkaitlisFunc) {
    let reizinajumsFunc = pirmaisSkaitlisFunc*otraisSkaitlisFunc;
    console.log(pirmaisSkaitlisFunc + " * " + otraisSkaitlisFunc + " = " + reizinajumsFunc);
}
reizinajums(pirmaisSkaitlis, otraisSkaitlis);



/**
 * Dalijums starp 2 skaitļiem
 * @param {int} pirmaisSkaitlisFunc - Pirmais skaitlis, kuru dala.
 * @param {int} otraisSkaitlisFunc - Otrais skaitlis, pa cik daļām dala.
 */
 function dalijums(pirmaisSkaitlisFunc, otraisSkaitlisFunc) {
    let reizinajumsFunc = pirmaisSkaitlisFunc/otraisSkaitlisFunc;
    console.log(pirmaisSkaitlisFunc + " / " + otraisSkaitlisFunc + " = " + reizinajumsFunc);
}
dalijums(pirmaisSkaitlis, otraisSkaitlis);

/*
const summa = pirmaisSkaitlis + otraisSkaitlis;
const starpiba = pirmaisSkaitlis - otraisSkaitlis;
const reizinajums = pirmaisSkaitlis * otraisSkaitlis;
const dalijums = pirmaisSkaitlis / otraisSkaitlis;

console.log(pirmaisSkaitlis + " + " + otraisSkaitlis + " = " + summa);
console.log(pirmaisSkaitlis + " - " + otraisSkaitlis + " = " + starpiba);
console.log(pirmaisSkaitlis + " * " + otraisSkaitlis + " = " + reizinajums);
console.log(pirmaisSkaitlis + " / " + otraisSkaitlis + " = " + dalijums);
*/