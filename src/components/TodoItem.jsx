import React from "react";

const TodoItem = ({ todo, deleteTodo }) => {
  return (
    <div
      className="ui grid"
      style={{ background: "rgba(1,1,1,0.04)", margin: "0.5em 0" }}>
      <div className="eight wide column">{todo}</div>
      <div className="eight wide column float-right">
        <button
          onClick={() => deleteTodo(todo)} // we MUST called function, not just reference (see README)
          type="button"
          className="ui button right floated css-btn__delete-todo">
          <i className="fas fa-times"></i>
        </button>
      </div>
    </div>
  );
};

export default TodoItem;
