import React, { useState } from 'react'

function Timer() {
   
   let [seconds, setSeconds] = useState(0);
   let [timerStarted, setTimerStarted] = useState(false);

   let interval;

   function pomodoro(mins) {
      setTimerStarted(true)
         seconds = mins % 60;
         interval = setInterval(() => {
            
            setSeconds(seconds--);
            if (!seconds) {
               clearInterval(interval);
               alert("Beep Beep, Beep Beep, Beep Beep. The timer is complete.")
            }
         },1000)
      
      
   }
   function timerStop() {
      console.log(timerStarted)
      clearInterval(interval);
      setTimerStarted(false);
   }
   function prependZero(number) {
      if (number < 9)
          return "0" + number;
      else
          return number;
  }
   let minutes = Math.floor(seconds / 60);
   seconds = (seconds - (minutes * 60))
   let timeLeft = prependZero(minutes) + ':' + prependZero(seconds)
   return (
      <div id="timerContainer">
         <div id="timer">
            <div id="tomato">
               <h1>Timer</h1>
               <h1>{ timeLeft }</h1>
            </div>
            <div id="timerButton" onClick={() => pomodoro(25)}>
               <h1>Start Timer</h1>
            </div>
            <div id="timerButton" onClick={() => timerStop()}>
               <h1>Stop Timer</h1>
            </div>
         </div>
      </div>
      
   )
}

export default Timer
