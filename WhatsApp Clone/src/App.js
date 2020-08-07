import React,{useState,useEffect} from 'react';
import './App.css';

import Layout from './components/Layout/Layout'


function App() {
  const [username,setUsername] = useState('')
  useEffect(() => {
    setUsername(prompt("Enter username"))
  },[])

  return (
    <div className="App">
      <div className="header"></div>
      <Layout username={username}/> 
    </div>
  );
}

export default App;
