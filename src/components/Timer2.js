import React, { useState, useEffect } from "react";
//import "./styles.css";

const Timer2 = () => {
  const [second, setSecond] = useState("00");
  const [minute, setMinute] = useState("00");
  const [isActive, setIsActive] = useState(false);
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    let intervalId;

    if (isActive) {
      intervalId = setInterval(() => {
        const secondCounter = counter % 60;
        const minuteCounter = Math.floor(counter / 60);

        let computedSecond =
          String(secondCounter).length === 1
            ? `0${secondCounter}`
            : secondCounter;
        let computedMinute =
          String(minuteCounter).length === 1
            ? `0${minuteCounter}`
            : minuteCounter;

        setSecond(computedSecond);
        setMinute(computedMinute);

        setCounter((counter) => counter - 1);
      }, 1000);  
    }
     
     return () => clearInterval(intervalId);
    
  }, [isActive, counter]);

  function stopTimer() {
    setIsActive(false);
    setCounter(0);
    setSecond("00");
    setMinute("00");
  }

   function twentyFiveMinuteTimer() {
      setCounter(1500);
      setIsActive(true);
   }
   
  return (
    <div className="container">
        <div id="tomato">
           <h1>{minute} : {second}</h1>
           <button onClick={ twentyFiveMinuteTimer }>Start Pomadoro Timer</button>
      </div>
        <div className="buttons">
           
         <button onClick={() => setIsActive(!isActive)} className="start">
            {isActive ? "Pause" : "Start"}
         </button>
         <button onClick={stopTimer} className="reset">
            Reset
         </button>
      </div>
    </div>
  );
};

export default Timer2;
