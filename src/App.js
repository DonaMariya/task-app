import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
import Footer from './Footer';
import Button from './Button';
import Tasks from './Tasks';

function App() {
  const [tasks, setTasks]= useState([
    {id:1,
    text:'Meeting'
  },

    {id:2,
      text:'Meeting'
    },
      {id:3,
        text:'Lunch'}
  ])
  const greenClick=()=>{
    console.log("Green button clicked")
  }
  const redClick=()=>{
    console.log("red button clicked")
  }
  const onDelete =(id)=>{
    setTasks(tasks.filter((task)=>task.id !==id
    ))
  }
  
  
  return (
    <div className="App">
      <header className="App-header">
        <Tasks tasks={tasks} onClick={onDelete}></Tasks>
      <Button color='green'text="green button" onClick={greenClick}></Button>
      <Button color='red'text="red button" onClick={redClick}></Button>
        <div className="box" id="box1"></div>
        <div className="box" id="box2"></div>
        <div className="box" id="box3"></div>
        <div className="box" id="box4"></div>
        <div className="box" id="box5"></div>
        
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <Footer name="Dona M J"></Footer>
    </div>
  );
  }
export default App;
