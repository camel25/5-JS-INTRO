function daugyba(a, b) {

    // parametru valdiacija
    //jeiga, a yra ne skaicius, grazinti klaidos pranesima
    if(typeof a !== 'number'){
        return 'Pirmasis parametras turi buti skaiciaus tipo';
    }
    // if (isNaN(a) || a === Infinity || a === -Infinity) {
    //      return `Pirmasis parametras turi buti normalus skaicius ir negali buti ${a}`;
    // }
    /*
    if ('' + a === 'NaN' || Math.abs(a) === Infinity) {
        return `Pirmasis parametras turi buti normalus skaicius ir negali buti ${a}`;
    }
    */
    if (!isFinite(a)) {
        return `Pirmasis parametras turi buti normalus skaicius ir negali buti ${a}`;
    }
    //jeigu, b yra ne skaicius, grazinti klaidos praneisma 
     
    if(typeof b !== 'number'){
        return 'Antrasis parametras turi buti skaiciaus tipo';
    }
    if (!sFinite(b)) {
        return `Antrasis parametras turi buti normalus skaicius ir negali buti ${b}`;
    }

//    if (isNaN(b) || b === Infinity || b === -Infinity) {
//        return `Antrasis parametras turi buti normalus skaicius ir negali buti ${b}`;
//    }

    // logika
    const rez = a * b;

    // rezultato grazinimas
    return rez;
}
console.log(daugyba(Infinity, Infinity));
console.log(daugyba(Infinity, 'penki'));
console.log(daugyba('trys', Infinity ));
console.log(daugyba(-Infinity, -Infinity));
console.log(daugyba(-Infinity, 'penki'));
console.log(daugyba('trys', -Infinity ));
console.log(daugyba(NaN, NaN));
console.log(daugyba(NaN, 'penki'));
console.log(daugyba('trys', NaN ));
console.log(daugyba(true, false));
console.log(daugyba(3, false));
console.log(daugyba(false, 5 ));
console.log(daugyba(['trys'], ['penki']));
console.log(daugyba(3, ['penki']));
console.log(daugyba(['trys'], 5 ));
console.log(daugyba([2], [3]));
console.log(daugyba(3, [4]));
console.log(daugyba(['ast', 5], 5 ));
console.log(daugyba(['asd', 5], [6, 'asd']));
console.log(daugyba(3, ['asd', 6]));
console.log(daugyba(4, 5), '->', 20 );
console.log(daugyba(8, 5), '->', 40 );
console.log(daugyba(4, 8), '->', 32 );

console.log('---------');
