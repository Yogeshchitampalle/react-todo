import React, { useState, useEffect } from 'react';
import TodoList from './Components/TodoList';
import NewTodoForm from './Components/NewTodoForm';
import "./App.css"

const App = () => {
  const [todos, setTodos] = useState(() => {
    const localValue = localStorage.getItem('todos');
    return localValue ? JSON.parse(localValue) : [];
  });
  const [inputValue, setInputValue] = useState('');
  const [editId, setEditId] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredTodos, setFilteredTodos] = useState([]);

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  useEffect(() => {
    if (searchQuery.trim() !== '') {
      const matchingTodos = todos.filter(todo => todo.text.toLowerCase().includes(searchQuery.toLowerCase()));
      setFilteredTodos(matchingTodos);
    } else {
      setFilteredTodos(todos);
    }
  }, [searchQuery, todos]);

  const addTodo = () => {
    if (inputValue.trim() !== '') {
      if (editId) {
        const updatedTodos = todos.map(todo => {
          if (todo.id === editId) {
            return { ...todo, text: inputValue };
          }
          return todo;
        });
        setTodos(updatedTodos);
        setEditId(null);
      } else {
        const newTodo = {
          id: todos.length + 1,
          text: inputValue,
        };
        setTodos([...todos, newTodo]);
      }
      setInputValue('');
    }
  };

  const startEditing = (id, text) => {
    setEditId(id);
    setInputValue(text);
  };

  const cancelEditing = () => {
    setEditId(null);
    setInputValue('');
  };

  const deleteTodo = id => {
    const updatedTodos = todos.filter(todo => todo.id !== id);
    setTodos(updatedTodos);
    if (editId === id) {
      setEditId(null);
      setInputValue('');
    }
  };

  return (
    <div className="container">
      <h1 className="header">Todo App</h1>
      <NewTodoForm
        inputValue={inputValue}
        setInputValue={setInputValue}
        addTodo={addTodo}
        editId={editId}
        cancelEditing={cancelEditing}
        setSearchQuery={setSearchQuery}
      /> &nbsp;
      <TodoList
      todos={filteredTodos}
        // todos={todos}
        startEditing={startEditing}
        deleteTodo={deleteTodo}
      />
    </div>
  );
};

export default App;
