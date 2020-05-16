import React, { Component } from "react";
import { connect } from "react-redux";
import { deleteMessage } from "../../../redux/actions";
import Modal from "../Modal/Modal";
import "./chatMessage.css";

class ChatMessage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      modalOpen: false,
    };
  }

  delete = () => {
    const { id, deleteMessage } = this.props;
    deleteMessage(id);
  };

  handleModal = (state) => {
    this.setState({ modalOpen: state });
  };

  showModal = () => {
    const { modalOpen } = this.state;

    const modalInfo = (
      <>
        <h1>Are you sure you want to delete</h1>
        <div className="modalContainer">
          <button onClick={this.delete}>Yes</button>
          <button
            onClick={(e) => {
              this.handleModal(false);
            }}
          >
            No
          </button>
        </div>
      </>
    );

    const modal = modalOpen ? <Modal>{modalInfo}</Modal> : "";

    return modal;
  };

  render() {
    const { message } = this.props;
    return (
      <div className={"message" + (!message.admin ? "-user" : "")}>
        {this.showModal()}

        <div className="messageText" onClick={(e) => this.handleModal(true)}>
          {message.admin ? <p className="admin">Admin</p> : null}
          {message.text}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({});

export default connect(mapStateToProps, { deleteMessage })(ChatMessage);
