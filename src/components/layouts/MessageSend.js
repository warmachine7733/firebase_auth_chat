import React, { Component } from "react";
import { connect } from "react-redux";
import "./chat.css";
import { sendMessage } from "../../store/actions/chatActions";

export class MessageSend extends Component {
  state = {
    text: ""
  };
  handleChange = e => {
    this.setState({
      [e.target.id]: e.target.value
    });
  };
  handleSumbit = () => {
    console.log("text to be sent", this.state, "sender", this.props.sender);
    this.props.sendMessage(this.props.sender, this.state.text);
  };
  render() {
    return (
      <div className="controls">
        <input type="text" id="text" onChange={this.handleChange} />
        <button onClick={this.handleSumbit}>send</button>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    sendMessage: (sender, text) => dispatch(sendMessage(sender, text))
  };
};

export default connect(
  null,
  mapDispatchToProps
)(MessageSend);
