const time = document.querySelector("h1");
setInterval(() => {
  //getting hours,min,sec
  let date = new Date();
  let h = date.getHours();
  let m = date.getMinutes();
  let s = date.getSeconds();
  let ampm = "AM";
  if (h >= 12) {
    h = h - 12;
    ampm = "PM";
  }
  //if hour value is 0,set this value to 12
  h = h == 0 ? (h = 12) : h;

  // adding 0 before h,m,s if value is less then 0
  h = h < 10 ? "0" + h : h;
  m = m < 10 ? "0" + m : m;
  s = s < 10 ? "0" + s : s;
  time.innerText = `${h}:${m}:${s} ${ampm}`;
}, 1000);
