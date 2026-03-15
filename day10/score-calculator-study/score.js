let input = prompt("점수를 입력하세요.")

// let score = input +5; // input 값을 문자로 인식하므로 10입력 시 결과는 105 = "10" + "5"

//  : 항상 변하지 않는 값. / input 은 사용자가 입력하는 변할 수 있는 변수
// 상수(5)는 변하지 않음. -> 상수로써 의미 정확히 할 필요 있음
const BONUS_SCORE = 5;

console.log(input)
console.log(typeof input);

let score = Number (input);
console.log(score);
console.log(typeof score);

// let lastScore = score +BONUS_SCORE;
// console.log(lastScore);
// console.log(typeof lastScore);


score += BONUS_SCORE;
let lastScore = score;
console.log(lastScore);
console.log(typeof lastScore);