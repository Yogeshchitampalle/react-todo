import React from 'react';
import TodoItem from './TodoItem';

const TodoList = ({ todos, editId, inputValue, startEditing, setInputValue, updateTodo, deleteTodo }) => {
  return (
    <ul className="list">
      {todos.map(todo => (
        <TodoItem
          key={todo.id}
          todo={todo}
          editId={editId}
          inputValue={inputValue}
          startEditing={startEditing}
          setInputValue={setInputValue}
          updateTodo={updateTodo}
          deleteTodo={deleteTodo}
        />
      ))}
    </ul>
  );
};

export default TodoList;
