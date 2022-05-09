let notes = [];
let i = 0;

while (i < 32) {
    
    let rand;
    rand = (Math.random() * 20).toFixed(2);
    notes.push(rand);
    i++;
}

console.log(notes);

function noteSupDix(tab) {
    let x = 0;
    tab.forEach(element => { if (element > 10) {
        x++;
    }});
    return x
}

function noteMoy(tab) {
    let x = 0;
    let somme = 0;
    tab.forEach(element => { 
        x++;
        somme += Number(element);
    });
    console.log(somme);
    console.log(x);
    return (somme/x).toFixed(2);
}

console.log("notes supérieures à 10 : " + noteSupDix(notes));
console.log("moyenne générale : " + noteMoy(notes));
