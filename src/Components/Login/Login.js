import React, { Component } from "react";
import { connect } from "react-redux";
import { login, verifyLogin } from "../../redux/actions/index";
import "./login.css";

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
    };
  }

  componentDidMount = async () => {
    await this.props.verifyLogin();

    const { authenticated } = this.props.auth;

    if (authenticated) {
      this.props.history.push("/");
    }
  };

  componentDidUpdate = () => {
    const { authenticated } = this.props.auth;

    if (authenticated) {
      this.props.history.push("/");
    }
  };

  onChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  onSubmit = async (e) => {
    e.preventDefault();
    this.setState({
      email: "",
      password: "",
    });

    await this.props.login(this.state.email, this.state.password);
  };

  render() {
    const { error } = this.props.auth;
    return (
      <div className="container">
        <h1>Login</h1>
        <p>Login to access your account</p>
        <p>{error.message}</p>
        <form className="form" onSubmit={(e) => this.onSubmit(e)}>
          <label htmlFor="email">Email Address</label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="email"
            value={this.state.email}
            onChange={(e) => this.onChange(e)}
          />
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="password"
            value={this.state.password}
            onChange={(e) => this.onChange(e)}
          />
          <input className="submit" type="submit" value="Login" />
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  auth: state.login,
});

export default connect(mapStateToProps, { login, verifyLogin })(Login);
