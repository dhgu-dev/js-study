alert(2 > 1); // true
alert(2 == 1); // false
alert(2 != 1); // true

let result = 5 > 4;
alert(result); // true;

// 문자열은 사전 순(유니코드 순)으로 비교
alert('Z' > 'A'); // true
alert('Glow' > 'Glee'); // true
alert('Bee' > 'Be'); // true

// 비교할 값의 자료형이 다르면 값들을 숫자형으로 바꿈
alert('2' > 1); // true
alert('01' == 1); // true
alert(true == 1); // true
alert(false == 0); // true

let a = 0;
alert(Boolean(a)); // false

let b = '0';
alert(Boolean(b)); // true

alert(a == b); // true

alert(0 == false); // true
alert('' == false); // true
alert(0 === false); // false

alert(null === undefined); // false
// null or undefined를 다른 일반적인 값과 비교하면 무조건 false를 반환
alert(null == undefined); // true

alert(null > 0); // false
// 동등 연산자는 피연산자가 undefined or null일 때 형 변환을 하지 않는다
alert(null == 0); // false
alert(null >= 0); // true

alert(undefined > 0); // false
alert(undefined < 0); // false
alert(undefined == 0); // false
