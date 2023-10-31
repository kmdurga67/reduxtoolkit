import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo } from "../redux/todosSlice";

const TodoApp = () => {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos);
  const [newTodo, setNewTodo] = useState("");
  const [showAlert, setShowAlert] = useState(false);

  const handleAddTodo = () => {
    if (newTodo.trim() === "") {
      setShowAlert(true);
    } else {
      dispatch(addTodo(newTodo));
      setNewTodo("");
      setShowAlert(false);
    }
  };

  return (
    <div className="container">
      <h1>Redux Toolkit Todo App</h1>
      <div className="input-container">
        <input
          type="text"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          placeholder="Enter a new task..."
        />
        <button onClick={handleAddTodo}>Add Todo</button>
      </div>
      {showAlert && (
        <p style={{ color: "red" }}>Kindly add a non-empty todo first!!</p>
      )}
      <ul className="todo-list">
        {todos.map((todo, index) => (
          <li key={index}>{todo}</li>
        ))}
      </ul>
    </div>
  );
};

export default TodoApp;
