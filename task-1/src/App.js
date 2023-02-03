import React from "react";
import { useState } from "react";

const App = () => {
  const [task, updateTask] = useState("");
  const [toDoList, upadateToDoList] = useState([]);

  // add task to the List

  const addTask = () => {
    if (!task || !task.length)
    return;
    toDoList.push(getTaskObject(task,false));
    upadateToDoList(toDoList);
    updateTask("");
  };

  // was created heating and enter and adding to the list 

  // const inputKeyDown = (event) => {
  //   if(event.keycode===13)
  //   addTask();
  // } 


const getTaskObject =(description , iscomplete) => {
  return{
    description,
    iscomplete
  }
}

//to delete the task 
  const deleteTask = (index) => {
    const newList = toDoList.filter((item, i) => i !== index);
    upadateToDoList(newList);
  };


  //to make it mark as done and update 
  const markComplete = (index) => {
    const list = [...toDoList];
    list[index].isComplete = !list[index].isComplete;
    upadateToDoList(list);
  };

  
  return (
    <>
      <div className="app-background">
        <p className="heading-text">Todo Using Hook UseSate</p>
        <div className="task-container">
          <div className="input-button">
            <input
              className="text-input"
              value={task} 
              onKeyDown={inputKeyDown}
              onChange={(event) => updateTask(event.target.value)}
            />
            <button className="add-button" onClick={addTask}>
              +
            </button>
          </div>
          {toDoList?.length ? (
            toDoList.map((toDoObject, index) => (
              <ListItems
                index={index}
                itemData={toDoObject}
                deleteTask={deleteTask}
                markComplete={markComplete}
              />
            ))
          ) : (
            <p className="no-item-text">no task added!</p>
          )}
        </div>
      </div>
    </>
  );
};


//Submodule For listing the items

const ListItems = (props) => {
  return (
    <>
      <div className="list-item row jc-space-between">
        <span 
        // className={props.iteData.isComplete?"task-complete":""}

        className={props.itemData.isComplete ? 'task-complete' : ''}
                  onClick={() => props.markComplete(props.index)}>{props.itemData.isComplete ? `✅ ` : ''}
        {() => props.markComplete(props.index)}
          {props.itemData.description}
        </span>
        <button
          className="delete-icon"
          onClick={() => props.deleteTask(props.index)}>
          Delete
        </button>
      </div>
    </>
  );


};

export default App;
