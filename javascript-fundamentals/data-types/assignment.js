let name = 'Ilya';

// 표현식은 숫자 1입니다.
alert(`hello ${1}`); // hello 1

// 표현식은 문자열 "name"입니다.
alert(`hello ${'name'}`); // hello name

// 표현식 안에 변수가 들어가 있기 때문에, 이 변수가 평가되어 전체 문자열이 반환됩니다.
alert(`hello ${name}`); // hello Ilya
