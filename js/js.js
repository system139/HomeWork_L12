/*
Задание 1
Найти сумму ряда последовательно идущих чисел от lim1 до lim2
Например, если  lim1=5, lim2=8, то это сумма 5+6+7+8
Задание решить с помощью:
1.1 цикла for
1.2 цикла while
1.3 создание функции
 */

/*
//1.1 цикл for

let lim1 = +prompt("Enter 1");
let lim2 = +prompt("Enter 2");

let sum = 0;
for (let i = lim1; i <= lim2; i=i+1) {
    sum += i;
}
console.log(sum);
*/

// 1.2 цикл while (по поводу этого задания 1.2 не особо разобрался собрал код из интернета....)
/*
let lim1 = +prompt("Enter 1");
let lim2 = +prompt("Enter 2");

if ( lim1 !== lim2 ){
    let i = 1;
    if(lim1 < lim2){
        let i = lim1;
        while (i <= lim2 ) {
            i += i;
            i++;
        }
    } else {
        let i = lim2;
        while (i <= lim1) {
            i += i;
            i++;
        }
    }
    console.log(`${result}`);
}
*/
//1.3 создание функции

/*
let lim1 = +prompt("Enter 1");
let lim2 = +prompt("Enter 2");

function sumFromTo(lim1, lim2) {
    return (lim1 + lim2) * (lim2 - lim1 + 1) / 2;
}

console.log(sumFromTo(lim1, lim2));
*/
/*
let lim1 = +prompt("Enter 1");
let lim2 = +prompt("Enter 2");

function sumTo(lim1, lim2) {
    let sum = 0;
    for (let i = 1; i <= lim2; i++) {
        sum += i;
    }
    return sum;
}

console.log( sumTo(lim1, lim2) );
*/

//Реализовать стрелочную функцию произведения двух чисел
/*
let multiplication = (x, y) => x * y;
console.log(multiplication(5, 5));

let division = (x, y) => x / y;
console.log(division(5, 10));


let addition = (x, y) => x + y;
console.log(addition(5,5));

let subtraction = (x, y) => x - y;
console.log(subtraction(25,5));
*/

/*
Задание 3
(Массив одномерный)
3.1 Создать числовой массив и проинициализировать его
 */
/*
let arr2 = ['1', '2', '3', '4', '5'];
    console.log(arr2);

let arr1 = ['1', '2', '3', '4', '5'];
for (let i=0; i<arr1.length; i++) {
    console.log(arr1[i]);
}
*/

//3.1* (усложненное) инициализация с помощью случайных чисел

/*
let arr1 = [number = Math.ceil(Math.random() * 100), number = Math.ceil(Math.random() * 100), number = Math.ceil(Math.random() * 100), number = Math.ceil(Math.random() * 100)];

console.log(arr1);
*/

//3.2 Вывести размер массива
/*
в JavaScript являются динамическими (они автоматически меняют свой размер). В таких массивах, в отличие от тех,
которые есть в некоторых других языках программирования, задавать им размер не нужно. Ещё одной отличительной чертой массивов
JavaScript является то, что в элементах одного и того же массива могут содержаться различные типы данных.

???
прошу коментарий
 */

/*
let arr1 = ['1', '2', '3', '4', '5'];
for (let i=0; i<arr1.length; i++) {
    console.log(arr1[i]);
}
*/
//3.3 Вывести элементы с четными индексами

/*
let arr = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]
for (i = 0; i<arr.length; i++) {
    if (arr[i]%2==0)
    console.log(arr[i]);
}
*/

//3.4 Вывести только четные элементы (четные числа делятся на 2 без остатка)
/*
let arr1 = [];
for (let i=0; i<=30; i++) {
    arr1[i]=i;
}
for (let i=0; i<arr1.length; i=i+2) {
        console.log(arr1[i]);
}
 */

//3.5 Вывести индексы нулевых элементов (элемент равен нулю)
/*
let arr = [0, 2, 0, 4, 0, 6, 7, 0, 0, 10, 0, 12, 0, 14, 0];
let counter=0, iter;
for(iter=0; iter<arr.length; iter++) {
    if(arr[iter] === 0){
        counter++
        console.log(arr[iter]);
    }
}
*/
//3.6 Подсчитать количество нулевых элементов
/*
let arr = [0, 2, 0, 4, 0, 6, 7, 0, 0, 10, 0, 12, 0, 14, 0];
let counter=0, iter;
for(iter=0; iter<arr.length; iter++) {
    if(arr[iter] === 0){
        counter++
        console.log(arr[iter]);
    }
}
 */

/*Задание 4
Создать объект Машина и прописать для него свойства.*/
/*
let car = [
    'тип',
    carType = ['грузовой', 'легковой'],
    'цвет',
    carColour = ['чёрный', 'белый', 'зелёный', 'синий'],
    'вес',
    'двигатель',
    carEngine = ['дизель', 'бензин', 'газ'],
    'коробка передач',
    carTransmission = ['механика', 'автомат'],
];
console.log(car);
*/

/*
5.1 Создать функции-конструкторы:
- Книга (автор, название, год издания, издательство)
 */

/*
function Book(author, title, year, publisher) {
    this.author = author;
    this.title = title;
    this.year = year;
    this.publisher = publisher;
}
const myBook = new Book('Брэдбери Рэй Дуглас', '451 ГРАДУС ПО ФАРЕНГЕЙТУ', 1953, 'Азбука');
console.log(myBook);
*/

/*
- Электронная версия книги (автор, название, год издания, издательство, формат, электронный номер)
 */

/*
function eBook(author, title, year, publisher, format, ISBN) {
    this.author = author;
    this.title = title;
    this.year = year;
    this.publisher = publisher;
    this.format = format;
    this.ISBN = ISBN;
}
const myeBook = new eBook('Брэдбери Рэй Дуглас', '451 ГРАДУС ПО ФАРЕНГЕЙТУ', 1953, 'Азбука', 'PDF, FB2, EPUB, ONLINE', 978_5_699_91251_3);
console.log(myeBook);
*/


//5.2 Переделать создание функций без дубляжа информации, реализовав прототипное наследование

/*5.2 поскольку есть поля одинаковые для book и ebook то достаточно общие все поля задать в book  а каких не хватает в ebook.
    После того как прототипы будут переданы, ebook будут доступны все поля*/
/*
function eBook(author, title, year, publisher, format, ISBN) {
    this.author = author;
    this.title = title;
    this.year = year;
    this.publisher = publisher;
    this.format = format;
    this.ISBN = ISBN;
}
const myeBook = new eBook('Брэдбери Рэй Дуглас', '451 ГРАДУС ПО ФАРЕНГЕЙТУ', 1953, 'Азбука', 'PDF, FB2, EPUB, ONLINE', 978_5_699_91251_3);
console.log(myeBook);

function Book(author, title, year, publisher) {
    this.author = author;
    this.title = title;
    this.year = year;
    this.publisher = publisher;
}

//Book.prototype = myeBook;
eBook.prototype = new Book();
const myBook = new Book('Брэдбери Рэй Дуглас', '451 ГРАДУС ПО ФАРЕНГЕЙТУ', 1953, 'Азбука');
console.log(myBook);
*/