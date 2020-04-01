import React from "react";
import TodoItem from "./TodoItem";

class TodoList extends React.Component {
  renderTodos = () => {
    const { todos, deleteTodo } = this.props;
    return todos.map(todo => {
      // TODO: Change key to be unique!
      return (
        <TodoItem
          key={todo}
          todo={todo}
          deleteTodo={deleteTodo}
          style={{ background: "grey" }}
        />
      );
    });
  };

  clearAll = () => {
    const { todos, clearAllTodos } = this.props;
    if (todos.length > 0) {
      return (
        // TODO: Top of button does not work (not clickable)
        <button type="button" className="ui button" onClick={clearAllTodos}>
          Clear All
        </button>
      );
    }
  };

  render() {
    return (
      <React.Fragment>
        <div style={{ marginTop: "1em" }}>{this.renderTodos()}</div>
        <div>{this.clearAll()}</div>
      </React.Fragment>
    );
  }
}

export default TodoList;
