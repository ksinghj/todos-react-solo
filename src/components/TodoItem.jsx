import React from "react";

class TodoItem extends React.Component {
  render() {
    return (
      <div className="ui bulleted list">
        <div className="item">{this.props.todo}</div>
      </div>
    );
  }
}

export default TodoItem;
