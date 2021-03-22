/*
Kiek nariu yra gimineje
*/

function memberCount(asmuo) {
    let nariuKiekis = 1;

    if(asmuo.children) {
        for (let i = 0; i < asmuo.children.length; i++) { 
            const child = asmuo.children[i];
            nariuKiekis += memberCount(child);

        }
    }

    return nariuKiekis;
}

const gimine1 = {
    name: 'Petras',
    age: 40,
    children: [
        {
            name: 'Maryte',
            age: 45,
            children: [
                {
                    name: 'Onutee',
                    age: 70
                },
                {
                    name: 'Elvyra',
                    age: 66
                },
            ]
        },
        {
            name: 'Jonas',
            age: 43,
            children: [
                {
                    name: 'Aleksas20',
                    age: 45,
                },
                {
                    name: 'Gokas',
                    age: 200
                },
                {
                    name: 'Gabriele',
                    age: 80
                }
            ]
        },
    ]
}

const kiekNariu = memberCount(gimine1);
console.log(kiekNariu);