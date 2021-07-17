let line = '_________________________';
// 1. Оголосіть змінні str, num, flag и txt зі значеннями «Привіт», 123, true, «true».
// За допомогою typeof переконайтесь, що значення змінних належать типам: string, number и  boolean.
console.log(line);

let str = 'Привіт';
console.log(typeof str);

let num = 123;
console.log(typeof num);

let flag = true;
console.log(typeof flag);

let txt = "true";
console.log(typeof txt);

console.log(line);
// 2. Оголосіть змінні a1, a2, a3, a4, a5. За домогою 3х математичних оператцій отримайте числа:
//         34,
//         12,
//         66,
//         90,
//         87.
// Старайтесь використовувати різні оператори.
//     Example: 88 = (16 / 2) * 11

let a1=34;
let a2=12;
let a3=66;
let a4=90;
let a5=87;

console.log(a3+a2-a1);
console.log(a5%a3/a2);
console.log(a4*(a5-a3));
console.log((a2/a1)%a4);
console.log(a1-a2-a5);

console.log(line);
// 3.  Створіть змінні a6, a7, a8, a9, a10. Запишіть в них результати виразів:
//     5 % 3,
//     3 % 5,
//     5 + '3',
//     '5' - 3,
//     75 + 'кг'

let a6= 5 % 3;
console.log(a6);
let a7= 3 % 5;
console.log(a7);
let a8= 5 + '3';
console.log(a8);
let a9= '5' - 3;
console.log(a9);
let a10= 75 + 'кг';
console.log(a10);

console.log(line);
// 4. Напишіть код, який вираховує площу прямокутника висотою 23см. (змінна height) та шириною 10см (змінна width).
// Значееня площі зберігати в змінній s.

let height = 23;
let width = 10;
let S = height * width;

console.log(S);

console.log(line);
// 5.  Напиши код, который находит объем цилиндра высотой 10м (переменная heightC) и диаметром основания 4м (dC),
//     результат поместите в переменную v.

let heightC = 10;
let dC = 4;
let V = Math.PI*Math.pow((dC/2),2)*heightC;

console.log(V);

console.log(line);
// 6. У прямоугольного треугольника две стороны n (со значением 3) и m (со значением 4).
// Найдите гипотенузу k по теореме Пифагора (нужно использовать функцию Math.pow(число, степень) или оператор возведения в степень ** ).

let n = 3;
let m = 4;
let k = Math.sqrt(Math.pow(n,2) + Math.pow(m,2));

console.log(k);

console.log(line);
// 8. Вывести в окно браузера при помощи метода alert() следующие данные: Ваше ФИО, возраст, хобби (каждой на новой строки спомощью \n).

alert('Коверзнєв Андрій Володимирович\n 20 рочків\n кожен день по 12 годин роблю завдання від Октен Веб)))');
console.log('Коверзнєв.....');

console.log(line);
// 9. Создать 4 переменные с использованием ключевого слова let с именами str1, str2, str3, concatenation.
//     Переменной str1 присвоить фразу ‘Кто ‘, str2 – ‘ты ‘, str3 – ‘такой?’
//   Локальной переменной concatenation присвоить результат конкатенации 3-х строк: str1, str2, str3.
//     Вывести в документ содержимое переменной concatenation спомощью document.write

let str1 = 'Кто ';
let str2 = 'ты ';
let str3 = 'такой?';
let concatenation = str1 + str2 +str3;

document.write('<h2>' + concatenation + '</h2>');
console.log(concatenation);

console.log(line);
// 10. Подумайте Какие значения выведет в окно браузера следующий фрагмент кода?  и почему?
// let str = "20";
// let a = 5;
// document.write(str + a + "<br/>");
// document.write(str - a + "<br/>");
// document.write(str * "2" + "<br/>");
// document.write(str / 2 + "<br/>");

let str55 = "20";
let a = 5;
document.write(str55 + a +"<br/>");//Из-за того, что str55 стринговое значение, то число а(5) просто присоединяется к "слову"
document.write(str55 - a + "<br/>");//В этой ситуации str55 приняло значение числа  и от него отнялось а(а)
document.write(str55 * "2" + "<br/>");//Как и в предыдущем примере значение str55 приняло значение числа и умножилось на значение "2"
document.write(str55 / 2 + "<br/>");// И в этой ситуации str55 приняло значение числа и разделился на два

console.log(line);
// 13. С помощью окна ввода, вызываемого методом prompt, сделать сложение двух чисел, а вывод результата при помощи метода alert
let pt = +prompt("Первое число");
let pt2 = +prompt('Второе число');
alert(pt+pt2);

// 14. С помощью окна ввода, вызываемого методом prompt, пользователь последовательно выводит имя, фамилию и возраст, а вам не обходимо вывести строку такого вида
// Доброго вечера Иван Иванов, мои поздравления что вам 32 , а вывод результата при помощи метода alert

let userName = prompt('Введите своё имя');
let userAge = +prompt('Введите свой возраст');
alert('Доброго вечера, '+ userName +', мои поздравления что вам '+userAge);

// =====================
// ======ДОП============
// =====================

// 1.
//Три різних числа вводяться через prompt().
//За допомоги if else вивести іх в порядку зростання. (відсортувати по зростанню)

let firstNumber = +prompt('Введи любое число...');
let secondNumber = +prompt('Ну и ещё одно, только не такое как первое...');
let thirdNumber = +prompt('И это последнее!(не повторять предыдущие)');

let zero;
let one;
let two;

if (firstNumber <= secondNumber && firstNumber <= thirdNumber && secondNumber <= thirdNumber) { zero = firstNumber; one = secondNumber; two = thirdNumber}
if (firstNumber <= secondNumber && firstNumber <= thirdNumber && secondNumber >= thirdNumber) { zero = firstNumber; one =  thirdNumber; two = secondNumber}
if (firstNumber >= secondNumber && secondNumber <= thirdNumber && firstNumber <= thirdNumber) { zero = secondNumber; one = firstNumber; two = thirdNumber}
if (firstNumber >= secondNumber && secondNumber <= thirdNumber && firstNumber >= thirdNumber) { zero = secondNumber; one = thirdNumber; two = firstNumber}
if (firstNumber <= secondNumber && firstNumber >= thirdNumber && secondNumber >= thirdNumber) { zero = thirdNumber; one = firstNumber; two = secondNumber}
if (firstNumber >= secondNumber && firstNumber <= thirdNumber && secondNumber <= thirdNumber) { zero = thirdNumber; one = secondNumber; two = firstNumber}
alert('Получается числа в порядке возрастания будет выглядеть так: \n1)'+zero+'\n2)'+one+'\n3)'+two);

// 2.
//Все параматры получаем с клавиатуры!!!!
//Имитируем поведение пешехода на перекстке.
//Если светофор зеленый - вывести "иди".
//Если светофор желтый - вывести "подожди".
//Если светофор красный - вывести "стой".
//Если светофор в аварийном режиме вывести "делай что хочешь"!

let light1 = +prompt('Какой цвет на светофоре?\n1)Зелёный \n2)Жёлтый \n3)Красный \n4)Светофор в аварийном режиме \nУкажи номер цвета');
if (light1 === 1){alert('иди')}
if (light1 === 2){alert('подожди')}
if (light1 === 3){alert('стой')}
if (light1 === 4){alert('делай что хочешь')}

//3.
// Все параметры получаем с клавиатуры!!!!(prompt , confirm)
//Создать переменную isRoadClear которая характеризирует наличие на дороге машин.
//Улучшаем предыдущее задание.
//Если светофор зеленый и машин нет - вывести "иди".
//Если светофор зеленый и машины есть  - вывести подожди пока нарушители проедут".
//Если светофор желтый и машины есть - вывести "жди".
//Если светофор желтый и машин нет - вывести "все рано жди".
//Если светофор красный и машин нет- вывести "стой все рано".
//Если светофор красный - и машины есть вывести "стой и жди".
//Если светофор в аварийном режиме вывести "делай что хочешь"!

let light2 = +prompt('Какой цвет на светофоре?\n1)Зелёный \n2)Жёлтый \n3)Красный \n4)Светофор в аварийном режиме \nУкажи номер цвета');
let car = +prompt('А машины есть? \n1)Да \n2)Нет \nУкажи номер')

if (light2 === 1 && car === 2){ alert('иди') }
if (light2 === 1 && car === 1){ alert('подожди пока нарушители проедут') }
if (light2 === 2 && car === 1){ alert('жди') }
if (light2 === 2 && car === 2){ alert('все рано жди') }
if (light2 === 3 && car === 2){ alert('стой все рано') }
if (light2 === 3 && car === 1){ alert('стой и жди') }
if (light2 === 4){ alert('делай что хочешь') }