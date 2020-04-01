import React from "react";
import InputBar from "./InputBar";
import TodoList from "./TodoList";
import MessageToast from "./MessageToast";

class App extends React.Component {
  state = {
    todos: [],
    newTodos: [],
    inputValue: "",
    message: "",
    messageVisible: false
  };

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
      }),
      messageVisible: true,
      message: "Todo removed"
    });
  };

  clearAllTodos = e => {
    const { todos } = this.state;
    this.setState({
      todos: todos.filter(todo => {
        console.log("removed all todos");
        // eslint-disable-next-line
        return todo !== todo;
      })
    });
  };

  handleDismiss = () => {
    this.setState({ messageVisible: false });
  };

  autoDismiss = () => {
    setTimeout(() => {
      this.setState({ messageVisible: false });
    }, 2000);
  };

  render() {
    const { message, messageVisible } = this.state;
    return (
      <React.Fragment>
        <div className="ui container border" style={{ padding: "1em" }}>
          <InputBar
            handleInputChange={this.handleInputChange}
            prevent={this.prevent}
            addTodo={this.addTodo}
          />
          <TodoList
            todos={this.state.todos}
            deleteTodo={this.deleteTodo}
            clearAllTodos={this.clearAllTodos}
            message={message}
          />
        </div>
        <div className="ui container">
          <MessageToast
            message={message}
            messageVisible={messageVisible}
            handleDismiss={this.handleDismiss}
            autoDismiss={this.autoDismiss}
          />
        </div>
      </React.Fragment>
    );
  }
}

export default App;
