import React from 'react';

const TodoItem = ({ todo, editId, inputValue, startEditing, setInputValue, updateTodo, deleteTodo }) => {
  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleUpdateTodo = () => {
    updateTodo();
  };

  const handleCancelEditing = () => {
    startEditing(null, '');
  };

  const isEditing = editId === todo.id;

  return (
    <li className={`list-item ${isEditing ? 'editing' : ''}`}>
      {isEditing ? (
        <input
          type="text"
          value={inputValue}
          onChange={handleInputChange}
        />
      ) : (
        <label>
          <input type="checkbox" />
          {todo.text}
        </label>
      )}
      {isEditing ? (
        <>
          <button onClick={handleUpdateTodo}>Update</button>
          <button onClick={handleCancelEditing}>Cancel</button>
        </>
      ) : (
        <>
          <button className='btn1' onClick={() => startEditing(todo.id, todo.text)}>
            Edit
          </button>
          <button className='btn2' onClick={() => deleteTodo(todo.id)}>Delete</button>
        </>
      )}
    </li>
  );
};

export default TodoItem;
