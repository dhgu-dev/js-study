alert(null || 2 || undefined); // 2

alert(alert(1) || 2 || alert(3)); // 1 2

alert(1 && null && 2); // null

alert(alert(1) && alert(2)); // 1 undefined

alert(null || (2 && 3) || 4); // 3

if (14 <= age && age <= 90) {
}

if (!(14 <= age && age <= 90)) {
}

if (age < 14 || age > 90) {
}

// -1 || 0 은 -1 이므로 truthy입니다.
// 따라서 alert가 실행됩니다.
if (-1 || 0) alert('first');

// -1 && 0 은 0 이므로 falsy입니다.
// 따라서 alert가 실행되지 않습니다.
if (-1 && 0) alert('second');

// 연산자 &&는 ||보다 우선순위가 높습니다.
// 따라서 -1 && 1 이 먼저 실행되어 아래와 같이 표현식이 순차적으로 바뀝니다.
// null || -1 && 1  ->  null || 1  ->  1
// 결과적으로 alert가 실행됩니다.
if (null || (-1 && 1)) alert('third');

let userName = prompt('사용자 이름을 입력해주세요.', '');

if (userName == 'Admin') {
  let pass = prompt('비밀번호:', '');

  if (pass == 'TheMaster') {
    alert('환영합니다!');
  } else if (pass == '' || pass == null) {
    alert('취소되었습니다.');
  } else {
    alert('인증에 실패하였습니다.');
  }
} else if (userName == '' || userName == null) {
  alert('취소되었습니다.');
} else {
  alert('인증되지 않은 사용자입니다.');
}
