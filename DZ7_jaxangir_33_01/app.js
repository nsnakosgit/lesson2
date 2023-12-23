// Дан массив из чисел: [5,4,1,20,0, -4, -8, 100,4,-74,-5,0,0,1,2,7].
// Задания к нему:
// * map: умножьте каждое число из массива на 5
// * filter: оставьте в массиве только положительные числа (ноль тоже исключить)
// * reduce: найдите максимальное число в массиве
// * reduce: найдите минимальное число в массиве



let numbers = [5,4,1,20,0, -4, -8, 100,4,-74,-5,0,0,1,2,7];
const multiplied = numbers.map(number => number * 5);
console.log( "умножения на 5:", multiplied);



const positive = numbers.filter(number => number > 0);
console.log("положительные числа:", positive);

const max = numbers.reduce((max, current) => Math.max(max, current), numbers[0]);
console.log("максимальное число:", max);


const min = numbers.reduce((min, current) => Math.min(min, current), numbers[0]);
console.log("минимальное число:", min);



// Дан массив строк (имена людей): ["алиса","ЖЕНЯ","артем","ПАВЕЛ","ЖАКШЫЛЫК","антон","айсулуу", "канаим"]
// * map: использовать функцию capitalize из урока, чтобы все имена выглядели как надо: артем -> Артем.
// * map: все имена написать на латинице (написать функцию транслитерации)
// * filter: вывести имена начинающиеся с буквы "А"
// * reduce: получить самое длинное имя
// * reduce: получить самое короткое имя






function capitalize(name) {
    return name.charAt(0).toUpperCase() + name.slice(1);
   }
   
  
   function transliterate(name) {
    const trans = {
       "а": "a", "б": "b", "в": "v", "г": "g", "д": "d",
       "е": "e", "ё": "yo", "ж": "zh", "з": "z", "и": "i",
       "й": "y", "к": "k", "л": "l", "м": "m", "н": "n",
       "о": "o", "п": "p", "р": "r", "с": "s", "т": "t",
       "у": "u", "ф": "f", "х": "h", "ц": "c", "ч": "ch",
       "ш": "sh", "щ": "sch", "ъ": "", "ы": "y", "ь": "",
       "э": "e", "ю": "yu", "я": "ya",
       "А": "A", "Б": "B", "В": "V", "Г": "G", "Д": "D",
       "Е": "E", "Ё": "YO", "Ж": "ZH", "З": "Z", "И": "I",
       "Й": "Y", "К": "K", "Л": "L", "М": "M", "Н": "N",
       "О": "O", "П": "P", "Р": "R", "С": "S", "Т": "T",
       "У": "U", "Ф": "F", "Х": "H", "Ц": "C", "Ч": "CH",
       "Ш": "SH", "Щ": "SCH", "Ъ": "", "Ы": "Y", "Ь": "",
       "Э": "E", "Ю": "YU", "Я": "YA",
    };
   
    return name.split('').map(letter => trans[letter] || letter).join('');
   }
   
   const names = ["алиса","ЖЕНЯ","артем","али","ПАВЕЛ","ЖАКШЫЛЫК","антон","айсулуу", "канаим"];
   
   
   const capitalizedNames = names.map(name => capitalize(transliterate(name)));
   
   
   const namesStartingWithA = capitalizedNames.filter(name => name.charAt(0) === 'A');
   
 
   let longestName = '';
   let shortestName = '';
   
   capitalizedNames.forEach(name => {
    if (name.length > longestName.length) longestName = name;
    if (name.length < shortestName.length || !shortestName) shortestName = name;
   });
   
   console.log("все имена написать на латинице:", capitalizedNames);
   console.log("имена начинающиеся с буквы 'А':", namesStartingWithA);
   console.log("самое длинное имя:",longestName);
   console.log("самое короткое имя:", shortestName);