import React, { Component } from 'react'
import {connect} from 'react-redux';
import {addMessage} from '../../../redux/actions/index';
import './chatBar.css'

class ChatBar extends Component {
    constructor(props) {
        super(props);

        this.state = {
            text: ''
        }
    }
    
    onChange = e => {
       this.setState({
           text: e.target.value
       })
    }

    onClick = () => {
        if(this.state.text !== '') {
            const post = {
                admin: true,
                text: this.state.text
            }

            this.setState({text: ''})
            this.props.addMessage(post);
        }
    }

    render() {
        return (
            <div className="chatbar">
                <input type="text" className="text" value={this.state.text} onChange={e => this.onChange(e)}/>
                <input type="submit" className="submit" value="Enter" onClick={e => this.onClick()}/>
            </div>
        )
    }
}

const mapStateToProps = state => ({})

export default connect(
    mapStateToProps,
    {addMessage}
)(ChatBar);
