import React, { useState } from 'react';
import './App.css';
import Form from './form';
import List from './list';


function App() {

  const [todoinput, setTodoinput] = useState("");
  const [todos, setTodos] = useState([]);

  return (
    <div className="App">
      <h1>To do List</h1>
      <Form todoinput={todoinput} setTodoinput={setTodoinput} todos={todos} setTodos={setTodos}/>
      <List />
    </div>
  );
}

export default App;
