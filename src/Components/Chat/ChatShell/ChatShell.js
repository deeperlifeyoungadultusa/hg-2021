import React, { Component } from 'react'
import ChatMessage from '../ChatMessage/ChatMessage'
import {connect} from 'react-redux'
import {getMessages} from '../../../redux/actions/index'
import { v4 as uuidv4 } from 'uuid';
import './chatShell.css'

class ChatShell extends Component {

    componentDidMount = () => {
        this.props.getMessages()
    
    }

    render() {
        return (
            <div className="chat-messages">
                {this.props.messages.messages.map(message => (
                     <ChatMessage key={message.id} message={message[message.id]}/>
                ))}                
            </div>
        )
    }
}

const mapStateToProps = state => ({
    messages: state.messages
});

export default connect(
    mapStateToProps,
    {getMessages}
)(ChatShell)
