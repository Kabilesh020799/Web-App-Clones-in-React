import React, { useState,useEffect } from 'react';
import {Button,FormControl ,Input,InputLabel} from '@material-ui/core'
import './App.css';
import firebase from 'firebase'
import FlipMove from 'react-flip-move'
import SendIcon from '@material-ui/icons/Send';
import { IconButton } from '@material-ui/core';

import Message from './Message'
import db from './firebase';

function App() {
  const [input,setInput] = useState('')
  const [messages,setMessages] = useState([])
  const [username,setUsername] = useState('')

  useEffect(() => {
    db.collection('messages').orderBy('timestamp','asc').onSnapshot(snapshot => {
      setMessages(snapshot.docs.map(doc => ({id: doc.id,message:doc.data()})))
    })
  },[])

  useEffect(() => {
    setUsername(prompt("Enter Yout name"))
  },[])

  const sendMessage = (event) => {
    event.preventDefault();
    db.collection('messages').add({
      message: input,
      username: username,
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
    })
    setInput('')
  }

  return (
    <div className="App">
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTVKvGW_04tITbEzMo0lO41u6SCGA4KF3HReA&usqp=CAU"></img>
      <h1>Hello Developers</h1>
      <h2>Welcome {username}</h2>
      <form className="app__form">
      <FormControl className="app__formControl">
          <InputLabel>Enter a message....</InputLabel>
          <Input className="app__input" placeholder="Enter a message..." value={input} onChange={(event) => setInput(event.target.value)}/>
          <IconButton className="app__iconButton" disabled={!input} variant="contained" color="primary" type="submit" onClick={sendMessage}><SendIcon/></IconButton>
        </FormControl>
      </form>

    <FlipMove>
    {
        messages.map(({id,message}) => (
          <Message key={id} message={message} username={username}/>
        ))
      }
    </FlipMove>
    </div>
  );
}

export default App;
