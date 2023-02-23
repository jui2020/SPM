import React, { useContext, useState } from "react";
import { TodoContext } from "./TodoContext";

const TodoList = () => {
  const { state, dispatch } = useContext(TodoContext);
  const [editableTodo, setEditableTodo] = useState(null);

  const handleEdit = (todo) => {
    
    setEditableTodo(todo);
  };

  const handleSave = (id, text) => {
    dispatch({ type: "EDIT_TODO", payload: { id, text } });
    setEditableTodo(null);
  };

  const handleCancel = () => {
    setEditableTodo(null);
  };

  return (
    <div style={{textAlign:'center'}}>
    <ul >
      {state.todos.map((todo) => (
        <li key={todo.id}>
          { editableTodo?.id === todo.id ? (
            <>
              <input type="text" value={editableTodo.text} onChange={(e) => setEditableTodo({ ...editableTodo, text: e.target.value })} />
              <button onClick={() => handleSave(editableTodo.id, editableTodo.text)}>Save</button>
              <button onClick={handleCancel}>Cancel</button>
            </>
          ) : (
            <>
              {todo.text}
              
              <button onClick={() => handleEdit(todo)}>Edit</button>
              <button onClick={() => dispatch({ type: "DELETE_TODO", payload: todo})}>
                Delete
              </button>
              
            </>
          )}
        </li>
      ))}
    </ul>
    </div>
  );
}

export default TodoList;
