import React, { useState } from 'react';
import './App.css';
import { v4 as uuidv4 } from 'uuid';

function Form({ setTodos, todos }) {

    const [todoinput, setTodoinput] = useState("");

    function handleChange(event) {
        console.log(event.target.value);
        setTodoinput(event.target.value);
    };


    function addTodoHandler(event) {
        event.preventDefault();
        setTodos((previousState) => [...previousState, { text: todoinput, completed: false, id: uuidv4() }]);
    };




    return (
        <form>
            <input data-testid="todo-input" type="text" value={todoinput} onChange={handleChange} />
            <button data-testid="todo-button" onClick={addTodoHandler} >+</button>
        </form>
    );
}

export default Form;