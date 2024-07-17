import React, { useState } from "react";
import checklistData from "./../../assets/checklist.json";
import ChecklistItem from "./ChecklistItem";

const Checklist = () => {
  const [todos, setTodos] = useState(checklistData);
  const [newTodoValue, setNewTodoValue] = useState("");
  // Работа кнопки удалить
  const handleDeleteTodo = (id) => {
    setTodos((prev) => prev.filter((item) => item.id !== id));
  };

  const handleAddTodo = () => {
    const newTodo = {
      id: new Date().getTime(),
      todo: newTodoValue,
      completed: false,
    };
    setTodos((prev) => [...prev, newTodo]);
  };

  return (
    <>
      <div>
        <input type="text" onChange={(e) => setNewTodoValue(e.target.value)} />
        <button onClick={handleAddTodo}>Add</button>
      </div>
      <ul>
        {todos.map((item) => (
          <ChecklistItem
            key={item.id}
            handleDeleteTodo={handleDeleteTodo}
            {...item}
          />
        ))}
      </ul>
    </>
  );
};

export default Checklist;
