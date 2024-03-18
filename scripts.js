const minutesEL = document.querySelector("#minutes")
const secondsEL = document.querySelector("#seconds")
const millisecondsEL = document.querySelector("#milliseconds")
const startBtn = document.querySelector("#startBtn")
const pauseBtn = document.querySelector("#pauseBtn")
const resumetBtn = document.querySelector("#resumeBtn")
const resetBtn = document.querySelector("#resetBtn")

let interval
let minutes = 0
let seconds = 0
let milliseconds = 0
let ispaused = false

startBtn.addEventListener('click',stasTimer)
pauseBtn.addEventListener('click', pauseTimer)
resumetBtn.addEventListener('click', resumeTimer)
resetBtn.addEventListener('click',resetTimer )

function stasTimer(){
    interval = setInterval (() => {
        if(!ispaused){

            milliseconds += 10
            
            if(milliseconds === 1000){
                seconds++
                milliseconds = 0
            }

            if(seconds === 60){
                minutes++
                seconds = 0
            }

            minutesEL.textContent = formatTime(minutes)
            secondsEL.textContent = formatTime(seconds)
            millisecondsEL.textContent = formatMilliseconds(milliseconds)
        }
    }, 10)

    startBtn.style.display = 'none'
    pauseBtn.style.display = 'block'
}

function pauseTimer() {
    ispaused = true
    pauseBtn.style.display = 'none'
    resumetBtn.style.display = 'block'
}

function resumeTimer(){
    ispaused = false
    resumetBtn.style.display = 'none'
    pauseBtn.style.display = 'block'
}

function resetTimer() {
     clearInterval(interval)
     minutes = 0
     seconds = 0
     milliseconds = 0

     minutesEL.textContent = '00'
     secondsEL.textContent = '00'
     millisecondsEL.textContent ='000'

     startBtn.style.display = 'block'
     pauseBtn.style.display = 'none'
     resumetBtn.style.display = 'none'
}

function formatTime(time){
    return time < 10 ? `0${time}`: time
}

function formatMilliseconds(time) {
    return time < 100 ? `${time}`.padStart(3, "0") : time
}