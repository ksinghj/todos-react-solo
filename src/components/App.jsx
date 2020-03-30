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
    // Prevent form submission on empty value
    // If inputValue is not empty (true) then proceed to next code block (&&)
    inputValue !== "" && this.setState({ todos: [...todos, inputValue] });
  };

  deleteTodo = e => {
    console.log("Todo Deleted");
    const { todos } = this.state;
    this.setState({
      todos: todos.filter(todo => {
        const remove = e.target.closest(".js-delete-todo");
        return todo !== remove;
      })
    });
  };

  // CLEAR ALL TODOS
  // deleteTodo = e => {
  //   console.log("Todo Deleted");
  //   const remove = e.target.closest(".js-delete-todo");
  //   const { todos } = this.state;
  //   this.setState({
  //     todos: todos.filter(todo => {
  //       console.log("removed with filter");
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
        <TodoList todos={this.state.todos} deleteTodo={this.deleteTodo} />
      </div>
    );
  }
}

export default App;
