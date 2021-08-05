import React from 'react';
import Item from './Item';
import './App.css';

function List({ setTodos, todos }) {
    return (
        <div className="list">
            <ol>{
                todos.map((todo) => <Item todos={todos} setTodos={setTodos} todo={todo} />)
            }
            </ol>
        </div>
    );
}

export default List;