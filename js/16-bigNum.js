function bigNum(list) {
    // input valditadion
    if (!Array.isArray(list)) {
        return `ERROR: netinkamas tipas, turi buti array (sarasas)`
    }
    if (list.length === 0) {
        return 'ERROR: array is empty';
    }
    // logic 
    let biggest = -Infinity;

    for (let i = 0; i < list.length; i++) { 
        const number = list[i]

        // ar tai normalus skaicius
        if (typeof number !== 'number' || !isFinite(number)) {
            continue;               // eina i sekancia ciklo 
        }
        // ar jis didesnis uz jau zinoma didziausia skaiciu 
        if (number > biggest) {
            biggest = number;
        }
    }
    // logic validation 
    if (biggest === -Infinity) {
        return 'ERROR: sarase nerastas nei vienas normalus skaicius'
    }
    // result
    return biggest;
    
}
/*
console.log( bigNum( 'pomidoras') );
console.log( bigNum(4564564) );
console.log( bigNum(true) );
console.log( bigNum(false) );
console.log( bigNum(undefined) );
console.log( bigNum() );
console.log( bigNum(bigNum) );
console.log( bigNum(null));
console.log( bigNum({}));
console.log( bigNum([]));
*/

console.log( bigNum( [ 1 ] ), '->', 1 );
console.log( bigNum( [ 1, 2, 3 ] ), '->', 3 );
console.log( bigNum( [ -5, 78, 14, 0, 18 ] ), '->', 78 );
console.log( bigNum( [ 69, 69, 69, 69, 66 ] ), '->', 69 );
console.log( bigNum( [ -1, -2, -3, -4, -5, -6, -7, -8 ] ), '->', -1);
console.log( bigNum( [ -11, -35, -2, -3, -4, -5, -6, -7, -8 ] ), '->', -1);

console.log(bigNum([1, 8, 3, 5, Infinity]), '->', 8);
console.log(bigNum([1, 8, Infinity, 5]), '->', 8);
console.log(bigNum([Infinity, 8, 3, 5]), '->', 8);

console.log(bigNum([1, 8, 3, 5, 'pomidoras']), '->', 8);
console.log(bigNum([1, 8, 'pomidoras', 5]), '->', 8);
console.log(bigNum(['pomidoras', 8, 3, 5]), '->', 8);

console.log(bigNum([1, 8, 3, 5, null]), '->', 8);
console.log(bigNum([1, 8, null, 5]), '->', 8);
console.log(bigNum([null, 8, 3, 5]), '->', 8);

console.log(bigNum([1, 8, 3, 5, true]), '->', 8);
console.log(bigNum([1, 8, true, 5]), '->', 8);
console.log(bigNum([true, 8, 3, 5]), '->', 8);

console.log(bigNum([1, 8, 3, 5, false]), '->', 8);
console.log(bigNum([1, 8, false, 5]), '->', 8);
console.log(bigNum([false, 8, 3, 5]), '->', 8);

console.log(bigNum([1, 8, 3, 5, NaN]), '->', 8);
console.log(bigNum([1, 8, NaN, 5]), '->', 8);
console.log(bigNum([NaN, 8, 3, 5]), '->', 8);

console.log(bigNum([1, 8, 3, 5, '']), '->', 8);
console.log(bigNum([1, 8, '', 5]), '->', 8);
console.log(bigNum(['', 8, 3, 5]), '->', 8);

console.log(bigNum([Infinity, null, 'sad', true, 888]), '->', 888);
console.log(bigNum([Infinity, 888, null, 'sad', true]), '->', 888);
console.log(bigNum([888,Infinity, null, 'sad', true]), '->', 888);

console.log(bigNum(['888',Infinity, null, 'sad', true]));





