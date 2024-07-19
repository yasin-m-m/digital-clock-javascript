const clock = document.querySelector('.clock')
const dateEl = document.querySelector('.date')
const dayEl = document.querySelector('.day')
function digitalClock(){
    var date = new Date()
    var year = date.getFullYear()
    var month = date.getMonth() +1
    var hours = date.getHours()
    var minutes = date.getMinutes()
    var seconds = date.getSeconds()
    var amPm = hours >= 12? 'PM' : hours ==0? 'AM': 'AM'
    var day = date.getDay()
    var date = date.getDate()

    hours= hours <10 ? '0'+hours:hours
    minutes= minutes <10 ? '0'+minutes:minutes
    seconds=seconds <10 ? '0'+seconds:seconds
    date= date <10 ? '0'+date:date
    month= month <10 ? '0'+month:month

    clock.innerHTML = `${hours} : ${minutes} : ${seconds} : ${amPm}`
    dateEl.innerHTML = `<h1>${date} / ${month} / ${year}</h1>`
    dayEl.innerHTML = `<h1>${day==0 ? "Sunday" : day ==1 ? "Monday" : day ==2 ? "Tuesday" : day==3 ? "Wednesday" : day==4? "Thursday": day==5?"Friday": "Saturday"}</h1>`
}

digitalClock()
setInterval(digitalClock, 1000)