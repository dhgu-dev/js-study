let message;

message = 'Hello';

alert(message); // Hello

let message2 = 'Hello2';

alert(message2); // Hello2

let user = 'John',
  age = 25,
  message3 = 'Hello';

let user2 = 'John';
let age2 = 25;
let message4 = 'Hello';

let box;

box = 'item1';
box = 'item2';

alert(box); // item2

let Hello = 'Hello world!';
let message5;

message5 = Hello;

alert(Hello); // Hello world!
alert(message5); // Hello world!

/* SyntaxError: 'name' has already been declared
let name = "Lee";
let name = "Kim";
 */

// Naming Rule
// 1. 변수명에는 오직 문자와 숫자 그리고 $와 _만 들어갈 수 있다
// 2. 첫 글자는 숫자가 될 수 없다
let userName;
let test123;

let $ = 1;
let _ = 2;
alert($ + _); // 3

/* Incorrect Name 
let 1a;
let my-name;
 */

// 대소문자 구별
let apple;
let AppLE;

// reserved name은 변수명으로 사용 불가
// Ex) let, class, return, function

const myBirthday = '18.04.1982';
/* error, can't reassign the constant 
myBirthday = '01.01.2001';
 */

// 대문자 상수, 하드 코딩한 값의 별칭을 만들 때 사용
const COLOR_RED = '#F00';
const COLOR_ORANGE = '#FF7F00';

let color = COLOR_ORANGE;
alert(color); // #FF7F00
