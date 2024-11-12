import React, { useState } from 'react';
import './todo.css';

function Todo() {
  const [inputValue, setInputValue] = useState('');
  const [todos, setTodos] = useState([]);

  const addTodo = () => {
    if (inputValue.trim() !== '') {
      setTodos([...todos, { text: inputValue, completed: false }]);
      setInputValue('');
    }
  };

  const toggleComplete = (index) => {
    const newTodos = todos.map((todo, i) => 
      i === index ? { ...todo, completed: !todo.completed } : todo
    );
    setTodos(newTodos);
  };

  return (
    <div className='todo_container'>
      <h3>My Todo List</h3>
      <input 
        value={inputValue} 
        onChange={(e) => setInputValue(e.target.value)} 
        type="text" 
        placeholder="Enter a todo"
      />
      <button className='add' onClick={addTodo}>Add</button>
      <ul>
        {todos.map((todo, index) => (
          <>
          <li key={index} style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
            {todo.text} </li>
            <button className='complete' onClick={() => toggleComplete(index)}>done</button> 
            <button className='delete' onClick={() => setTodos(todos.filter((_, i) => i !== index))}>Delete</button>
           </>
        ))}
      </ul>
    </div>
  );
}

export default Todo;