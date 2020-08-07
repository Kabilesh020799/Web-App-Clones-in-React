import React, { Component } from 'react';
import { IconButton } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import * as actions from './../../store/actions/actions'

import classes from './Mainbar.module.css'
import Chat from './Chat/Chat'
import { connect } from 'react-redux';
class Mainbar extends Component {
    state ={
        gname: '',
        arr: JSON.parse(localStorage.getItem('groups')) || []
    }
    addGroup = () => {
        if(this.state.arr.includes(this.state.gname)){
            return;
        }
        let arr = [...this.state.arr,this.state.gname];
        this.setState({arr:arr});
        localStorage.setItem('groups',JSON.stringify(arr));
        this.setState({gname: ''});
    }
    clicked = (ar) => {
        this.props.onSetGname(ar);
    }
    render() {
        return (
            <div className={classes.Mainbar}>
                <div className={classes.header}>{this.props.username}</div>
                <div className={classes.InputWrapper}>
                    <input type="text" value={this.state.gname} className={classes.Input} placeholder="Add a group..." onChange={(event) => {this.setState({gname:event.target.value})}}/>
                    <IconButton onClick={this.addGroup} disabled={!this.state.gname}><SearchIcon/></IconButton>
                </div>
                <div className={classes.body}>{this.state.arr ?this.state.arr.map((ar,i) => <div key={i}><Chat gname={ar} clicked={() => this.clicked(ar)}/></div>): null}</div>  
            </div>
        )
    }
}
const mapDispatchToProps = dispatch => {
    return {
        onSetGname: (gname) => dispatch(actions.addGname(gname))
    }
}
export default connect(null,mapDispatchToProps)(Mainbar);