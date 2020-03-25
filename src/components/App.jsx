import React from "react";
import InputBar from "./InputBar";
import TodoList from "./TodoList";

class App extends React.Component {
  state = { todos: [], inputValue: "" };

  handleInputChange = event => {
    this.setState({ inputValue: event.target.value });
  };

  addTodo = event => {
    event.preventDefault();
    const { todos, inputValue } = this.state;
    this.setState({ todos: [...todos, inputValue] });
  };

  deleteTodo = () => {
    console.log("Todo Deleted");
  };

  render() {
    return (
      <div className="ui container">
        <InputBar
          handleInputChange={this.handleInputChange}
          prevent={this.prevent}
          addTodo={this.addTodo}
        />
        <div className="todolistparent">
          <TodoList todos={this.state.todos} deleteTodo={this.deleteTodo} />
        </div>
      </div>
    );
  }
}

export default App;
