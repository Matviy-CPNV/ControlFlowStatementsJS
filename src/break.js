const numbers = [];
let stoper = 0;
let count = 0;
for (let i = 0; i < 10; i++) {
    numbers.push(Math.floor(Math.random() * 100));
    for (number of numbers) {
        if (number > 50){
            stoper += 1;
        }
    }
    if (stoper === 1){
        count = numbers.length;
        count = 10 - count;
        break;

    }
}

for (let i = 0; i < numbers.length; i++) {
    console.log(numbers[i]);
}
console.log(`Nombre d'opérations que votre amélioration a permis d'éviter à votre machine: ${count}`);