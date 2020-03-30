import React from "react";
import InputBar from "./InputBar";
import TodoList from "./TodoList";

class App extends React.Component {
  state = { todos: [], newTodos: [], inputValue: "", message: "" }; // TODO: Add toast to tell user item is already on list, todos have been cleared etc

  handleInputChange = event => {
    this.setState({ inputValue: event.target.value });
  };

  addTodo = event => {
    event.preventDefault();
    const { todos, inputValue } = this.state;
    // Prevent form submission on empty value
    // If inputValue is not empty (true) then proceed to next code block (&&)
    inputValue !== "" && this.setState({ todos: [...todos, inputValue] });
  };

  deleteTodo = remove => {
    this.setState({
      todos: this.state.todos.filter(todo => {
        return todo !== remove;
      })
    });
    console.log("Deleted", this.state.todos);
  };

  // TODO: CLEAR ALL TODOS (link button to this function)
  // clearAllTodos = e => {
  //   const { todos } = this.state;
  //   this.setState({
  //     todos: todos.filter(todo => {
  //       console.log("removed all todos");
  //       return todo !== todo;
  //     })
  //   });
  // };

  render() {
    return (
      <div className="ui container">
        <InputBar
          handleInputChange={this.handleInputChange}
          prevent={this.prevent}
          addTodo={this.addTodo}
        />
        <TodoList
          todos={this.state.todos}
          deleteTodo={this.deleteTodo}
          clearAllTodos={this.clearAllTodos}
          message={this.state.message}
        />
      </div>
    );
  }
}

export default App;
