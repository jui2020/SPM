import React, { useContext } from 'react';
import { TodoContext } from './TodoContext';

export function TodoSummary() {
  const { state } = useContext(TodoContext);

  return <div style={{textAlign:'center'}}>Total Todos: {state.todos.length}</div>;
}   