import React from "react";

const TodoItem = ({ todo, deleteTodo }) => {
  return (
    <React.Fragment>
      <div className="eight wide column">{todo}</div>
      <div className="eight wide column">
        <button onClick={deleteTodo} className="ui button">
          <i className="fas fa-times"></i>
        </button>
      </div>
    </React.Fragment>
  );
};

export default TodoItem;
