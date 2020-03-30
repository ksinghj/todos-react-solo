import React from "react";

const TodoItem = ({ todo, deleteTodo }) => {
  return (
    <React.Fragment>
      <div className="eight wide column js-delete-todo">{todo}</div>
      <div className="eight wide column float-right">
        <button onClick={deleteTodo} className="ui button right floated">
          <i className="fas fa-times"></i>
        </button>
      </div>
    </React.Fragment>
  );
};

export default TodoItem;
