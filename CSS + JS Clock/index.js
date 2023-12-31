document.addEventListener('DOMContentLoaded', function () {

  const secHand = document.querySelector('.second-hand');
  const minHand = document.querySelector('.min-hand');
  const hourHand = document.querySelector('.hour-hand');

  function setDate() {
    const now = new Date();
    const sec = now.getSeconds();
    const secDegrees = ((sec / 60) * 360) + 90;
    secHand.style.transform = `rotate(${secDegrees}deg)`;

    const min = now.getMinutes();
    const minDegrees = ((min / 60) * 360) + 90;
    minHand.style.transform = `rotate(${minDegrees}deg)`;

    const hour = now.getHours();
    const hourDegrees = ((min / 12) * 360) + 90;
    hourHand.style.transform = `rotate(${hourDegrees}deg)`;
  }

  setInterval(setDate, 1000);
});