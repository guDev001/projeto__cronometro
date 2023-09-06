const hoursEl = document.querySelector('#hours')
const minutesEl = document.querySelector('#minutes')
const secondsEl = document.querySelector('#seconds')
const startBtn = document.querySelector('#startBtn')
const pauseBtn = document.querySelector('#pausetBtn')
const resumeBtn = document.querySelector('#resumeBtn')
const resetBtn = document.querySelector('#resetBtn')


let interval
let miliseconds = 0
let hours = 0
let minutes = 0
let seconds = 0
let isPaused = false

startBtn.addEventListener('click', startTimer) 
pauseBtn.addEventListener('click', pauseTimer)
resumeBtn.addEventListener('click', resumeTimer)
resetBtn.addEventListener('click', resetTimer)

function startTimer() {
    interval = setInterval(() => {
        if(!isPaused) {
            miliseconds += 10

            if(miliseconds === 1000) {
                seconds++
                miliseconds = 0
            }

        
            if(seconds === 60) {
                minutes++
                seconds = 0
            }

            if(minutes === 60) {
                hours++
                minutes = 0
            }

            hoursEl.textContent = formatTime(hours)
            minutesEl.textContent = formatTime(minutes)
            secondsEl.textContent = formatTime(seconds)
        }

    }, 10)

    startBtn.style.display = 'none'
    resumeBtn.style.display = 'block'
}

function pauseTimer() {
    isPaused = true
}

function resumeTimer() {
    isPaused = false
}

function resetTimer() {
    clearInterval(interval)
    hours = 0
    minutes = 0
    seconds = 0
    miliseconds = 0

    hoursEl.textContent = '00'
    minutesEl.textContent = '00'
    secondsEl.textContent = '00'

    resumeBtn.style.display = 'none'
    startBtn.style.display  = 'block'
}



function formatTime(time) {
    return time < 10 ? `0${time}` : time
}