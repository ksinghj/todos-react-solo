import React from "react";
import AddTodo from "./AddTodo";
import TodoList from "./TodoList";

class App extends React.Component {
  state = { todos: [""], inputValue: "" };

  handleInputChange = event => {
    this.setState({ inputValue: event.target.value });
  };

  addTodo = event => {
    event.preventDefault();
    const { todos, inputValue } = this.state;
    this.setState({ todos: [...todos, inputValue] });
    console.log(this.state.todos);
  };

  render() {
    return (
      <div className="ui container">
        <AddTodo
          handleInputChange={this.handleInputChange}
          prevent={this.prevent}
          addTodo={this.addTodo}
        />
        <TodoList todos={this.state.todos} />
      </div>
    );
  }
}

export default App;
