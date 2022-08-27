function minuteToHr (minutes){
     let hr = Math.floor(minutes/60)
     var TotalMinutes = minutes % 60 ;
  return  hr+":"+TotalMinutes
 } 

console.log(minuteToHr(78)) 