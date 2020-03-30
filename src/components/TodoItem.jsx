import React from "react";

const TodoItem = ({ todo, deleteTodo }) => {
  return (
    <React.Fragment>
      <div onClick={deleteTodo} className="eight wide column">
        {todo}
      </div>
      <div className="eight wide column float-right">
        <button
          onClick={() => deleteTodo(todo)} // we MUST called function, not just reference (see ReadMe)
          type="button"
          className="ui button right floated">
          <i className="fas fa-times"></i>
        </button>
      </div>
    </React.Fragment>
  );
};

export default TodoItem;
