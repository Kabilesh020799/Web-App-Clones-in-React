import React, { Component } from 'react';
import { connect } from 'react-redux';
import classes from './Sidebar.module.css';
import Center from './Center/Center'

class Sidebar extends Component {
    state={
        messages: []
    }
    render() {
        return (
            <div className={classes.Sidebar}>
                <h1 className={classes.header}>{this.props.gname}</h1>
                <div className={classes.body}>
                    {this.props.gname? <Center gname={this.props.gname} username={this.props.username}/>: null}
                </div>
            </div>
        )
    }
}
const mapStateToProps = state => {
    return {
        gname: state.gname
    }
}
export default connect(mapStateToProps)(Sidebar);