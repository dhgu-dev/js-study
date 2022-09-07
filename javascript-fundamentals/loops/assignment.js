let i = 3;

while (i) {
  alert(i--);
}

// 실행 순서
i = 3;

alert(i--); // 3이 출력되고 i는 2로 줄어듭니다.

alert(i--); // 2가 출력되고 i는 1로 줄어듭니다.

alert(i--); // 1이 출력되고 i는 0으로 줄어듭니다.

// i가 0이 되었기 때문에 while(i)는 종료됩니다.

i = 0;
while (++i < 5) alert(i); // 1 2 3 4

i = 0;
while (i++ < 5) alert(i); // 1 2 3 4 5

for (let i = 0; i < 5; i++) alert(i); // 0 1 2 3 4

for (let i = 0; i < 5; ++i) alert(i); // 0 1 2 3 4

for (let i = 2; i <= 10; i++) {
  if (i % 2 == 0) {
    alert(i);
  }
}

for (let i = 0; i < 3; i++) {
  alert(`number ${i}!`);
}

let j = 0;
while (j < 3) {
  alert(`number ${j}!`);
  j++;
}

let num;
do {
  num = prompt('100 초과 숫자를 입력', 0);
} while (num <= 100 && num);

let n = 10;

nextPrime: for (let i = 2; i <= n; i++) {
  for (let j = 2; j < i; j++) {
    if (i % j == 0) continue nextPrime;
  }
  alert(i); // prime
}
