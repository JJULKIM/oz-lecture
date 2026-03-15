const maxStars = 10;
let input;
let isNotValid = true;

// 별 문자열 반환 함수
function makeStars(count = 1) {
    var stars = "";

    if (count <= 0) {
        count = 1;
    }

    for (let i = 0; i < count; i++) {
        stars += "*";
    }

    return stars;
}

// 기본 과제 함수
function printStars(count = 1) {
    console.log(makeStars(count));
}

// 도전 1: 함수 표현식
const printReverseStars = function(count = 1) {
    if (count <= 0) {
        count = 1;
    }

    for (let i = count; i >= 1; i--) {
        printStars(i);
    }
};

// 도전 2: 화살표 함수
const printSquare = (count = 1) => {
    if (count <= 0) {
        count = 1;
    }

    for (let i = 0; i < count; i++) {
        printStars(count);
    }
};

// 도전 3: ...rest
const printMultipleStars = (...counts) => {
    for (let i = 0; i < counts.length; i++) {
        console.log("Stars for count " + counts[i] + ": " + makeStars(counts[i]));
    }
};

// 기본 입력 반복
do {
    input = prompt("Enter the number of stars (1-10):");
    input = Number(input);

    if (isNaN(input) || input < 1 || input > maxStars) {
        console.log("Invalid input! Enter a number between 1 and 10.");
        continue;
    }

    isNotValid = false;

    console.log("Basic pattern:");
    printStars(input);

    console.log("Reverse pattern:");
    printReverseStars(input);

    console.log("Square pattern:");
    printSquare(input);

    const starPatterns = {
        pattern1: makeStars(input),
        pattern2: makeStars(input - 1),
        pattern3: makeStars(1)
    };

    console.log("Patterns with for...in:");
    for (let key in starPatterns) {
        console.log(key + ": " + starPatterns[key]);
    }

    console.log("Multiple stars with ...rest:");
    printMultipleStars(2, 3, input);

    break;
} while (isNotValid);