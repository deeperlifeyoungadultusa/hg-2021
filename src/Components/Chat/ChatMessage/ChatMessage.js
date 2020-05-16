import React from 'react'
import './chatMessage.css'

const ChatMessage = (props) => {
    return (
        <div className="message">
            {props.message.text}
        </div>
    )
}

export default ChatMessage
