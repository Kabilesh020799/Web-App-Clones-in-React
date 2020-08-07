import React, { Component } from 'react';

import classes from './Layout.module.css'
import Mainbar from './../Mainbar/Mainbar'
import Sidebar from './../Sidebar/Sidebar'

class Layout extends Component {
    render() {
        return (
            <div className={classes.Layout}>
                <div className={classes.Mainbar}><Mainbar username={this.props.username}/></div>
                <div className={classes.Sidebar}><Sidebar username={this.props.username}/></div>
            </div>
        )
    }
}

export default Layout;