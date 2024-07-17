import React from "react";

const ChecklistItem = ({ handleDeleteTodo, id, completed, todo }) => {
  return (
    <li>
      <input type="checkbox" checked={completed} />
      <span>{todo}</span>
      <button
        onClick={() => handleDeleteTodo(id)}
        className="btn border"
        style={{ size: "18px" }}
      >
        Delete
      </button>
    </li>
  );
};

export default ChecklistItem;
