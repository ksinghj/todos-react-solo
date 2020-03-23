import React from "react";
import AddTodo from "./AddTodo";
import TodoList from "./TodoList";

class App extends React.Component {
  state = { todos: ["Walk dog", "Eat kima", "play Destiny"], newTodo: "" };

  addTodo = event => {
    // console.log(event.target.value);
    // todo: add to state array
    this.setState({
      newTodo: event.target.value,
      todos: [...this.state.todos, this.state.newTodo]
    });

    console.log(this.state.newTodo);
  };

  prevent = event => {
    event.preventDefault();
  };

  render() {
    return (
      <div className="ui container">
        <AddTodo addTodo={this.addTodo} prevent={this.prevent} />
        <TodoList todos={this.state.todos} />
      </div>
    );
  }
}

export default App;
