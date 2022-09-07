const dayComponent = document.getElementById('days');
const hourComponent = document.getElementById('hours');
const minuteComponent = document.getElementById('minutes');
const secondComponent = document.getElementById('seconds'); 

const newYear = '1 January 2023';

function countdown() {
    const newYearTime = new Date(newYear);
    const currentTime = new Date();

    const totalSeconds = (newYearTime - currentTime) / 1000;

    const days = Math.floor(totalSeconds / (3600 * 24));
    const hours = Math.floor(totalSeconds / 3600) % 24;
    const minutes = Math.floor(totalSeconds / 60) % 60;
    const seconds = Math.floor(totalSeconds) % 60;

    dayComponent.innerHTML = days;
    hourComponent.innerHTML =formartTime (hours);
    minuteComponent.innerHTML =formartTime (minutes);
    secondComponent.innerHTML = formartTime (seconds);
}

function formartTime(time){
    return time < 10 ? (`0${time}`): time;
}

countdown();
setInterval(countdown, 1000);


