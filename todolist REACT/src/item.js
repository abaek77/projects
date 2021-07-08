import React from 'react';
import './App.css';


function Item({text, setTodos, todos, todo}){

    function deletefromlist () {
        console.log({todo})
        setTodos(todos.filter((todoitem) => todoitem.id !== todo.id))
        //  if(todos=[""]){
        //      alert("nice job!")
        //                  }
    }

    return(
        <div className="item">
        <li>{text}</li>
        <button onClick = {deletefromlist}>Complete</button>
    </div>
    );

};

export default Item;
