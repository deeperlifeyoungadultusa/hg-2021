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

  scrollToBottom = (container) => {
    container = container || "chat-messages";
    animateScroll.scrollToBottom({
      containerId: container,
    });
  };

  filterMessages = () => {
    const { speaker } = this.props.speaker;
    const { messages } = this.props.messages;

    const aduFilter = "#1";
    const ajayiFilter = "#2";
    const ayanfeFilter = "#3";
    const omotesoFilter = "#4";

    switch (speaker) {
      case "Adu": {
        return messages.filter((message) =>
          message[message.id].text.trim().startsWith(aduFilter)
        );
      }
      case "Ajayi": {
        return messages.filter((message) =>
          message[message.id].text.trim().startsWith(ajayiFilter)
        );
      }
      case "Ayanfe": {
        return messages.filter((message) =>
          message[message.id].text.trim().startsWith(ayanfeFilter)
        );
      }
      case "Omoteso": {
        return messages.filter((message) =>
          message[message.id].text.trim().startsWith(omotesoFilter)
        );
      }
      default:
        return messages;
    }
  };

  render() {
    return (
      <div className="chat-messages" id="chat-messages">
        {this.filterMessages().map((message) => (
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
  speaker: state.speaker,
});

export default connect(mapStateToProps, { getMessages })(ChatShell);
