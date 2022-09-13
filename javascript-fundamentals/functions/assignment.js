function checkAge(age) {
  if (age > 18) {
    return true;
  }
  // else를 삭제해도 기존 코드와 동일하게 작동
  return confirm('보호자의 동의를 받으셨나요?');
}

function checkAge(age) {
  return age > 18 ? true : confirm('보호자의 동의를 받으셨나요?');
}

function checkAge2(age) {
  return age > 18 || confirm('보호자의 동의를 받으셨나요?');
}

function min(a, b) {
  if (a < b) {
    return a;
  } else {
    return b;
  }
}

function min2(a, b) {
  return a < b ? a : b;
}

function pow(x, n) {
  let result = x;

  for (let i = 1; i < n; i++) {
    result *= x;
  }

  return result;
}

let x = prompt('x?', '');
let n = prompt('n?', '');

if (n < 1) {
  alert(`${n}은 양의 정수이어야 합니다.`);
} else {
  alert(pow(x, n));
}
