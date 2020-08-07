import React, { useEffect, useState } from 'react'
import Message from './../Message/Message'
import FlipMove from 'react-flip-move'
import db from './../../../firebase'
import SendIcon from '@material-ui/icons/Send';
import firebase from 'firebase'
import { IconButton } from '@material-ui/core';
import classes from './Center.module.css';

function Center(props) {
    const [messages,setMessages] = useState([])
    const [input,setInput] = useState('')
    const sendMessage = (event) => {
        event.preventDefault();
        db.collection(props.gname).add({
            message: input,
            username: props.username,
            timestamp: firebase.firestore.FieldValue.serverTimestamp()
        })
        setMessages([...messages,{message: input,
            username: props.username,
            timestamp: firebase.firestore.FieldValue.serverTimestamp()}])
        console.log(props.username)
        setInput('')
        // console.log(props.gname)
        // setInput('')
    }
    useEffect(() => {
        setMessages([])
        db.collection(props.gname).orderBy('timestamp','asc').onSnapshot(snapshot => {
            let mesg = (snapshot.docs.map(doc => ({id:doc.id,message:doc.data()})))
            console.log(mesg)
            setMessages(mesg)
        })
    },[props.gname])
    return (
        <div>
            <div>
            <FlipMove className={classes.Center}>
                {
                    messages.map(({id,message}) => (
                    <Message key={id} message={message} username={props.username}/>
                ))
                        }
            </FlipMove>
            </div>
        <form className={classes.Input}>
            <input placeholder="Enter a message..." type="text" value={input} onChange={(e) => setInput(e.target.value)} className={classes.Input__text}/>
            <IconButton type="submit" disabled={!input} onClick={sendMessage} className={classes.Input__icon}><SendIcon className={classes.send}/></IconButton>
        </form>
        </div>
    )
}

export default Center
