// initial Time
let hour = 0;
let minute = 0;
let seconds = 0;
let time = null;


// Start Button
let startBtn = document.getElementById('start');
startBtn.addEventListener('click', () => {
    startTime();
})

function startTime() {
    time = setInterval(function () {
        seconds++;
        if (seconds == 60) {
            seconds = 0;
            minute++;
            if (minute == 60) {
                minute = 0;
                hour++
            }
        }

        let hour0, minute0, seconds0;
        if (hour < 10) {
            hour0 = `0${hour}`
        } else {
            hour0 = hour;
        }

        if (minute < 10) {
            minute0 = `0${minute}`
        } else {
            minute0 = minute;
        }

        if (seconds < 10) {
            seconds0 = `0${seconds}`
        } else {
            seconds0 = seconds;
        }

        document.getElementById('time').textContent = `${hour0}:${minute0}:${seconds0}`
    }, 1000)
}

// Stop Button
let stopBtn = document.getElementById('stop');
stopBtn.addEventListener('click', function () {
    clearInterval(time);
})

// Reset Button
let resetBtn = document.getElementById('reset');
resetBtn.addEventListener('click', function () {
    clearInterval(time);
    hour = 0;
    minute = 0;
    seconds = 0;
    document.getElementById('time').textContent = `00:00:00`
})