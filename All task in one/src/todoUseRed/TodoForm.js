import React, { useContext, useState } from 'react';
import { TodoContext } from './TodoContext';

 const TodoForm = () => {
  const [text, setText] = useState('');
  const { dispatch } = useContext(TodoContext);

 const handleSubmit = (e) => {
  

    e.preventDefault();
    const todo = { id: Date.now(), text };
    dispatch({ type: 'ADD_TODO', payload: todo });
    setText('');
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={text} onChange={(e) => setText(e.target.value)} />
      <button type="submit">Add Todo</button>
    </form>
  );
}
export default TodoForm