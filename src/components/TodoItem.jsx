import React from "react";

function TodoItem({ todo, index, deleteTodo, toggleComplete }) {
  return (
    <li style={{ textDecoration: todo.completed ? "line-through" : "none" }}>
      {todo.text}
      <input
        type="checkbox"
        onChange={() => toggleComplete(index)}
        checked={todo.completed}
      />
      <button onClick={() => deleteTodo(index)} disabled={!todo.completed}>
        Delete
      </button>
    </li>
  );
}

export default TodoItem;
