import './App.css';
import React, { useState } from 'react';

function App() {
  const [data, setData] = useState([]);
  const [task, setTask] = useState("");

  const addTask = () => {

    let dataArray = [];

    for(let i = 0; i < data.length; i++){
      dataArray[i] = data[i]
    }

    dataArray[data.length] = task;
    setData(dataArray);
    
  }

  const removeTask = () => {
    let dataArray = [];

    for(let i = 0; i < data.length; i++){
      dataArray[i] = data[i];
    }
    
    dataArray.pop();
    setData(dataArray);

  }

  const undoTask = (j) => {
    let dataArray = [];
    
    for (let i = 0; i < data.length ; i++){
      if (i === j){
        continue;
      }
      else {
        dataArray[i] = data[i];
      }
    }

    setData(dataArray);
  }

  // function addItem(item, d){
  //   return d.push(item);
  // }
  return (
    <div className="App">
      <ul>
        {data.map((elem, j) =>(<li key={j}>{elem}<button onClick={() => {undoTask(j)}}>Undo Task</button></li>))}
      </ul>
    <input name="task" type="text" onChange={(event) => setTask(event.target.value)} 
    value={task}/>
    <button onClick={addTask}>Add Task</button>
    <button onClick={removeTask}>Remove Task</button>
    </div>
  );
}

export default App;
