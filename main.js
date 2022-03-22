// Použij výpis do konzole prohlížeče pomocí console.log('text')
// Konzoli otevřeš v Chrome stiskem F12 (na Windows) nebo Command-Option-I (na Macu)


// První příklad - vypiš vzestupně čísla od 0 do 10
console.log('První příklad - vzestupná řada 0 - 10');

//TADY NAPIS CYKLUS


for(let i=0; i<11; i++){
console.log(i);

}

// Druhý příklad - zkopíruj předchozí příklad
// a vyzkoušej, jaký je rozdíl mezi <= a <
// v podmínce uvnitř cyklu
console.log('-------------------');

console.log('Druhý příklad - rozdíl mezi <= a <');

//TADY NAPIS CYKLUS

for(let i=0; i<11; i++){
    console.log(i);
    
    }

    console.log('<=');

    for(let i=0; i<=11; i++){
        console.log(i);
        
        }

console.log('-------------------');



// Třetí příklad - vypiš sestupně čísla od 10 do 0
console.log('Třetí příklad - sestupná řada 10 - 0');

for(let i=10; i >= 0; i--){
    console.log(i);
    
    }


let i = 0;

console.log('-------------------');

console.log('První příklad while cyklus - vzestupná řada 0 - 10');


while (i<11){
    console.log(i);
    i++;
}
i--;

console.log('-------------------');

console.log('Druhý příklad while cyklus - rozdíl mezi <= a <');



let j = 0;

while (j<11){

    console.log(j);
    j++;
}

console.log('<=');

j = 0;

while (j<=11){

    console.log(j);
    j++;
}


console.log('-------------------');

console.log('Třetí příklad while cyklus - sestupná řada 10 - 0');

while (i>=0){

    console.log(i);
    i--;
}
