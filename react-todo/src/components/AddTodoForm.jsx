import React, { useState } from "react";

export default function AddTodoForm({ addTodo }) {
  const [value, setValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (value.trim() !== "") {
      addTodo(value);
      setValue("");
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: "20px" }}>
      <input
        type="text"
        placeholder="Add todo"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        data-testid="todo-input"
      />
      <button type="submit" data-testid="add-button">Add</button>
    </form>
  );
}
