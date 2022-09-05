let x = 1;
x = -x;
alert(x); // -1

let a = 1,
  b = 3;
alert(b - a); // 2

alert(5 % 2); // 1
alert(8 % 3); // 2

alert(2 ** 2); // 4
alert(2 ** 3); // 8
alert(2 ** 4); //16

alert(4 ** (1 / 2)); // 2, 제곱근
alert(8 ** (1 / 3)); // 2, 세제곱근

let s = 'my' + 'string';
alert(s); // mystring

alert('1' + 2); // "12"
alert(2 + '1'); // "21"

alert(2 + 2 + '1'); // "41"

alert(6 - '2'); // 4
alert('6' / '2'); // 3

let z = 1;
alert(+z); // 1

let w = -2;
alert(+w); // -2

alert(+true); // 1
alert(+''); // 0

let apples = '2';
let oranges = '3';
alert(apples + oranges); // 23
alert(+apples + +oranges); // 5

let result = 2 * 2 + 1;
alert(result); // 5

// 할당 연산자는 쓰여진 값을 반환한다
let i = 1;
let j = 2;
let k = 3 - (i = j + 1);
alert(i); // 3
alert(k); // 0

i = j = k = 2 + 2;
alert(i); // 4
alert(j); // 4
alert(k); // 4

// better
k = 2 + 2;
j = k;
i = k;

let num = 2;
num += 5; // num = num + 5
num *= 2; // num = num * 2
alert(num); // 14

let m = 2;
m *= 3 + 5;
alert(m); // 16, *=의 우측이 먼저 평가됨

let cnt = 2;
cnt++;
alert(cnt); // 3

cnt--;
alert(cnt); // 2

let counter = 1;
let u = ++counter;
alert(u); // 2

counter = 1;
let v = counter++;
alert(v); // 1

counter = 1;
alert(2 * ++counter); // 4

counter = 1;
alert(2 * counter++); // 2

// 비트 연산자
// Ex) &, |, ^, ~, <<, >>, >>>(zero-fill right shift)

// 쉼표 연산자: 여러 표현식을 코드 한 줄에서 평가
// 마지막 표현식의 평가 결과만 반환
let t = (1 + 2, 3 + 4); // 할당 연산자보다 우선순위가 낮아 괄호가 필요
alert(t); // 7

// 활용 예시
for (a = 1, b = 3, c = a * b; a < 10; a++) {}
