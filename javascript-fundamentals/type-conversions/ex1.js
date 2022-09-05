let value = true;
alert(typeof value); // boolean
value = String(value); // "true"
alert(typeof value); // string

alert('6' / '2'); // 3

let str = '123';
alert(typeof str); // string

let num = Number(str); // 123
alert(typeof num); // number

let age = Number('임의의 문자열 123');
alert(age); // NaN

alert(Number(undefined)); // NaN
alert(Number(null)); // 0
alert(Number(true)); // 1
alert(Number(false)); // 0
alert(Number('   123   ')); // 123

alert(Boolean(1)); // true
alert(Boolean(0)); // false
alert(Boolean('hello')); // true
alert(Boolean('')); // false
alert(Boolean(null)); // false
alert(Boolean(undefined)); // false
alert(Boolean(NaN)); // false
alert(Boolean('0')); // true
alert(Boolean(' ')); // true
