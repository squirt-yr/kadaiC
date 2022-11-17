// main.js
 
// デジタル時計表示用
let clock = null;
 
// デジタル時計を表示する
const digitalClock = ()=>{
    // 現在時刻取得
    const now = new Date();
 
    // 時・分・秒取得
    const [hour, minute, second] = [now.getHours(), now.getMinutes(), now.getSeconds()];
 
    // 0埋め処理
    const [txtHour, txtMinute, txtSecond] = [
        String(hour).padStart(2, "0"),
        String(minute).padStart(2, "0"),
        String(second).padStart(2, "0"),
    ];
 
    // 表示
    const txtDigitalClock = `${txtHour}:${txtMinute}:${txtSecond}`;
    clock.textContent = txtDigitalClock;
    requestAnimationFrame(digitalClock);
};
 
// 起動時の処理
window.addEventListener("load", ()=>{
    // 時計表示部分DOM取得
    clock = document.getElementById("clock");
 
    // デジタル時計開始
    digitalClock();
});
