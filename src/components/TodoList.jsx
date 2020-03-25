import React from "react";
import TodoItem from "./TodoItem";

class TodoList extends React.Component {
  renderTodos = () => {
    const { todos, deleteTodo } = this.props;
    return todos.map(todo => {
      return <TodoItem key={todo} todo={todo} deleteTodo={deleteTodo} />;
    });
  };

  render() {
    return <div className="ui grid">{this.renderTodos()}</div>;
  }
}

export default TodoList;
