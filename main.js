// main.js
 
// デジタル時計表示用
let clock = null;
let clockDate = null;
 
// デジタル時計を表示する
const digitalClock = ()=>{
    // 現在時刻取得
    const now = new Date();

    //年・月・日・曜日取得
    const weekday = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
    const [year,month,date,day] = [now.getFullYear(), now.getMonth()+1, now.getDate(), weekday[now.getDay()]];
    // 時・分・秒取得
    const [hour, minute, second] = [now.getHours(), now.getMinutes(), now.getSeconds()];

    //0埋め処理
    const [txtYear, txtMonth, txtDate, txtDay] = [
        String(year).padStart(2, "0"),
        String(month).padStart(2, "0"),
        String(date).padStart(2, "0"),
        String(day).padStart(2, "0"),
    ];
    // 0埋め処理
    const [txtHour, txtMinute, txtSecond] = [
        String(hour).padStart(2, "0"),
        String(minute).padStart(2, "0"),
        String(second).padStart(2, "0"),
    ];
 
    // 表示
    const txtDigitalClockDate = `${txtYear}.${txtMonth}.${txtDate}.${txtDay}`;
    const txtDigitalClock = `${txtHour}:${txtMinute}:${txtSecond}`;
    clockDate.textContent = txtDigitalClockDate;
    clock.textContent = txtDigitalClock;
    requestAnimationFrame(digitalClock);
};
 
// 起動時の処理
window.addEventListener("load", ()=>{
    // 時計表示部分DOM取得
    clock = document.getElementById("clock");
    clockDate = document.getElementById("clockDate");
 
    // デジタル時計開始
    digitalClock();
});
