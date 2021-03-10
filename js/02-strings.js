/*
VISOS KOMBINACIJOS DARBUI SU TEKSTU
*/

// Siandien yra Kovo desimta. 
const menuo = 'Kovo';
const diena = 'desimta';

const dayString = 'Siandien yra: ' + menuo + ' ' + diena + '.'
console.log(dayString);

// Cia yra dviguba (") kabute
const dvigubaKabute = 'Cia yra dviguba (") kabute.';
console.log(dvigubaKabute);

// Cia yra vienguba (') kabute.
const viengubaKabute = "Cia yra vienguba (') kabute.";
console.log(viengubaKabute);

// Turiu vienguba (') ir dviguba (") kabute.
const viengubaDviguba = "Turiu vienguba (') ir dviguba (\") kabute.";
console.log(viengubaDviguba);

// Turiu dviguba (") ir vienguba (') kabute.
const dvigubaVienguba = 'Turiu dviguba (") ir vienguba (\') kabute.';
console.log(dvigubaVienguba);

// Max saugumas dviguba (") ir vienguba (') kabute.
const maxKabutes = 'Turiu dviguba (\") ir vienguba (\') kabute.';
console.log(maxKabutes);

// Back slash \
const navHTML ='<nav>\
                <a href="#">Link</a>\
                <a href="#">Link</a>\
                <a href="#">Link</a>\
                <a href="#">Link</a>\
                </nav>';
console.log(navHTML);

console.log('---------------------------------');

// Mano vardas: Petras
const vardas = 'Petras'; 
const petrasIntro = 'Mano vardas: ' + vardas + '.';
console.log(petrasIntro);

// Backtick - console mygtukas ~` (`tekstas be tarpu`)
const petrasBacktick = `Mano vardas: ${vardas}.`;
console.log(petrasBacktick);

// Naujausias pazymys: 2.
const marks = [10, 5, 8, 2, 7];
const markSentence0 = `Pirmas pazymys: ${marks[0]}`
console.log(markSentence0);
const markSentence1 = `Antras pazymys: ${marks[1]}`
console.log(markSentence1);
const markSentence = `Naujausias pazymys: ${marks[marks.length - 1]}`
console.log(markSentence);

// `` backtick atvaizduoja enter <br> be \
const navHTML2 =`<nav>
                <a href="#">Link</a>
                <a href="#">Link</a>
                <a href="#">Link</a>
                <a href="#">Link</a>
                </nav>`;
console.log(navHTML2);