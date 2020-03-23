import React from "react";

class AddTodo extends React.Component {
  render() {
    return (
      <div>
        <form onSubmit={this.props.addTodo} className="ui form">
          <div className="field">
            <label>Add a todo here:</label>
            <input
              ref={this.txtRef}
              type="text"
              placeholder="Walk the dog..."
              onChange={this.props.handleInputChange}></input>
            <button type="submit">Submit</button>
          </div>
        </form>
      </div>
    );
  }
}

export default AddTodo;
