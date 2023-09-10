
document.addEventListener('DOMContentLoaded',()=>{
  let date
   updateDaysOfTheWeek = () =>{  
     date = new Date()
    const currentDay = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday']
    const day = date.getDay()
    document.querySelector('[data-testid="currentDayOfTheWeek"]').textContent +=  currentDay[day]
    console.log(day)
}
   updateDate = () =>{
     date = new Date()
    let seconds = date.getSeconds()
    let minutes = date.getMinutes()
    let hours = date.getHours()
    seconds = seconds < 10 ?seconds = '0'+seconds:seconds
    minutes =minutes < 10 ?minutes = '0'+minutes:minutes
    hours = hours < 10 ? hours = '0'+hours:hours
    document.querySelector('[data-testid="currentUTCTime"]').textContent = `Current UTC Time:  ${hours}: ${minutes}: ${seconds}`
   
}
updateDaysOfTheWeek()
updateDate()

setInterval(updateDate,1000)
})



  

