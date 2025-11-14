const targetDate = new Date();

targetDate.setTime(targetDate.getTime() + 76 * 24 * 60 * 60 *1000);
const countdownDate =   targetDate.getTime();

const x = setInterval(  function() {

const now = new Date().getTime();

const distance = countdownDate - now;

const seconds = 1000;
const minutes = seconds * 60;
const hours = minutes * 60;
const days = hours * 24;

const daysLeft = Math.floor(distance / days);
const hoursLeft = Math.floor((distance % days) / hours);
const minutesLeft = Math.floor((distance % hours) / minutes);
const secondsLeft = Math.floor((distance % minutes) / seconds);

document.getElementById("days").innerHTML = daysLeft;
document.getElementById("hours").innerHTML = hoursLeft;
document.getElementById("minutes").innerHTML = minutesLeft;
document.getElementById("seconds").innerHTML = secondsLeft;

if (distance < 0) {
    document.getElementById("days").innerHTML = "0";
    document.getElementById("hours").innerHTML = "0";
    document.getElementById("minutes").innerHTML = "0";
    document.getElementById("seconds").innerHTML = "0";

}
},1000);
