function add(a, b) {
  return a + b;
}
const result1 = add(2, 3); // 5
const result2 = add("나는", "누구다");
const result3 = add(true, false);
console.log(result1, result2, result3);

// const addF = (a) => {
//   const addF2 = (b) => {
//   const result = a + b;
//     return result;
//   };
//   return addF2;  // 함수를 값처럼 1급 객체로 여겨서 반환해줌.
// };
const addF = (a) => (b) => a + b; // 위에 코드랑 완전히 같은 방식
const add5 = addF(5); // (ㅠ) => 5 + b;
const add5and10 = add5(10); // 5+ 10;
console.log(add5and10);