import React from "react";

class InputBar extends React.Component {
  constructor(props) {
    super(props);
    this.txtRef = React.createRef();
  }

  handleFocus = event => {
    event.target.select();
  };

  // highlightText = ref => {
  //   ref = this.txtRef.current;
  //   ref.target.select();
  // };

  // onClick={this.highlightText}

  render() {
    return (
      <div>
        <form onSubmit={this.props.addTodo} className="ui form">
          <div className="field">
            <label>Add a todo here:</label>
            <input
              onFocus={this.handleFocus}
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

export default InputBar;
