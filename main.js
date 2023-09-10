
document.addEventListener('DOMContentLoaded',()=>{
  let date
   updateDaysOfTheWeek = () =>{  
     date = new Date()
    const currentDay = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday']
    const day = date.getUTCDay()
    document.querySelector('[data-testid="currentDayOfTheWeek"]').textContent +=  currentDay[day]
    console.log(day)
}
   updateDate = () =>{
     date = new Date()
     let time = date.getUTCMilliseconds()
    document.querySelector('[data-testid="currentUTCTime"]').textContent = `${time}`
}
updateDaysOfTheWeek()
updateDate()

setInterval(updateDate,1000)
})



  

