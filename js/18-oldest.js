/*
Gimines medyje reikia rasti kas buvo/yra vyriausias
*/

function oldest(asmuo) {
    let biggestAge = asmuo.age;
    let childAge = 0;

    if (asmuo.children) {
        for (let i = 0; i<asmuo.children.length; i++) {
            const child = asmuo.children[i];

            childAge = oldest(child); 
        
            if (childAge > biggestAge) {
                 biggestAge = childAge;
            }
        }
    }
    return biggestAge;
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

const vyriausias = oldest(gimine1);
console.log(vyriausias);