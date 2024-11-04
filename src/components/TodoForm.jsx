import React from "react";

function TodoForm({ addTodo, formData, setFormData }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData) return;
    addTodo(formData);
    setFormData("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={formData}
        onChange={(e) => setFormData(e.target.value)}
        placeholder="Add a new todo"
      />
      <button type="submit">Add Todo</button>
    </form>
  );
}

export default TodoForm;
