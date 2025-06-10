
//creo un array di oggetti

const biciclette_da_corsa = [
    {
        name : 'bici_1',
        peso_kg: 8,

    },
    {
        name : 'bici_2',
        peso_kg: 7.7,

    },
    {
        name : 'bici_3',
        peso_kg: 7.3,

    },
    {
        name : 'bici_4',
        peso_kg: 7.1,

    },
    {
        name : 'bici_5',
        peso_kg: 7.4,

    },

]

//Creo un array nel quale inserire tutti i pesi
const pesi =[]

//con un ciclo for popolo l'array dei pesi
for (let i = 0; i < biciclette_da_corsa.length; i++) {
    const element = biciclette_da_corsa[i];
    
    pesi.push(element.peso_kg)
    
}

//con la funzione Math.min estraggo il minore
console.log(Math.min(...pesi));




