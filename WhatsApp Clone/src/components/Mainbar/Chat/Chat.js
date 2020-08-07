import React, { Component } from 'react'

import classes from './Chat.module.css'

class Chat extends Component {
    render() {
        return (
            <div className={classes.Chat} onClick={this.props.clicked}>
                <img className={classes.Dp} src="https://images.news18.com/ibnlive/uploads/2020/02/WhatsApp-dark-logo.jpg" alt=""/>
                <h1 className={classes.header}>{this.props.gname}</h1>
            </div>
        )
    }
}

export default Chat;