import React, { Component } from "react";
import ChatMessage from "../ChatMessage/ChatMessage";
import { connect } from "react-redux";
import { animateScroll } from "react-scroll";
import { getMessages } from "../../../redux/actions/index";
import "./chatShell.css";

class ChatShell extends Component {
  componentDidMount = async () => {
    await this.props.getMessages();
    this.scrollToBottom();
  };

  componentDidUpdate() {
    this.scrollToBottom();
  }

  scrollToBottom = () => {
    animateScroll.scrollToBottom({
      containerId: "chat-messages",
    });
  };

  render() {
    return (
      <div className="chat-messages" id="chat-messages">
        {this.props.messages.messages.map((message) => (
          <ChatMessage
            key={message.id}
            id={message.id}
            message={message[message.id]}
          />
        ))}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  messages: state.messages,
});

export default connect(mapStateToProps, { getMessages })(ChatShell);
