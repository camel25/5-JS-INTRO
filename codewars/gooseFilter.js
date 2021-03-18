function gooseFilter (birds) {
    var geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"];
    
    // sarasas kuriame kaupsime visas leistinas reiksmes
    const rez = []

    // return an array containing all of the strings in the input array except those that match strings in geese

    /*
    einame per gauta sarasa (birds)
        paimame birds saarase esanti nari (bird)
        reikia palyginti ar bird yra geese sarase
        reikia eiti per geese sarasa
            paimti geese nari
            jeigu, geese narys sutampa su bird reiksme, tai ji yra neleistina/ neitraukiama i rez sarasa
            priesingu atveju - bird itraukiame i rez sarasa
    */

    return rez; 
};





console.log(gooseFilter(
    ["Mallard", "Hook Bill", "African", "Crested", "Pilgrim", "Toulouse", "Blue Swedish"]),
    ["Mallard", "Hook Bill", "Crested", "Blue Swedish"]);
    });
    console.log(gooseFilter(
        ["Mallard", "Barbary", "Hook Bill", "Blue Swedish", "Crested"]),
        ["Mallard", "Barbary", "Hook Bill", "Blue Swedish", "Crested"]);
    });
    console.log(gooseFilter(
        ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"]),
         []);