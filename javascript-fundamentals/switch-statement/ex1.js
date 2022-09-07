let a = 2 + 2;

switch (a) {
  case 3:
    alert('small');
    break;
  case 4:
    alert('equal');
    break;
  case 5:
    alert('big');
    break;
  default:
    alert('unknown');
}

// break문이 없는 경우
alert('equal');
alert('big');
alert('unknown');

let x = '1';
let y = 0;
switch (+x) {
  case y + 1:
    alert('이 코드가 실행됨');
    break;
  default:
    alert('이 코드는 실행 안됨');
}

a = 3;

switch (a) {
  case 4:
    alert('계산이 맞습니다!');
    break;

  case 3: // (*) 두 case문을 묶음
  case 5:
    alert('계산이 틀립니다!');
    alert('수학 수업을 다시 들어보는걸 권유 드립니다.');
    break;

  default:
    alert('계산 결과가 이상하네요.');
}

let arg = prompt('input', '');
// switch문은 ===으로 비교를 함
switch (arg) {
  case '0':
  case '1':
    alert('0 or 1을 입력');
    break;
  case '2':
    alert('2를 입력');
    break;
  case 3:
    alert('이 코드는 절대 실행되지 않는다');
    break;
  default:
    alert('알 수 없는 값을 입력');
    break;
}
