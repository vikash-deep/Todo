//Todo app

import React, { useState } from "react";

function Todo() {
  const [task, includeTask] = useState([]);
  const [input, setInput] = useState("");

  function inputChangeHandler(e) {
    setInput(e.target.value);
  }

  function addTask() {
    if (input !== "") {
      includeTask([...task, input]);
      setInput("");
    }
  }

  function removeTask(index) {
    const newTask = [...task];
    newTask.splice(index, 1);
    includeTask(newTask);
  }

  return (
    <>
      <input value={input} onChange={inputChangeHandler} type="text" />
      <button onClick={addTask}>Add</button>

      {task.map((tasks, index) => (
        <li key={index}>
          {tasks}
          <button onClick={() => removeTask(index)}>remove</button>
        </li>
      ))}
    </>
  );
}

export default Todo;