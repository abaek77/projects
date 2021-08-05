import React from 'react';
import './App.css';


function Item({ text, setTodos, todo }) {

    function deleteListItem() {
        console.log({ todo })
        setTodos(previousState => previousState.filter((todoitem) => todoitem.id !== todo.id))
    }

    return (
        <div className="item">
            <li>{todo.text}</li>
            <button onClick={deleteListItem}>Complete</button>

        </div>
    );

};

export default Item;