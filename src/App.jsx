//Todo app

import React, { useState } from "react";
import './App.css'


function Todo() {
  const [task, includeTask] = useState([]);
  const [input, setInput] = useState("");
  const[btnStatus,setBtnStatus]=useState(true);

  function inputChangeHandler(e) {
    setInput(e.target.value);
    (e.target.value)?setBtnStatus(false):setBtnStatus(true);
  }

  function addTask() {
      includeTask([...task, input]);
      setInput("");
      setBtnStatus(true)
  }

  function removeTask(index) {
    const newTask = [...task];
    newTask.splice(index, 1);
    includeTask(newTask);
  }

  return (
    <>
      <input value={input} onChange={inputChangeHandler} type="text" />
      <button disabled={btnStatus}  className="addButton" onClick={addTask}>Add</button>

      {task.map((tasks, index) => (
        <li key={index}>
          {tasks}
          <button   onClick={() => removeTask(index)}>remove</button>
        </li>
      ))}
    </>
  );
}

export default Todo;
