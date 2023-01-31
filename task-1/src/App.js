import React from "react";
import { useState } from "react";


const ListItems= () => {
  return  (
      <>
      <div className="list-item row jc-space-between">
      <span>List item</span>
     <button className="delete-icon">Delete</button>
     </div>
  </>
  )
};

const App = () => {

  const [task,updateTask]=useState("")
  const [toDoList, upadateToDoList] = useState([]);

  const addNote = () => {
    toDoList.push({description: task})
    upadateToDoList(toDoList)
    updateTask("")
  }
  return (
    <>
      <div className="app-background">
        <p className="heading-text">Todo List using usestate</p>
        <div className="task-container">
         <div>

            <input className="text-input" value={task}
            onChange={(event)=>updateTask(event.target.value)} />
            <button className="add-button">+</button>
          </div>
        {toDoList?.length ? <ListItems /> :
          
          <p className="no-item-text">no task added!</p> }
      
          </div>
        </div>
      
    </>
  );
};

export default App;
