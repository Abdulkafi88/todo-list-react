import React, { useState } from "react";

const Todooform = () => {
  const [userValue, setUserValue] = useState("");
  const [Task, setTask] = useState([]);

  const addTask = () => {
    if (userValue.trim() !== "") {
      setTask([...Task, userValue]);
      setUserValue("");
    } else {
      if (userValue === "") {
        alert("Please type your Task");
      }
    }
  };

  const removeTask = (index) => {
    const updatedTask = [...Task];
    updatedTask.splice(index, 1);
    setTask(updatedTask);
    document
  };

  const lineThrou = (e) => {
    if (e.target.classList.contains("todo-text")) {
      e.target.classList.toggle('line-through');
    }
  };
  

  return (
    <div className="moveDown">
      <input
        type="text"
        placeholder="Type your next Task"
        value={userValue}
        className="todo-input"
        onChange={(e) => {
          setUserValue(e.target.value);
        }}
      />
      <button onClick={addTask} className="todo-button">
        Add Task
      </button>

      <ul className="list">
        {Task.map((task, index) => (
          <li
            onClick={lineThrou}
            className="todo-row"
            key={index}
            style={{ fontSize: "1rem" }}
          >
            <p className="todo-text">{task}</p>
            <i
              onClick={(e) => {
                removeTask(index);
              }}
              className="fas fa-trash"
              style={{
                color: "white",
                fontSize: "1rem",
              }}
            ></i>
          </li>
        ))}
      </ul>
    </div>
  );
};

export { Todooform };
