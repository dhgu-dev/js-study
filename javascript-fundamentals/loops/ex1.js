let i = 0;
while (i < 3) {
  // 0 1 2
  alert(i);
  i++;
}

i = 3;
while (i) {
  alert(i);
  i--;
}

i = 3;
while (i) alert(i--);

i = 0;
do {
  alert(i);
  i++;
} while (i < 3);

for (let i = 0; i < 3; i++) {
  alert(i);
}

// for (let i = 0; i < 3; i++) alert(i)

// begin을 실행함
i = 0;
// condition이 truthy이면 → body를 실행한 후, step을 실행함
if (i < 3) {
  alert(i);
  i++;
}
// condition이 truthy이면 → body를 실행한 후, step을 실행함
if (i < 3) {
  alert(i);
  i++;
}
// condition이 truthy이면 → body를 실행한 후, step을 실행함
if (i < 3) {
  alert(i);
  i++;
}
// i == 3이므로 반복문 종료

for (let x = 0; x < 3; x++) {
  alert(x); // 0 1 2
}
// Error: x is not defined
// alert(x)

i = 0;
for (i = 0; i < 3; i++) {
  alert(i); // 0 1 2
}
alert(i); // 3

i = 0;
for (; i < 3; i++) {
  alert(i); // 0 1 2
}

i = 0;
for (; i < 3; ) {
  alert(i++);
}

/* 
for (;;) {
  // 무한 루프
}
 */

let sum = 0;
while (true) {
  let value = +prompt('input number', '');

  if (!value) break;

  sum += value;
}
alert('sum: ' + sum);

for (let i = 0; i < 10; i++) {
  if (i % 2 == 0) continue;
  alert(i); // 1 3 5 7 9
}

for (let i = 0; i < 10; i++) {
  if (i % 2) {
    alert(i);
  }
}

// SyntaxError
// (i > 5) ? alert(i) : continue;

// label
outer: for (let i = 0; i < 3; i++) {
  for (let j = 0; j < 3; j++) {
    let input = prompt(`(${i},${j})의 값`, '');
    if (!input) break outer;
  }
}
alert('done');

outer2: for (let i = 0; i < 3; i++) {
  if (i % 2 == 0) continue outer2;
}

/* 불가능
break label;
label: for(...)
 */
