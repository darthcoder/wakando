import './App.css';
import React, { useState } from 'react';

function App() {
  const [data, setData] = useState([]);
  const [task, setTask] = useState("");

  const foo = () => {

    let dataArray = [];

    for(let i = 0; i < data.length; i++){
      dataArray[i] = data[i]
    }

    dataArray[data.length] = task;
    console.log(dataArray);
    setData(dataArray);
    console.log(dataArray);
  }

  // function addItem(item, d){
  //   return d.push(item);
  // }
  return (
    <div className="App">
      <ul>
        {data.map((elem, i) =>(<li key={i}>{elem}</li>))}
      </ul>
    <input name="task" type="text" onChange={(event) => setTask(event.target.value)} 
    value={task}/>
    <button onClick={foo}>Add Task</button>
    </div>
  );
}

export default App;
