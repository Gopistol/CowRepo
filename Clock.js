const clock = document.querySelector("#Clock");

function getClock() {
  const date = new Date();
  // const years = String(date.getFullYear()).padEnd(2, " ");
  const months = String(date.getMonth() + 1).padStart(2,"0");
  const dates = String(date.getDate()).padStart(2,"0");

  const hours = String(date.getHours()).padStart(2,"0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const seconds = String(date.getSeconds()).padStart(2, "0");
  clock.innerText = `22.${months}.${dates} ${hours}:${minutes}:${seconds} 기준`;
}

getClock();
setInterval(getClock, 1000);