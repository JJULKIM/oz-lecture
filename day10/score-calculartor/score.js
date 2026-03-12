// step 1.  점수입력
// step 2.  변수로 저장 되는지 확인
// step 3. 입력받은 사용자의 점수 등급 나누기
// step 4.  패스 여부 확인
// step 5. 등급에 따라 메시지 만들어 주는 작업
// step 6. 메시지들을 로그로 출력
// step 7. 최종점수에 +5




const maxScore = 100;   // 최대 원점수 기준

let input = prompt("점수를 입력하세요."); // prompt로 받은 입력값
let score = Number(input); // 숫자로 바꾼 점수

var grade; // 나중에 등급 저장
let message; //나중에 메시지 저장

// score +=5;  // (기본과제용) 입력 점수에 5점 보너스 더함

if (isNaN(score) || score < 0 || score > 100) {
    console.log("Invalid score! Please enter a number between 0 and 100.");

} else {
    // 단항 연산자
    score++;

    // 복합 대입
    score *= 1.1;

    //보너스 점수
    score +=5;

    // 최대 점수 제한
    if (score > maxScore) {
        score = maxScore;
    }
}



// 등급계산 - if, eals if, else 로 등급 정하기

if (score >= 100) {
    grade ="S";
} else if (score >= 90 && score < 100) {
    grade = "A";
} else if (score >= 80 && score < 90) {
    grade = "B";
} else if (score >= 70 && score < 80) {
    grade = "C";
} else if (score >= 60 && score < 70) {
    grade = "D";
} else {
    grade = "F";
}


//  Pass / Fail
// 삼항 연산자 사용
let passStatus = score >= 60 ? "Pass" : "Fail";

// perfect score 우선 처리
if (score === 100) {
    message = "Perfect Score!";
} else {

// 등급별 메시지 
switch (grade) {
    case "S":
        message = "Super!!";
        break;
    case "A":
        message = "Excellent work!";
        break;
    case "B":
        message = "Good job!";
        break;  
    case "C":
        message = "Satisfactory performance.";
        break;      
    case "D":
        message = "Needs improvement.";
        break;   
    case "F":
        message = "Please try harder!";
        break;           
}
}

console.log("Final Score: " + score);
console.log("Grade: " + grade);
console.log("Status: " + passStatus);
console.log("Message: " + message);
