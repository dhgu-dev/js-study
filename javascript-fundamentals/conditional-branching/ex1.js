let answer = prompt('1 + 2 = ?', '');
if (answer == 3) alert('정답입니다');

if (answer == 3) {
  alert('정답입니다');
  alert('very smart');
}

if (0) {
  // ...
}

if (1) {
  // ...
}

let cond = answer == 2015;

if (cond) {
  // ...
}

let year = prompt('ECMAScript-2015 명세는 몇 년도에 출판되었을까요?', '');

if (year == 2015) {
  alert('정답입니다!');
} else {
  alert('오답입니다!'); // 2015 이외의 값을 입력한 경우
}

let year2 = prompt('ECMAScript-2015 명세는 몇 년도에 출판되었을까요?', '');

if (year2 < 2015) {
  alert('숫자를 좀 더 올려보세요.');
} else if (year2 > 2015) {
  alert('숫자를 좀 더 내려보세요.');
} else {
  alert('정답입니다!');
}

let accessAllowed;
let age = prompt('나이 입력', '');

if (age > 18) {
  accessAllowed = true;
} else {
  accessAllowed = false;
}

alert(accessAllowed);

// let result = condition ? value1 : value2
let accessAllowed2 = age > 18 ? true : false;

let accessAllowed3 = age > 18;

let message =
  age < 3
    ? 'baby hi'
    : age < 18
    ? 'hi'
    : age < 100
    ? 'welcome'
    : 'very old or invalid age';

alert(message);

if (age < 3) {
  message = 'baby hi';
} else if (age < 18) {
  message = 'hi';
} else if (age < 100) {
  message = 'welcome';
} else {
  message = 'very old or invalid age';
}

let company = prompt('자바스크립트는 어떤 회사가 만들었을까요?', '');

company == 'Netscape' ? alert('정답입니다!') : alert('오답입니다!');

if (company == 'Netscape') {
  alert('정답입니다!');
} else {
  alert('오답입니다!');
}
