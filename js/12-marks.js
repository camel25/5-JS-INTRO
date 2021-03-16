function pazymiuVidurkis(vardas, pazymiai) {
    let suma = 0;

    for (let i = 0; i < pazymiai.length; i++) {
        suma += pazymiai[i]
    }

    const average = suma / pazymiai.length;

    // Vardenis: pazymiu vidurkis yra 6.
    console.log(`${vardas}: pazymiu vidurkis yra ${average}.`);
}

//pazymiuVidurkis('Petriukas', [10, 2, 8, 4]); 
//pazymiuVidurkis('Maryte', [10, 4, 6, 10]); 
//pazymiuVidurkis('Alphe', [10, 6, 5, 4, 8, 7]); 

const mokykla = [
    ['Petriukas', [10, 2, 8, 4]],
    ['Maryte', [10, 4, 6, 10]],
    ['Alphe', [10, 6, 5, 4, 8, 7]]
];


for (let i = 0; i < mokykla.length; i++) {
    const mokinys = mokykla[i];
    const name = mokinys[0];
    const marks = mokinys[1];
    pazymiuVidurkis(name,marks);
} 