"use strict";

// a = 15;
// console.log(a);

// let number = 5;
// const leftBorderWidth = 1;

// number = 10;
// console.log(number);

// const object = {
//     a: 50
// };

// object.a = 10;  - обращаемся к a* из массива

// console.log(object);

// как работает var - он работает сразу во всей странице, не важно на какой строке он был объявлен.
// а let работает только снизу после объявления.
// то что происходит в массиве с let остается в массиве, var вылезает даже оттуда.

// Числа
// Строки
// Булиновый
// true\false
// null - не существует
// undefined - существует но у него нет обозначения
// Symbol
// Bigint
                //  ЧИсла
// let number = 4.6;
// // infinity - делим на ноль
// // Nan - не число
// console.log(4/0); будет равно Infinity
// console.log('string'*9); будет равно NaN
//                     // Строки
// const persone = 'Alex';
//                     //   Булиновые
// const bool = true\false;
//                     // И еще:
// console.log(something); будет равно Null - переменная не существует,
//  будет написано something is not defined. 
// Само слово Null в ошибке почти никогда не будет встречаться.
// Let und; 
// console.log(und); будет равно undefined - переменная существует, но у нее нет значения, выводить нечего
//                             Объекты

// const obj = {
//     name: 'Alex',
//     age: 25,
//     isMarried: false
//   };      
// console.log(obj.name);-через точку обращаемся к значению свойства Name.
// Можно также через квадратные.
// console.log(obj['name']);
//                            массив
// let arr = [ 'alex', 25, false]; - элементы расположены по порядку начиная с нуля.
// console.log(arr[2]); 
      //                       // Урок 12 разница между объектами и массивами
      // const arr = [1, 2, 3];  
      // console.log(arr[1]);        
      
      
      // // const obj = {
      // //   a: 1,
      // //   b: 2
      // // };

      // const obj = {
      //   'Anna': 500,
      //   'Alice': 800
      // };

      // Разница между объектами и массивами урок 12

//       const arr = [1, 2, 3];

// console.log(arr[1]); 
// для обращения к элементу массива используется его порядковый номер. Нумерация идет с нуля


      // const obj = { a: 1, b:2};
// в объекте всегда есть ключ и значение

      // const obj = {
      //   'Anna' : 500,
      //   'Alice': 800
      // };
//      const arr = [ 'a', 'b', 'c'];
//      const arrObj = {
//       0: 'a',
//       1: 'b',
//       2: 'c'
//       abc
//      }

//    arrObj.b = '1234';
//      console.log(arrObj[b]);

// alert('Hello');

// const result = confirm('are u here?');
// console.log(result)

// const answer = prompt('Вам есть 18?', '');
// console.log(typeof(answer));

const answers = [];

answers[0] = prompt ('Как ваше имя?', '');
answers[1] = prompt ('Как ваша фамилия?', '');
answers[2] = prompt ('Сколько вам лет??', '');

document.write(answers);