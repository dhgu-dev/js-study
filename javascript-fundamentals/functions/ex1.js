function showHello() {
  alert('hello');
}

showHello();

function showMessage() {
  let message = 'hi';
  alert(message);
}

showMessage(); // hi
alert(message); // ReferenceError: message is not defined

let userName = 'John';

function showUserName() {
  let message = 'Hello, ' + userName;
  alert(message);
}

showUserName(); // Hello, John

function showBob() {
  userName = 'Bob';

  let message = 'Hi, ' + userName;
  alert(message);
}

alert(userName); // John

showBob(); // Hi, Bob

alert(userName); // Bob

userName = 'John';

function showBob2() {
  let userName = 'Bob';

  let message = 'Hi, ' + userName;
  alert(message);
}

alert(userName); // John

showBob2(); // Hi, Bob

alert(userName); // John

function showMessage2(from, text) {
  alert(from + ': ' + text);
}

showMessage2('Ann', 'Hi!'); // Ann: Hi!

function showMessage3(from, text) {
  from = '*' + from + '*';
  alert(from + ': ' + text);
}

let from = 'Ann';
showMessage3(from, 'Hello'); // *Ann*: Hello

alert(from); // Ann

showMessage2('Ann'); // Ann: undefined

function showMessage4(from, text = 'no text given') {
  alert(`${from}: ${text}`);
}

showMessage4('Ann'); // Ann: no text given

function showMessage5(from, text = anotherFunction()) {
  // anotherFunction()은 text값이 없을 때만 호출됨
  // anotherFunction()의 반환 값이 text의 값이 됨
}

function showMessage6(text) {
  if (text === undefined) {
    text = 'empty string';
  }
  alert(text);
}

showMessage6(); // empty string

function showMessage7(text) {
  text = text || 'empty string';
  alert(text);
}

showMessage7(); // empty string

function showCount(count) {
  alert(count ?? 'unknown');
}

showCount(0); // 0
showCount(null); // unknown
showCount(); // unknown

function sum(a, b) {
  return a + b;
}

let result = sum(1, 2);
alert(result); // 3

function checkAge(age) {
  if (age >= 18) {
    return true;
  } else {
    return confirm('보호자의 동의를 받으셨나요?');
  }
}

let age = prompt('input age', 18);

if (checkAge(age)) {
  alert('접속 허용');
} else {
  alert('접속 차단');
}

function showMovie(age) {
  if (!checkAge(age)) {
    return;
  }

  alert('show movie');
}

function doNothing() {}
alert(doNothing() === undefined); // true

function doNothing2() {
  return;
}
alert(doNothing2() === undefined); // true

/*
// Bad
return
 (some + long + expression + or + whatever * f(a) + f(b))

// 자바스크립트는 return문 끝에 세미콜론을 자동으로 넣는다
return;
 (some + long + expression + or + whatever * f(a) + f(b))

// Good
return (
  some + long + expression
  + or +
  whatever * f(a) + f(b)
  )
*/

// 함수 이름 prefix
// "get…" – 값을 반환함
// "calc…" – 무언가를 계산함
// "create…" – 무언가를 생성함
// "check…" – 무언가를 확인하고 불린값을 반환함
// "show" - 무언가를 보여줌

// 함수 이름 짓기
// 1. 함수 이름은 함수가 어떤 동작을 하는지 설명할 수 있어야 합니다.
// 이렇게 이름을 지으면 함수 호출 코드만 보아도 해당 함수가 무엇을 하고 어떤 값을 반환할지 바로 알 수 있습니다.
// 2. 함수는 동작을 수행하기 때문에 이름이 주로 동사입니다.
// 3. 잘 알려진 접두어를 사용해 이름을 지을 수 있습니다.
// 접두어를 사용하면 함수 이름만 보고도 해당 함수가 어떤 동작을 하는지 파악할 수 있습니다.

// 함수는 동작 하나만 담당해야 합니다.

// self describing
function showPrimes(n) {
  nextPrime: for (let i = 2; i < n; i++) {
    for (let j = 2; j < i; j++) {
      if (i % j == 0) continue nextPrime;
    }

    alert(i); // 소수
  }
}

function isPrime(n) {
  for (let i = 2; i < n; i++) {
    if (n % i == 0) return false;
  }
  return true;
}

function showPrimes2(n) {
  for (let i = 2; i < n; i++) {
    if (!isPrime(i)) continue;

    alert(i); // a prime
  }
}
