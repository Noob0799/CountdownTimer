(() => {
    const hoursInput = document.querySelector('.hours'),
        minutesInput = document.querySelector('.minutes'),
        secondsInput = document.querySelector('.seconds'),
        startBtn = document.querySelector('.start-btn'),
        pauseBtn = document.querySelector('.pause-btn'),
        resetBtn = document.querySelector('.reset-btn');

    let timerInterval,
        increaseTimer = false;

    const handleTimerInput = (event) => {
        const target = event.target;
        if(target.value.length > 2) {
            target.value = target.value.split('').splice(0, 2).join('');
        }
    }

    const handleTimerBlur = (event) => {
        const target = event.target;
        if(target.value.length == 1) {
            target.value = '0' + target.value;
        } else if(target.value.length == 0) {
            target.value = '00';
        }
    }

    const setTimerValues = (timeInSeconds) => {
        const secondsVal = timeInSeconds % 60,
            minutesVal = Math.floor(timeInSeconds / 60) % 60,
            hoursVal = Math.floor(timeInSeconds / 3600);

        secondsInput.value = secondsVal.toString().length == 1 ? '0' + secondsVal : secondsVal;
        minutesInput.value = minutesVal.toString().length == 1 ? '0' + minutesVal : minutesVal;
        hoursInput.value = hoursVal.toString().length == 1 ? '0' + hoursVal : hoursVal;
    }

    const handleStartTimer = () => {
        const hoursVal = Number(hoursInput.value),
            minutesVal = Number(minutesInput.value),
            secondsVal = Number(secondsInput.value);

        let totalSeconds = hoursVal * 3600 + minutesVal * 60 + secondsVal;
        if(totalSeconds == 0) {
            increaseTimer = true;
            timerInterval = setInterval(() => {
                totalSeconds++;
                setTimerValues(totalSeconds);
            }, 1000);
        } else {
            if(increaseTimer) {
                timerInterval = setInterval(() => {
                    totalSeconds++;
                    if(totalSeconds == 360000) {
                        totalSeconds = 0;
                    }
                    setTimerValues(totalSeconds);
                }, 1000);
            } else {
                timerInterval = setInterval(() => {
                    if(totalSeconds > 0) {
                        totalSeconds--;
                        setTimerValues(totalSeconds);
                        if(totalSeconds == 0) {
                            handleResetTimer();
                        }
                    }
                }, 1000);
            }
        }
        startBtn.classList.add('hide');
        pauseBtn.classList.remove('hide');
    }

    const handlePauseTimer = () => {
        startBtn.classList.remove('hide');
        pauseBtn.classList.add('hide');
        clearInterval(timerInterval);
    }

    const handleResetTimer = () => {
        hoursInput.value = '00';
        minutesInput.value = '00';
        secondsInput.value = '00';
        startBtn.classList.remove('hide');
        pauseBtn.classList.add('hide');
        clearInterval(timerInterval);
        increaseTimer = false;
    }

    hoursInput.addEventListener('keyup', handleTimerInput);
    hoursInput.addEventListener('blur', handleTimerBlur);
    minutesInput.addEventListener('keyup', handleTimerInput);
    minutesInput.addEventListener('blur', handleTimerBlur);
    secondsInput.addEventListener('keyup', handleTimerInput);
    secondsInput.addEventListener('blur', handleTimerBlur);
    startBtn.addEventListener('click', handleStartTimer);
    pauseBtn.addEventListener('click', handlePauseTimer);
    resetBtn.addEventListener('click', handleResetTimer);
})();