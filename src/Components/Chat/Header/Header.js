import React, { Component } from "react";
import { connect } from "react-redux";
import "./header.css";
import {
  signOut,
  verifyLogin,
  selectSpeaker,
} from "../../../redux/actions/index";

class Header extends Component {
  onClick = (e) => {
    this.props.signOut();
  };

  speakerSelect = (e) => {
    this.props.selectSpeaker(e.target.value);
  };

  render = () => {
    return (
      <div className="title">
        <p className="chat">DLYA Admin Chat</p>
        <div className="logout" onClick={(e) => this.onClick(e)}>
          Logout
        </div>

        <div>
          <label htmlFor="selectBreakout" className="selectBreakout">
            Please select the message to filter by
          </label>
          <select
            name="selectBreakout"
            id="selectBreakout"
            onChange={this.speakerSelect}
          >
            <option value="all" defaultChecked>
              All
            </option>
            <option value="Adu">
              Cultivating the Vision for Financial Freedom
            </option>
            <option value="Ajayi">
              The Vision for Skill & Professional Development
            </option>
            <option value="Ayanfe">
              Purposeful Vision of a Cristian Single
            </option>
            <option value="Omoteso">
              Pursuing a Comprehensive Vision in the Family
            </option>
          </select>
        </div>
      </div>
    );
  };
}

const mapStateToProps = (state) => ({
  auth: state.login,
  speaker: state.speaker,
});

export default connect(mapStateToProps, {
  signOut,
  verifyLogin,
  selectSpeaker,
})(Header);
