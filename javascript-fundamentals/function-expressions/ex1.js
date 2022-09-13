function sayHi() {
  alert('Hi');
}

alert(sayHi); // 함수 코드가 보임

let sayHello = function () {
  alert('Hello');
};

let func = sayHi;
func(); // Hi
sayHi(); // Hi

let func2 = sayHello;
func2(); // Hello

function ask(question, yes, no) {
  if (confirm(question)) yes();
  else no();
}

function showOk() {
  alert('ok');
}

function showCancel() {
  alert('cancel');
}

ask('동의하나요?', showOk, showCancel);

ask(
  '동의하나요?',
  function () {
    alert('동의하셨습니다.');
  },
  function () {
    alert('취소 버튼을 누르셨습니다.');
  },
);

// 함수 선언문
// 함수 선언문은 함수 선언문이 정의되기 전에도 호출할 수 있습니다.
function sum(a, b) {
  return a + b;
}

// 함수 표현식
// 함수 표현식은 실제 실행 흐름이 해당 함수에 도달했을 때 함수를 생성합니다.
// 따라서 실행 흐름이 함수에 도달했을 때부터 해당 함수를 사용할 수 있습니다.
let sum = function (a, b) {
  return a + b;
};

sayA('John'); // Hello, John

function sayA(name) {
  alert(`Hello, ${name}`);
}

sayB('John'); // error!

let sayB = function (name) {
  // (*) 마술은 일어나지 않습니다.
  alert(`Hello, ${name}`);
};

// 엄격 모드에서 함수 선언문이 코드 블록 내에 위치하면 해당 함수는 블록 내 어디서든 접근할 수 있습니다.
// 하지만 블록 밖에서는 함수에 접근하지 못합니다.
let age = 16; // 16을 저장했다 가정합시다.

if (age < 18) {
  welcome(); // \   (실행)
  //  |
  function welcome() {
    //  |
    alert('안녕!'); //  |  함수 선언문은 함수가 선언된 블록 내
  } //  |  어디에서든 유효합니다
  //  |
  welcome(); // /   (실행)
} else {
  function welcome() {
    alert('안녕하세요!');
  }
}

// 여기는 중괄호 밖이기 때문에
// 중괄호 안에서 선언한 함수 선언문은 호출할 수 없습니다.

welcome(); // Error: welcome is not defined

age = prompt('나이를 알려주세요.', 18);

let welcome2;

if (age < 18) {
  welcome2 = function () {
    alert('hi');
  };
} else {
  welcome2 = function () {
    alert('hello');
  };
}

welcome2(); // 제대로 동작

let welcome3 =
  age < 18
    ? function () {
        alert('안녕!');
      }
    : function () {
        alert('안녕하세요!');
      };

welcome3(); // 제대로 동작합니다.
