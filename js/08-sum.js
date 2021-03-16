/*
Suskaičiuoti ką gausime susumavus skaičius intervale tarp (imtinai)

ATS: 
Intervale nuo 0 iki 4 suma yra 10.


0 - 4
10 - 14
20 - 24
-50 - 50
0 - 100
574 - 815
-70 - 30
0 - 0
0 - 999999999999 = astonomiskai didelis skaicius 
*/

const nuo = 0;
const iki = 10; 
let suma = 0;

if ( nuo <= iki) {
    for (let i =  nuo; i <= iki; i++) {
    suma  += i;
    }
} else {
    for (let i =  nuo; i <= iki; i++) {
        suma  += i;
        }
}

const ats = `Intervale nuo ${nuo}  iki ${iki} suma yra ${suma}.`;
console.log(ats);