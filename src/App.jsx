//Todo app

import React, { useState } from "react";
import "./App.css";

function Todo() {
  const [tasks, includeTask] = useState([]);
  const [input, setInput] = useState("");
  const [btnStatus, setBtnStatus] = useState(true);

  function inputChangeHandler(e) {
    setInput(e.target.value);
    e.target.value ? setBtnStatus(false) : setBtnStatus(true);
  }

  function addTask() {
    includeTask([...tasks, input]);
    setInput("");
    setBtnStatus(true);
  }

  function removeTask(index) {
    const newTasks = [...tasks];
    newTasks.splice(index, 1);
    includeTask(newTasks);
  }

  return (
    <>
      <div className="todoCard">
        <div className="taskList">
          <h4>Tasks</h4>
        {tasks.map((task, index) => (
          <li key={index}>
            {tasks}
            <button className="delButton" onClick={() => removeTask(index)}>x</button>
          </li>
        ))}
        </div>

        <input value={input} onChange={inputChangeHandler} placeholder="Enter Task" type="text" />
        <button disabled={btnStatus} className="addButton" onClick={addTask}>
          Add
        </button>
      </div>
    </>
  );
}

export default Todo;
