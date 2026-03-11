// ==============================
// 1. 변수 선언 (var, let, const)
// ==============================

// string
var myName = "Julia";

// number
let myAge = 41;

// boolean
const isStudent = true;

// null
let myEmail = null;

// undefined
var myPet = undefined;

// Symbol
const uniqueId = Symbol("userId");

// BigInt
let bigScore = 1234567890123456789012345678901234567890n;


// ==============================
// 2. 문자열 처리
// - 이스케이프 문자 \n, \t 사용
// - 문자열 연결 연산자 + 사용
// ==============================

var introText = "=== My Profile ===\n" +
                "Name:\t" + myName + "\n" +
                "Age:\t" + myAge + "\n" +
                "Student:\t" + isStudent;

console.log(introText);

// 문자열 연결 연산자(+)로 문장 만들기
console.log("Hello! My name is " + myName + " and I am " + myAge + " years old.");


// ==============================
// 3. 배열 리터럴
// - 최소 3개의 취미 저장
// ==============================

let hobbies = ["reading", "coding", "traveling"];

console.log("My hobbies: " + hobbies[0] + ", " + hobbies[1] + ", " + hobbies[2]);


// ==============================
// 4. 객체 리터럴
// - 최소 3개의 속성 포함
// ==============================

const profile = {
    name: myName,
    age: myAge,
    isStudent: isStudent,
    city: "Seoul"
};

// 객체 속성을 활용한 프로필 문장
console.log("Profile: " + profile.name + " is " + profile.age + " years old and lives in " + profile.city + ".");


// ==============================
// 5. typeof 사용
// - 최소 2개의 변수 타입 출력
// ==============================

console.log("Variable myName is: " + typeof myName);
console.log("Variable myAge is: " + typeof myAge);
console.log("Variable isStudent is: " + typeof isStudent);
console.log("Variable hobbies is: " + typeof hobbies);
console.log("Variable profile is: " + typeof profile);


// ==============================
// 6. 도전 과제
// - null 과 undefined 구분
// - 템플릿 문자열 사용
// - 추가 데이터 처리
// ==============================

// null / undefined typeof 확인
console.log("Variable myEmail is: " + typeof myEmail);   // object
console.log("Variable myPet is: " + typeof myPet);       // undefined

// null 과 undefined 비교
console.log("Is null strictly equal to undefined? " + (null === undefined));

// 템플릿 문자열 사용
console.log(`Template String -> Name: ${myName}, Age: ${myAge}, Student: ${isStudent}`);

// 배열에 null / undefined 포함
let extraData = ["music", null, undefined];

console.log("extraData[0]: " + extraData[0] + ", type: " + typeof extraData[0]);
console.log("extraData[1]: " + extraData[1] + ", type: " + typeof extraData[1]);
console.log("extraData[2]: " + extraData[2] + ", type: " + typeof extraData[2]);

// 객체에 새로운 속성 추가
profile.email = null;

// null 확인 후 출력
console.log("profile.email: " + profile.email);
console.log("Is profile.email null? " + (profile.email === null));