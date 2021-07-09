import React, { useState } from 'react';
import './App.css';
import Form from './Form';
import List from './List';


function App() {

  const [todos, setTodos] = useState([]);

  return (
    <div className="App">
      <h1>To do List</h1>
      <Form todos={todos} setTodos={setTodos}/>
      <List todos={todos} setTodos={setTodos}/>
    </div>
  );
}

export default App;
