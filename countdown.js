const days = document.getElementById('days')
const hours = document.getElementById('hours')
const minutes = document.getElementById('minutes')
const seconds = document.getElementById('seconds')

function myFunc() {
    timeNow = new Date()
    jvlynTime =  new Date("June 21, 2024 00:00:00");;
    diff = jvlynTime - timeNow

    d = Math.floor(diff / (1000*60*60*24))
    h = Math.floor(diff / (1000*60*60)) % 24
    m = Math.floor(diff / (1000*60)) % 60
    s = Math.floor(diff / (1000)) % 60

    days.innerHTML = d
    hours.innerHTML = h
    minutes.innerHTML = m
    seconds.innerHTML = s
}

setInterval(myFunc, 1000)