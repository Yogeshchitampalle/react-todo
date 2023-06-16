// NewTodoForm.js
import React from 'react';

const NewTodoForm = ({
  inputValue,
  setInputValue,
  addTodo,
  editId,
  cancelEditing,
  searchQuery,
  setSearchQuery,
}) => {
  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleAddTodo = () => {
    addTodo();
  };

  const handleCancelEditing = () => {
    cancelEditing();
  };

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  return (
    <div className="new-item-form">
      <div className="form-row">
        <input
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          placeholder="Enter Your Task..."
        />
      </div>
      <div className="form-row">
        <button className="btn" onClick={handleAddTodo}>
          {editId ? 'Update Todo' : 'Add Todo'}
        </button>
        {editId && (
          <button className="btn btn-danger" onClick={handleCancelEditing}>
            Cancel
          </button>
        )}
      </div>
      <div className="form-row">
        <input
          type="text"
          value={searchQuery}
          onChange={handleSearch}
          placeholder="Search Todos..."
        />
      </div>
    </div>
  );
};

export default NewTodoForm;
