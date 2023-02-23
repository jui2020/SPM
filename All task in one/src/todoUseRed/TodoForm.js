import React, { useContext, useState } from 'react';
import { TodoContext } from './TodoContext';
import '../components/Todo.css'

 const TodoForm = () => {
  const [text, setText] = useState('');
  const { dispatch } = useContext(TodoContext);

 const handleSubmit = (e) => {
  
if(text === ""){
  e.preventDefault();
  return;
}
    e.preventDefault();
    const todo = { id: Date.now(), text };
    dispatch({ type: 'ADD_TODO', payload: todo });
    setText('');
  }

  return (
  
    <div className='todocontainer'>
    <span> <b>Todo Task 6</b></span>
    <br />
    <form onSubmit={handleSubmit}>

    <h2><b> Add </b></h2>
      <input type="text" value={text} placeholder='Create a new todo' onChange={(e) => setText(e.target.value)} />
      <button type="submit">Add Todo</button>
    </form>
    </div>
  );
}
export default TodoForm