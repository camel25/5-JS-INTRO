/*
panaudojant ciklą perrašyti tekstinio tipo kintamųjų reikšmes iš kito galo:
pvz.: “abcdef” -> “fedcba”

*/


const text = 'abcdef';
let reverse = '';


/* for (let i = 0; i < text.length; i++) {
    reverse += text[text.length - 1 - i];
}
*/


for (let i = 0; i < text.length; i++) {
    reverse = text[i] + reverse;
}

console.log(text, '->', reverse); 


/*

for (let i = text.length -1; i >= 0; i--) {
    console.log(i, text[i]);
    reverse += text[i];
}

console.log(text, '->', reverse);

*/
/*
for (let i = text.length ; i > 0; i--) {
    console.log(i, text[i - 1]);
    reverse += text[i - 1];
}

console.log(text, '->', reverse);

*/
