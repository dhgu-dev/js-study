// use strict 위에는 주석만 사용할 수 있다
'use strict';

function fn() {
  // 함수 본문 맨 앞에 위치 가능
  // 해당 함수만 strict 모드 적용
  'use strict';
}

// 브라우저 콘솔에서 strict mode 적용법
/* 방법 1
  'use strict'; <Shift+Enter를 눌러 줄 바꿈>
  // ...테스트하려는 코드 입력
  <Enter를 눌러 실행>
 */

/* 방법 2
  (function() {
    'use strict';
    // ...테스트하려는 코드 입력
  })()
 */

// 클래스와 모듈엔 use strict가 자동으로 적용됨
