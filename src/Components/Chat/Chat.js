import React, { Component } from "react";
import { connect } from "react-redux";
import { verifyLogin } from "../../redux/actions/index";
import ChatBar from "./ChatBar/ChatBar";
import ChatShell from "./ChatShell/ChatShell";
import Header from "./Header/Header";

class Chat extends Component {
  componentDidMount = async () => {
    await this.props.verifyLogin();

    const { authenticated } = this.props.auth;

    if (!authenticated) {
      this.props.history.push("/login");
    }
  };

  componentDidUpdate = () => {
    const { authenticated } = this.props.auth;

    if (!authenticated) {
      this.props.history.push("/login");
    }
  };

  render() {
    return (
      <div className="app">
        <Header className="header" />
        <ChatShell />
        <ChatBar />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  auth: state.login,
});

export default connect(mapStateToProps, { verifyLogin })(Chat);
