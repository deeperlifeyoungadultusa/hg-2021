import React, { Component } from "react";
import "./modal.css";

class Modal extends Component {
  render = () => {
    return <div className="modal">{this.props.children}</div>;
  };
}

export default Modal;
