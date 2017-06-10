let times = "12:32 34:01 15:23 9:27 55:22 25:56";

function convert (times) {

  let minutes = times.match(/\d+(?=:)/g).reduce((acc, min) => 
    acc += +min
  , 0);

  let seconds = times.match(/:\d+/g).reduce((acc, time) => 
    acc += +time.slice(1)
  , 0);
  
  let finalSeconds = Math.floor(seconds % 60); 
  minutes += Math.floor(seconds / 60);  
  let finalMinutes = Math.floor(minutes % 60)
  let hours = Math.floor(minutes / 60);

  return hours + ':' + finalMinutes + ':' + finalSeconds;

}


////////////////////////////////////////////////
console.log( convert(times) ); 


/*
convert to seconds 
use mod to convert to minutes and hours 
secs / 60 = minutes 
secs mod 60 = remainderMinutes
minutes / 60 = hours 
minutes mod 60 = 

*/