/* eslint-disable no-unused-vars */
import React, { useEffect, useRef, useState } from 'react'

import './App.css'
import { Home } from './components/Home'
// import { BrowserRouter, Routes, Route } from 'react-router-dom'
import CartPage from './components/CartPage'


function App() {

  const initialData = [
    
  ];
  
  
  const [tasks, setTasks] = useState(initialData);
  const [newTask, setNewTask] = useState("");

  const addTask = () => {
    if (newTask.trim() !== "") {
      // Create a new task object
      const taskObject = {
        name: "sangam", // You can replace this with the actual user name
        task: newTask.trim(),
      };

      // Update the tasks state with the new task
      setTasks((prevTasks) => [...prevTasks, taskObject]);

      // Clear the input field
      setNewTask("");
    }
  };

  const removeTask = (index) => {
    // Create a copy of the tasks array
    const updatedTasks = [...tasks];

    // Remove the task at the specified index
    updatedTasks.splice(index, 1);

    // Update the tasks state with the updated array
    setTasks(updatedTasks);
  };



  return (
 
    <div className='App'>


     <input type="text" style={{backgroundColor:'white', color:'black'}} value={newTask}
        onChange={(e) => setNewTask(e.target.value)} /> 
     <button onClick={addTask} >Add</button>
     {/* Display tasks */}
     <ul>
        {tasks.map((task, index) => (
          <li key={index}>{task.task}
           <button onClick={() => removeTask(index)}>Remove</button></li>
          
        ))}
      </ul>




  {/* <BrowserRouter>
  <Routes>
 {/* <Route path='/' element={<Home />} />
 <Route path='/cart' element={<CartPage />} /> */}

  {/* </Routes>
  </BrowserRouter>
   */}
       



    </div>
  )
}

export default App
