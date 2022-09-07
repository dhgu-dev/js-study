alert(true || true); // true
alert(false || true); // true
alert(true || false); // true
alert(false || false); // false

if (1 || 0) {
  // if (true || false)
  alert('truthy');
}

let hour = 9;

if (hour < 10 || hour > 18) {
  alert('영업시간이 아닙니다');
}

hour = 12;
let isWeekend = true;

if (hour < 10 || hour > 18 || isWeekend) {
  alert('영업시간이 아닙니다');
}

alert(1 || 0); // 1
alert(null || 1); // 1
alert(null || 0 || 1); // 1
alert(undefined || null || 0); // 0

let firstName = '';
let lastName = '';
let nickName = '바이올렛';
alert(firstName || lastName || nickName || '익명'); // 바이올렛

true || alert('not printed');
false || alert('printed');

alert(true && true); // true
alert(false && true); // false
alert(true && false); // false
alert(false && false); // false

let h = 12;
let m = 30;

if (h == 12 && m == 30) {
  alert('현재 시각은 12시 30분입니다');
}

if (1 && 0) {
  // 실행되지 않음
}

alert(1 && 0); // 0
alert(1 && 5); // 5
alert(null && 5); // null
alert(0 && 'anything'); // 0

alert(1 && 2 && null && 3); // null
alert(1 && 2 && 3); // 3

// &&의 우선순위가 ||보다 높다

let x = 1;
x > 0 && alert('0보다 크다');

let y = 1;
if (y > 0) alert('0보다 크다');

alert(!true); // false
alert(!0); // true

alert(!!'non-empty string'); // true
alert(!!null); // false
alert(Boolean('non-empty string')); // true
alert(Boolean(null)); // false
