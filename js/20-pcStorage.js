/*
Duota kietojo disko duomenu struktura (folder > file) ir reikia suskaiciuoti, kiek vietos uzima visi failai.

Folder uzima 0 vietos
*/

function storage(params) {
    return 0 ;
}

const pc = {
    name: 'c',
    type: 'folder',
    content: [
        {
            name: 'Program Files',
            type: 'folder',
            content: []
        },
        {
            name: 'Winodws',
            type: 'folder',
            content: [
                {
                    
                }
            ]
        },
        {
            name: 'msdia80.dll',
            type: 'folder',
            size:884,
            sizeUnits: 'kb'
        }
    ]
}

const totalKbs = storage(pc);
console.log('Used space:', totalKbs, 'Kbs');