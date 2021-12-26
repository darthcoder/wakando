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

  const undoTask = () => {
    let dataArray = [];

    for(let i = 0; i < data.length; i++){
      dataArray[i] = data[i];
    }
    
    dataArray.pop();
    setData(dataArray);

  }

  const removeTask = (j) => {
    let dataArray = [];
    
    for (let i = 0; i < data.length ; i++){
      dataArray[i] = data[i];
    }

    dataArray.splice(j, 1)

    console.log(dataArray);
    setData(dataArray);
    console.log(dataArray);
  }


  return (
    <div className="App">
      <ul>
        {data.map((elem, j) =>(<li key={j}>{elem}<button onClick={() => {removeTask(j)}}>X</button></li>))}
      </ul>
    <input name="task" type="text" onChange={(event) => setTask(event.target.value)} 
    value={task}/>
    <button onClick={addTask}>Add Task</button>
    <button onClick={undoTask}>Undo Task</button>
    </div>
  );
}

export default App;
