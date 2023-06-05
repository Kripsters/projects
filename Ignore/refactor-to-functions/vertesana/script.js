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
 * saskaita skaitlus
 * @param {RailijInteger} pirmaisSkaitlis -- pirmais skaitlis 
 * @param {RailijInteger} otraisSkaitlis -- otrais skaitlis
 */
function skaitluSumma(pirmaisSkaitlis, otraisSkaitlis) {
    const summa = pirmaisSkaitlis + otraisSkaitlis;
    console.log(pirmaisSkaitlis + " + " + otraisSkaitlis + " = " + summa);
}
/**
 * atnem otro skaitli no pirma
 * @param {RailijInteger} pirmaisSkaitlis -- pirmais skaitlis
 * @param {RailijInteger} otraisSkaitlis -- otrais skaitlis
 */
function skaitluStarpiba(pirmaisSkaitlis, otraisSkaitlis) {
    const starpiba = pirmaisSkaitlis - otraisSkaitlis;
    console.log(pirmaisSkaitlis + " - " + otraisSkaitlis + " = " + starpiba);
}
/**
 * reizina skaitli
 * @param {RailijInteger} pirmaisSkaitlis -- pirmais skaitlis
 * @param {RailijInteger} otraisSkaitlis -- otrais skaitlis
 */
function skaitluReizinajums(pirmaisSkaitlis, otraisSkaitlis) {
    const reizinajums = pirmaisSkaitlis * otraisSkaitlis;
    console.log(pirmaisSkaitlis + " * " + otraisSkaitlis + " = " + reizinajums);
}
/**
 * dala skaitli
 * @param {RailijInteger} pirmaisSkaitlis -- pirmais skaitlis
 * @param {RailijInteger} otraisSkaitlis -- otrais skaitlis
 */
function skaitluDalijums(pirmaisSkaitlis, otraisSkaitlis) {
    const dalijums = pirmaisSkaitlis / otraisSkaitlis;
    console.log(pirmaisSkaitlis + " / " + otraisSkaitlis + " = " + dalijums);
}

skaitluSumma(pirmaisSkaitlis, otraisSkaitlis);
skaitluStarpiba(pirmaisSkaitlis, otraisSkaitlis);
skaitluReizinajums(pirmaisSkaitlis, otraisSkaitlis);
skaitluDalijums(pirmaisSkaitlis, otraisSkaitlis);