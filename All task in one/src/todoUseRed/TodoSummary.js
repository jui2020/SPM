import React, { useContext } from 'react';
import { TodoContext } from './TodoContext';

export function TodoSummary() {
  const { state } = useContext(TodoContext);

  return <div>Total Todos: {state.todos.length}</div>;
}   