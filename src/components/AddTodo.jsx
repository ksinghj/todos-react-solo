import React from "react";

class AddTodo extends React.Component {
  constructor(props) {
    super(props);
    this.txtRef = React.createRef();
  }

  render() {
    return (
      <div>
        <form onSubmit={this.props.prevent} className="ui form">
          <div className="field">
            <label>Add a todo here:</label>
            <input
              ref={this.txtRef}
              type="text"
              placeholder="Walk the dog..."></input>
            <button onClick={this.props.addTodo} type="submit">
              Submit
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default AddTodo;
