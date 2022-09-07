// a ?? b
// a가 null도 아니고 undefined도 아니면 a
// 그 외의 경우는 b
x = a !== null && a !== undefined ? a : b;

let firstName = null;
let lastName = null;
let nickName = '바이올렛';

alert(firstName ?? lastName ?? nickName ?? '익명의 사용자'); // 바이올렛

let height = 0;
alert(height || 100); // 100
alert(height ?? 100); // 0

let h = null;
let w = null;
// ??는 =와 ? 보다는 먼저, 대부분의 연산자보다는 나중에 평가됨
let area = (h ?? 100) * (w ?? 50);
alert(area); // 5000

// 괄호 없이 ??를 ||나 &&와 함께 사용하는 것은 금지되어있습니다
// SyntaxError: Unexpected token '??'
// let x = 1 && 2 ?? 3;

// fix
let x = (1 && 2) ?? 3;
alert(x); // 2
