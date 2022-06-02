const daysEl = document.getElementById('Days');
const hoursEl = document.getElementById('Hours');
const minutesEl = document.getElementById('Minutes');
const secondsEl = document.getElementById('Seconds');

const newBirthday = '2 Sep 2022';

function countdown() {
    const newBirthdayDate = new Date(newBirthday);
    const currentDate = new Date();

    const totalSeconds = (newBirthdayDate - currentDate) / 1000;

    const Days = Math.floor(totalSeconds / 3600 / 24);
    const Hours = Math.floor(totalSeconds / 3600) % 24;
    const Minutes = Math.floor(totalSeconds / 60) % 60;
    const Seconds = Math.floor(totalSeconds) % 60;

    daysEl.innerHTML = Days;
    hoursEl.innerHTML = formatTime(Hours);
    minutesEl.innerHTML = formatTime(Minutes);
    secondsEl.innerHTML = formatTime(Seconds);
}

function formatTime(time) {
    return time < 10 ? `0${time}` : time;
}


// initial call
countdown();

setInterval(countdown, 1000);

