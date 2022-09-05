// 확인 버튼이 있는 모달
alert('modal window');

// prompt(title, [default])
// 입력 필드, 확인 및 취소 버튼이 있는 모달
// 입력 취소 시 null을 반환
let age = prompt('나이를 입력', 100);
alert(`${age}살 입니다`); // 100살 입니다

// 질문과 확인 및 취소 버튼이 있는 모달
let isBoss = confirm('당신이 보스인가요?');
alert(isBoss); // 확인 버튼 클릭 시 true
