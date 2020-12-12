import "./TodoApp.css";
import React, { useState, useEffect } from "react";

const postTodo = async (todo) => {
    await fetch("/db", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(todo)
    })
  };

  
const TodoApp = () => {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState("");
  const getTodos = async () => {
    const newtodos = await fetch("/db")
      .then((res) => res.json())
      .catch((err) => console.error(err));
    setTodos(newtodos);
  };
  useEffect(() => {
    getTodos();
  }, [todos.length]);
  return (
    <div className="App">
      <header className="App-header">
        <div style={{ display: "flex" }}>
          <div>
            <label>Add todo:</label>
            <input
              type="text"
              id="newtodo"
              name="newtodo"
              onChange={(e) => {
                setNewTodo(e.target.value);
              }}
            ></input>
          </div>
          <button
            onClick={() => {
              console.log(newTodo);
              postTodo({ newTodo: newTodo }).then(() => getTodos());
            }}
          >
            Submit!
          </button>
        </div>
        <div>
          {todos.map((todo, i) => (
            <div key={i} className="tododiv">
              {JSON.stringify(todo)}
            </div>
          ))}
        </div>
      </header>
    </div>
  );
};

export default TodoApp;
