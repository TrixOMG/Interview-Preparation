"use strict";

/*
1. Язык JavaScript является подвидом языка Java - неверно.

2. Что выведет код:
let f = function g() { return 23; };
alert( typeof g() );

Ответ: undefined

3. Какой результат выражения:
console.log(null + {0:1}[0] + [,[1],][1][0]);

Ответ: 2

4. Что выведет этот код:
for(let i=0; i<10; i++) {
  setTimeout(function() {
    alert(i);
  }, 100);
}

Ответ: Числа от 0 до 9

5. Какое из этих слов не имеет специального использования в JavaScript, никак не упомянуто в стандарте? 
this, instanceof, constructor, parent, new, все имеют спец. использование.

Ответ: parent

6. Чему равно arr.length?
function MyArray() { }
MyArray.prototype = [];

let arr = new MyArray();
arr.push(1, 2, 3);
alert(arr.length);

Ответ: 3

7. Что делает код: break me;
Ответ: выходит из текущего цикла или switch на метку "me"

8. Какие варианты вызова try..catch являются синтаксически верными в JavaScript?

Ответ: 
try {} catch {}
try {} finally {}
try {} catch {} finally {}

9. Что выведет этот код:
console.log(str);
var str = "Hello";

Ответ: undefined

10. Что выведет этот код:
for(var i=0; i<10; i++) {
  setTimeout(function() {
    alert(i);
  }, 100);
}

Ответ: 10 раз число 10

11. Что выведет этот код:
let obj = {
 "0": 1,
 0: 2
};
console.log( obj["0"] + obj[0] );

Ответ: 4

12. Какие варианты подключения скрипта являются корректными с точки зрения современного стандарта HTML?


Неверно:
<script type="text/javascript" src="my.js"></script>
<script src="my.js"></script>
<script src="my.js"/>
TODO: проверить???

13. Что выведет этот код?
function User() { }
User.prototype = { admin: false };

let user = new User();
alert(user.admin);

Ответ: false

14. Чему равно a + b + c?
let a = 1;
let b = {toString() {return "1"}};
let c = 1;

Ответ: 111

15. Что делает оператор **?
Ответ: ** - оператор возведения в степень

16. Какие из этих вариантов задают массив из элементов «a», «b»?
let a = new Array("a","b") *
let a = { "a", "b" }
let a = ( "a", "b" )
let a = [ "a", "b" ] *
let a = "a,b".split(",") *

Ответ: помеченные звездочкой

17. Правда ли что a == b?
a = [1,2,3];
b = [1,2,3];

Ответ: нет (вывод консоли: false (без стрикт мода, с ним выдает ошибку))

Пояснение:

Прямое сравнение массивов всегда будет давать результат false.
Поскольку массив, как объект, указывает на ссылку памяти, где хранится "значение".
И эти ссылки всегда будут разными, за исключением случая когда мы сравниваем один
и тот же объект (массив).

18. Объявлена функция:
function F() {};
Чем является F.prototype?

Ответ: Обычным объектом.

19. Верно ли null == undefined?

Ответ: Да, вывод консоли: true

20. Что выведет этот код?
function User() { }
User.prototype = { admin: false };

let user = new User();

User.prototype = { admin: true };

alert(user.admin);

Ответ: false


21. Что выведет этот код?
let x = 5;
console.log(x++)

Ответ: 5

22. Что выведет этот код?
0 || "" || 2 || undefined || true || falsе

Ответ: 2

23. Сколько параметров можно передать функции?

Ответ: Любое кол-во.

24. console.log(20e-1["toString"](2))

Аргументом метода toString является radix,
по сути это перевод числа в другую систему счисления в диапазоне от 2 до 36.

20e-1 = 20 * 10 ** -1 = 2

Ответ: 10

25. Что выведет код? (вопрос с подвохом)
let a = [1,2]
(function() { alert(a) })()

Ответ: Будет ошибка

Пояснение: нет точки с запятой после объявления переменной a.
Т.к. JS сам расставляет точки с запятыми в коде он перенесёт функцию в скобках
на строчку выше (где a = [1,2]) и выдаст ошибку.
Если точка с запятой будет стоять (где a), то ошибки не будет.

26. Что выведет этот код?
console.log(+"Infinity")

Ответ: Infinity (как число)

27. Какая арифметическая операция приводит к ошибке в JS?

Деление на 0 даёт число Infinity
Умножение числа на строку даёт число, ошибки нет
Корень из отрицательного числа даёт ошибку, только если возводить в отрицательную степень
через оператор **, при помощи Math.sqrt() выдаёт NaN, ошибки нет.

Ответ: Никакая из перечисленных.

28. 
let arr = [1,2,3];
arr.something = 5;
console.log(arr.something);

Ответ: 5

29. Есть ли разница между вызовами i++ и ++i?

Ответ: Разница в значении, которое возвращает такой вызов.

30. Переменные apple и Apple (с большой буквы) - это одна и та же или разные?

Ответ: Разные

31.
function f() {
  let a = 5;
  return new Function('b', 'return a + b');
}
console.log( f()(1) );

Ответ: Будет ошибка

32. Чему равно значение выражения 4 - "5" + 0xf - "1e1"?

Ответ: Числу (4)

33. Какие варианты правильно объявляют функцию f, возвращающую сумму двух аргументов?

Ответ:
let f = function(a,b) { return a+b }
let f = new Function("a,b", "return a+b")
let f = new Function("a", "b", "return a+b")
let f = (a, b) => a + b

34.
"use strict";

a = null + undefined;
alert(a);

Ответ: в коде ошибка, без use strict - NaN

35. Верно ли сравнение "ёжик" > "яблоко"?

Ответ: нет

Пояснение:
Чтобы определить, что одна строка больше другой, JavaScript использует
«алфавитный» или «лексикографический» порядок.
Другими словами, строки сравниваются посимвольно.

Алгоритм сравнения двух строк:


1.Сначала сравниваются первые символы строк.

2.Если первый символ первой строки больше (меньше), чем первый символ второй,
то первая строка больше (меньше) второй. Сравнение завершено.

3.Если первые символы равны, то таким же образом сравниваются уже вторые символы строк.

4.Сравнение продолжается, пока не закончится одна из строк.

5.Если обе строки заканчиваются одновременно, то они равны.
Иначе, большей считается более длинная строка.


Заглавная буква "A" не равна строчной "a". Какая же из них больше? Строчная "a".
Почему? Потому что строчные буквы имеют больший код во внутренней таблице кодирования, 
которую использует JavaScript (Unicode). 

36. 
console.log(str); // ?
let str = "Hello";

Ответ: Выдаст ошибку.

37. Каких операторов нет в JavaScript?

* //есть
^ //есть
% //есть
# // нет, остальные есть
&
>>
>>>
!

Ответ: #

38. Какой код корректно найдёт максимальное значение в непустом массиве arr?

Ответ:
arr.reduce(function(prev, item) { return Math.max(prev, item) })
Math.max.apply(null, arr)

39. 
if (function f(){}) {
  alert(typeof f);
}

Ответ: undefined

40.
let arr = [];
arr[1] = 1;
arr[3] = 33;

Ответ: arr.length = 4

41. Какие конструкции для циклов есть в javascript?

Ответ: Три for, while, do-while

42. Чему равен this?
let user = {
  sayHi: function() {
    alert(this);
  }
};
(user.sayBye = user.sayHi)();

Ответ: undefined

43. Что выведет код:
let f = function(x) {
  alert(x)
}

(function() {
  f(1)
}())

Ответ: Ошибку

44. Выберите правильные варианты объявления массива, то есть такие,
в результате которых мы получаем массив из двух чисел 1 и 2.

Ответ:
new Array.prototype.constructor(1, 2)
new Array(1, 2)
Array(1, 2)
[1, 2]

45. let x = 5; console.log(x++);
  Ответ: 5, т.к. инкремент происходит после выполнения операции вывода

  ^ - оператор XOR

46. function F() {return F;}
console.log( new F() instanceof F);
console.log( new F() instanceof Function);

Оператор instanceof проверяет, принадлежит ли объект к определённому классу.
Другими словами, object instanceof constructor проверяет,
присутствует ли объект constructor.prototype в цепочке прототипов object.

47. Что такое ECMAScript?
Ответ: Спецификация языка JavaScript.

48. Какие из этих вызовов синтаксически верно сгенерируют исключение?

throw "Ошибка" *
throw new Error("Ошибка") *
throw { message: "Ошибка" } *
throw Error("Ошибка") * 
Ни один.

49. Какой оператор из этих выполняет не только математические операции?

* 
/
+ //я думаю этот
-
>>>

50. console.log([] + false - null + true)

Ответ: NaN

51. Сработает ли вызов функции до объявления в этом коде:

sayHi();

function sayHi() {
  console.log("Hello")
}

Ответ: Да

52. Что выведет этот код?

f.call(f);

function f() {
  alert( this );
}

Ответ: [Function: F] (Код функции F)

53. Что выведет этот код?

f.call(null);

function f() {
  alert( this );
}

Ответ: null 



*/

f.call(null);

function f() {
  console.log(this);
}

//sayHi();

//function sayHi() {
//  console.log("Hello")
//}

//console.log([] + false - null + true)

//function F() {return F;}
//console.log( new F() instanceof F);
//console.log( new F() instanceof Function);

//console.log(2^10);

//let x = 5; console.log(x++);
// console.log(str); // ?
// let str = "Hello";
// let f = (function (x) {
//   console.log(x);
// })
// (
//   (function () {
//     f(1);
//   })()
// );

// console.log(null + undefined);

// function f() {
//   let aa = 5;
//   return new Function("b", "return aa + b");
// }
// console.log(f()(1));

// let arr = [1, 2, 3];
// arr.something = 5;
// console.log(arr.something);

// console.log(Math.sqrt(-1));

// let b = [1, 2];
// (function () {
//   console.log(b);
// })();

// console.log(20e-1);
// console.log((20e-1)["toString"](2));
// console.log((20e-1).toString(2));

// console.log(0 || "" || 2 || undefined || true || falsе);
// let x = 5;
// console.log(x++);
// console.log(null == undefined)
// function F() {}
// console.log(F.prototype);
// a = [1, 2, 3];
// a = [1, 2, 3];
// b = [1, 2, 3];

// console.log(a == b);

// let aa = { "a", "b" }
// let aaa = ("a", "b");
// let aaaa = ["a", "b"];
// let aaaaa = "a,b".split(",");

// console.log(a, aaa, aaaa, aaaaa);

// let a = 1;
// let b = {
//   toString() {
//     return "1";
//   },
// };
// let c = 1;
// console.log(a + b + c);

// let f = function g() {
//   return 23;
// };
// console.log(typeof g()); //undefined

// console.log(null + { 0: 1 }[0] + [, [1]][1][0]);

// for (var i = 0; i < 10; i++) {
//   setTimeout(function () {
//     console.log(i);
//   }, 100);
// }

// function MyArray() {}
// MyArray.prototype = [];

// let arr = new MyArray();
// arr.push(1, 2, 3);
// console.log(arr.length);

// try {
// } catch {
// } finally {
// }

// try {
// } finally {
// }

// console.log(str);
// var str = "Hello";

// let obj = {
//   0: 1,
//   0: 2,
// };
// console.log(obj["0"] + obj[0]);
// function User() {}
// User.prototype = { admin: false };

// let user = new User();
// console.log(user.admin);

// function User() {}
// User.prototype = { admin: false };

// let user = new User();

// User.prototype = { admin: true };

// console.log(user.admin);

// console.log([] + 1 + 2);
