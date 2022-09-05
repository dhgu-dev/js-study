// JS는 동적 타입 언어다
let message = 'hello';
message = 12345;

// number type
// range = (2^53-1)(9007199254740991) ~ -(2^53-1)
let n = 123;
n = 12.345;

alert(1 / 0); // Infinity
alert(Infinity); // Infinity

alert('Not a number' / 2); // NaN
alert('Not a number' / 2 + 5); // NaN

// BigInt
const bigInt = 123456789012345678901234567890n;

// string type
let str = 'hello';
let phrase = `can embed another ${str}`;

alert(`hello, ${str}!`); // hello, hello!
alert(`the result is ${1 + 2}`); // the result is 3

// boolean type
let nameFieldChecked = true;
let ageFieldchecked = false;

let isGreater = 4 > 1;
alert(isGreater); // true

// null 값
// nothing, empty, unknown을 나타내는 데 사용
let age = null;

// undefined 값
// 값이 할당되지 않은 상태를 나타내는 데 사용
let nickname;
alert(nickname); // undefined

let num = 30;
num = undefined;
alert(num); // undefined

// object type
let obj = {};

// symbol type
Symbol('id');

// typeof -> 인수의 자료형을 나타내는 문자열을 반환
typeof undefined; // "undefined"
typeof 0; // "number"
typeof 10n; // "bigint"
typeof true; // "boolean"
typeof 'foo'; // "string"
typeof Symbol('id'); // "symbol"
typeof Math; // "object"
typeof null; // "object", 언어상 오류 -> null은 객체가 아님
typeof alert; // "function"
