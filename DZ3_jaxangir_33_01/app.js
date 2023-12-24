// Урок 3
// ✏️ запросить у пользователя число от 2 до 10 и с помощью цикла вывести таблицу умножения 

.

let multiplier = prompt("Введите число для умножения на числа от 2 до 10");
let number = Number (multiplier);
if(!isNaN(number) && number >= 2 && number <= 10){
    for (let i = 2; i <=  10; i++) {
        console.log(`${number} × ${i} = ${number * i}`);
    }
}    



// ✏️ Напишите программу, где пользователь вводит любое целое положительное число. А программа суммирует все числа от 1 до введенного пользователем числа.
let number1 = prompt("Введите  число:");
let sum = 0;
for (let i = 1; i <= number1; i++) {
    sum += i;
}
console.log("Сумма чисел от 1 до " + number1 + " равна: " + sum);





// ✏️ Написать рограмму которая считает сколько детей получат подарки в новом году. Есть массив с годами рождения детей: [2005, 2016, 2012, 2018, 2021, 2018, 2014...заполнить самостоятельно]. Подарки получат дети в возрасте от 6 до 11 лет. Программа должна подсчитать количество этих детей и вывести ответ в виде: 5 детей из 10 получат подарки на НГ
let childrenBirthYears= [2005, 2016, 2012, 2018, 2021, 2018, 2014, 2015, 2016, 2017, 2018]; 

function getPresentRecipients(childrenBirthYears) {
    let currentYear = new Date().getFullYear();
    let eligibleChildren = 0;
    let totalChildren = 0;

    for (let birthYear of childrenBirthYears) {
        totalChildren += 1;
        let age = currentYear - birthYear;
        if (6 <= age && age <= 11) {
            eligibleChildren += 1;
        }
    }
    return [eligibleChildren, totalChildren];
}

function printResults(eligibleChildren, totalChildren) {
    console.log(`${eligibleChildren} детей из ${totalChildren} получат подарки на НГ.`);
}

let [eligibleChildren, totalChildren] = getPresentRecipients(childrenBirthYears);
printResults(eligibleChildren, totalChildren);
