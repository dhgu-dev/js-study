let a = 1,
  b = 1;
let c = ++a;
let d = b++;

alert(a); // 2
alert(b); // 2
alert(c); // 2
alert(d); // 1

let y = 2;
let x = 1 + (y *= 2);

alert(y); // 4
alert(x); // 5

'' + 1 + 0; // "10"
'' - 1 + 0; // -1
true + false; // 1
6 / '3'; // 2
'2' * '3'; // 6
4 + 5 + 'px'; // "9px"
'$' + 4 + 5; // "$45"
'4' - 2; // 2
'4px' - 2; // NaN
7 / 0; // Infinity
'  -9  ' + 5; // "  -9  5"
'  -9  ' - 5; // -14
null + 1; // 1
undefined + 1; // NaN
' \t \n' - 2; // -2

// incorrect output
let i = prompt('덧셈할 첫 번째 숫자 입력', 1);
let j = prompt('덧셈할 두 번째 숫자 입력', 2);
alert(i + j); // "12"

// fixed
let u = prompt('덧셈할 첫 번째 숫자 입력', 1);
let v = prompt('덧셈할 두 번째 숫자 입력', 2);
alert(+u + +v); // 3
