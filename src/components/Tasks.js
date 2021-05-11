import React, { createElement, useState } from 'react'


function Tasks() {
   
   let [currentTask, setCurrentTask] = useState('');

   

   let taskObject = {
      task1: "task1",
      task2: "task2",
      task3: "task3",
      task4: "task4",
      task5: "task5",
      task6: "task6"
   }
   
   let [task1, setTask1] = useState("first")
   let [task2, setTask2] = useState("")
   let [task3, setTask3] = useState("")
   let [task4, setTask4] = useState("")
   let [task5, setTask5] = useState("")
   let [task6, setTask6] = useState("")

   const changeHandler = (event) => {
      setCurrentTask()
      setTask1(event.target.value);
   }
   

   const clickHandler = (event) => {
      let span = document.createElement('span');
      if (task1.length > 0) {
         span.innerHTML = task1;
         let taskList = document.getElementById('tasks');
         taskList.appendChild(span)
         console.log(event)
         
      }
   }
   
   return (
      <div id="taskContainer">
         <div id="tasks">
            <h3>new tasks go here</h3>
         </div>
         <div id="taskInputs" onChange={changeHandler} >
            <input type="text" value={task1} name="task1" id="task1"/>
            <button onClick={clickHandler}>Set {taskObject.task1}</button>
            <div id="radios">
               <input className="radio" type="radio" value="Task1" name="taskRadio" /> Task 1
               <input className="radio" type="radio" value="Task2" name="taskRadio" /> Task 2
               <input className="radio" type="radio" value="Task3" name="taskRadio" /> Task 3
               <input className="radio" type="radio" value="Task4" name="taskRadio" /> Task 4
               <input className="radio" type="radio" value="Task5" name="taskRadio" /> Task 5
               <input className="radio" type="radio" value="Task6" name="taskRadio"/> Task 6
            </div>
         </div>
         <div id="first">
            First task {task1}
         </div>
         <div id="second">
            Second task
         </div>
         <div id="third">
            Third task
         </div>
      </div>
   )
}

export default Tasks
