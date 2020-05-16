import React, {Component} from 'react'
import {connect} from 'react-redux'
import './header.css'
import {signOut, verifyLogin} from '../../../redux/actions/index'

class Header extends Component {

    onClick = e => {
         this.props.signOut();
    }

    render = () => {
        return (
            <div className="title">
                <p className="chat">DLYA Admin Chat</p>
                <div className="logout" onClick={e => this.onClick(e)}>Logout</div>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    auth: state.login
});

export default connect(
    mapStateToProps,
    {signOut, verifyLogin}
)(Header)
