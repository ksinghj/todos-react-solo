import React from "react";
import TodoItem from "./TodoItem";

class TodoList extends React.Component {
  renderTodos = () => {
    const { todos, deleteTodo } = this.props;
    return todos.map(todo => {
      return <TodoItem key={todo} todo={todo} deleteTodo={deleteTodo} />;
    });
  };

  clearAll = () => {
    const { message, clearAllTodos } = this.props;
    if (message) {
      return (
        <button className="ui button" onClick={clearAllTodos}>
          Clear All
        </button>
      );
    }
  };

  render() {
    return (
      <React.Fragment>
        <div className="ui grid">{this.renderTodos()}</div>
        <div>{this.clearAll()}</div>
      </React.Fragment>
    );
  }
}

export default TodoList;
