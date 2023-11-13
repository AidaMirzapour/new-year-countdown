debugger;

let dayEl = document.getElementById("day");
let hourEl = document.getElementById("hour");
let minEl = document.getElementById("minutes");
let secEl = document.getElementById("seconds");

function update() {
  let newYear = new Date("Jan 1 , 2024 00:00:00").getTime();

  let now = new Date().getTime();

  let sec = 1000;
  let min = 60 * sec;
  let hour = 60 * min;
  let day = 24 * hour;
  let countdown = newYear - now;

  let d = Math.floor(countdown / day);
  let h = Math.floor((countdown % day) / hour);
  let m = Math.floor((countdown % hour) / min);
  let s = Math.floor((countdown % min) / sec);

  dayEl.innerHTML = d;
  hourEl.innerHTML = h;
  minEl.innerHTML = m;
  secEl.innerHTML = s;

  setTimeout(update, 1000);
}
update();
