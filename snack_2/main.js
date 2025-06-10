//! FUNCTIONS

function random_numb(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}

//! END FUNCTIONS

//Dichiaro l'array di oggetti
const tabellone_campionato = [
    {
    nome: 'Juve',
    punti_fatti: 0,
    falli_subiti: 0,
    },
    {
    nome: 'Inter',
    punti_fatti: 0,
    falli_subiti: 0,
    },
    {
    nome: 'Milan',
    punti_fatti: 0,
    falli_subiti: 0,
    },
    {
    nome: 'Napoli',
    punti_fatti: 0,
    falli_subiti: 0,
    },
    {
    nome: 'Roma',
    punti_fatti: 0,
    falli_subiti: 0,
    },
    {
    nome: 'Atalanta',
    punti_fatti: 0,
    falli_subiti: 0,
    }
    
]


//Dichiaro la matrice quadrata 2x2
const nome_squadra = []
const falli_subiti_squadra = []
const nome_falli = [nome_squadra, falli_subiti_squadra];

//con un ciclo for scorro all'interno dell'array di oggetti
for (let i = 0; i < tabellone_campionato.length; i++) {
    const element = tabellone_campionato[i];

    //Popolo le chiavi falli e punti
    element.falli_subiti = random_numb(20,50);
    element.punti_fatti = random_numb(50,90);

    //riempio la matrice quadrata con gli elementi estraendoli dall'array di oggetti
    nome_squadra.push(element.nome);
    falli_subiti_squadra.push(element.falli_subiti);

}


console.log(nome_falli);



