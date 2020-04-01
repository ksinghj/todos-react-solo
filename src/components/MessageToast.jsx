import React, { Component } from "react";
import { Message } from "semantic-ui-react";

class MessageToast extends Component {
  render() {
    const { message, messageVisible, handleDismiss, autoDismiss } = this.props;
    if (messageVisible) {
      autoDismiss();
      return (
        <Message
          onDismiss={() => handleDismiss()}
          header={message}
          floating
          positive
          content={null}
        />
      );
    }

    return null;
  }
}

export default MessageToast;
