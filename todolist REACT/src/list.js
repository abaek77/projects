import React from 'react';
import Item from './item';
import Form from './form';
import './App.css';

function List ({setTodoinput, setTodos, todoinput, todos}){
    return(
       <div className = "list">
           <ol>{
           todos.map((todo) => (<Item text={todo.text} todos={todos} setTodos={setTodos} todo={todo} completion = {todo.completion}/>))
           }
           </ol>
       </div>
    );
}

export default List;