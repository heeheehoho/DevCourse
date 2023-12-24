// non-blocking

function first() {
    console.log("첫 번쨰")
}
function second() {
    console.log("두 번쨰")
}
function third() {
    console.log("세 번쨰")
}
first();
setTimeout(second, 2000);
third();

// 출력
// 첫 번쨰
// 세 번쨰
// 두 번쨰