/*
Suskaiciuoti visus narius ir ju amziu vidurki. 
*/

function averangeAge(asmuo) {

    let childCount = 1;
    let childAgeSum = asmuo.age;

    if (asmuo.children) {
        for (let i = 0; i < asmuo.children.length; i++) {
            const child = asmuo.children[i];
            const childInfo = averangeAge(child);
            
            childCount += childInfo.childCount;
            childAgeSum += childInfo.ageSum;
        }
    }

    return {
        childCount: childCount,
        ageSum: childAgeSum
    };
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

const giminesDuomenys = averangeAge(gimine1);
let averange = giminesDuomenys.ageSum / giminesDuomenys.childCount
console.log(giminesDuomenys, 'Averange age:', averange);