// 비동기 개념
// console.log("이미지 로딩 시작")

// 강제적으로 비동기 상황 만들었음.
// setTimeout (()=> {
//     console.log("이미지 로딩 완료");
// }, 2000);  //1000 밀리세컨드가 1초
// console.log("다른 작업 수행");

// 콜백 함수 - 사용자가 넘겨준 함수 (매개변수를 함수로 실행 시키기)
function sayHello(name, callback) {
    console.log('안녕, ${name]');
    setTimeout(() => {
        callback();
    }, 2000);
}


function sayHelloSync(name) {
    console.log(`[sync] 안녕, ${name}`);
}

sayHelloSync("태구");
sayHello("태구", () => {
    console.log("콜백 함수 실행");
});