/*
IF STATMENT:

logikos sablonai
if () {} - logikos blokas -> {}
if () {} else {}
if () {} else if () {} ...... else if {}
if () {} else if () {}...... else if {}...... else {}

palyginimo operatoriai:
- visi: >, <, >=, <=, ==, !=, !, (griezciausia lygybe === / nelygybe !==)
- naudotni: >, <, >=, <=, ===, !==, !
- nenaudotini: ==, != (nes nera tikrinamas reiksmiu tipas)

loginiai operatoriai: && or || arba
 */

 const a = 7;
 const b = 4;

 if (a > b) {

    const ats = `${a} yra daugiau uz ${b}`;
    console.log(ats);
 }

 console.log('---------------');


 const c = 7;
 const d = 4;

 if (c < d) {
    const cdmaziau = `${c} yra maziau uz ${d}`;
    console.log(cdm0aziau);
 } else {
    const cdNeMaziau = `${c} yra NE maziau uz ${d}`;
    console.log(cdNeMaziau); 
 }

 console.log('------------');

 const e = '8';
 const f = 8;

 if(e !== f) {
     console.log('TAIP');
 } else {
     console.log('NE');
 }

 console.log('----------------');

 const cookiesAgreed = false;

 if (cookiesAgreed === false) {
     console.log(`Ismetame cookies sutikimo bloka 1`);

 }

 if (!cookiesAgreed) {
    console.log(`Ismetame cookies sutikimo bloka 2`);

}

console.log('----------------');

const userLoggedIn = true;

if(userLoggedIn) {
    console.log(`Log out`);
} else {
    console.log(`Log in`);
}

console.log('----------------');

const pomidoras = 'pomidoras';
const pomidoroIlgis = pomidoras.length;
console.log(pomidoroIlgis);

console.log('----------------');

const akys = 'Geltonos';

if (akys === 'Melynos') {
    console.log(`oj kokie fainulkos!!!`);
} else if ( akys === 'Zalios') {
    console.log('Sexy');
} else if (akys === 'Rudos') {
    console.log('Melagis?');
} else if (akys === 'Pilkos') {
    console.log('Niekuo neypatingi');
} else if (akys === 'Raudonos') {
    console.log('Parukes');
} else { 
    console.log( `ar turi aki???`);
}

if (akys === "Melynos") {
    console.log(` oj kokie fainulkos !!! `);
} else 
    if (akys === "Zalios") {
        console.log('sexyy');
    } else { 
    console.log(`a turi aki ? `);
}

console.log('----------------');

if (akys ==='Melynos') {
    console.log(` oj kokie fainulkos !!! `);
}

if (akys === "Zalios") {
    console.log(`sexyyy`);
} 

if (akys !== 'Zalios'  &&
     akys !== 'Melynos') {
    console.log(` ar tu turi akis `);
}