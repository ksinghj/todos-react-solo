import React from "react";
import TodoItem from "./TodoItem";

class TodoList extends React.Component {
  renderTodos = () => {
    return this.props.todos.map(todo => {
      return <TodoItem key={todo} todo={todo} />;
    });
  };

  render() {
    return <div>{this.renderTodos()}</div>;
  }
}

export default TodoList;
