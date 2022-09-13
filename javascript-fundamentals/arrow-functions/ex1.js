let func = (arg1, arg2, ...argN) => expression;

let sum = (a, b) => a + b;
alert(sum(1, 2)); // 3

let double = (n) => n * 2;
alert(double(3)); // 6

let sayHi = () => alert('Hi');
sayHi();

let age = prompt('나이를 알려주세요.', 18);

let welcome = age < 18 ? () => alert('안녕') : () => alert('안녕하세요!');

welcome();

let sum2 = (a, b) => {
  let result = a + b;
  return result;
};

alert(sum2(1, 2)); // 3

function ask(question, yes, no) {
  if (confirm(question)) yes();
  else no();
}

ask(
  '동의하십니까?',
  () => alert('동의하셨습니다.'),
  () => alert('취소 버튼을 누르셨습니다.'),
);
