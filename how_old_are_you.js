let age;
let years;
do {
    age = prompt("Вкажіть ваш вік", "18");
} while (isNaN(age) || age <= 0);
if (age == 1) {
    years = 'рік';
} else if (age > 1 && age <= 4) {
    years = 'роки';
} else {
    years = 'років'
}
console.log(age + ' ' + years);