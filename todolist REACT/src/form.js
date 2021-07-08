import React from 'react';
import './App.css';

function Form ({setTodoinput, setTodos, todoinput, todos}) {
    
    function Savetodoinput(event) {
        console.log(event.target.value);
        setTodoinput(event.target.value);
    };


    function Objectifytodo (event) {
        event.preventDefault();
        setTodos([...todos, {text: todoinput, completed: false, id: Math.random()*1000000}]);
        console.log({todos});
    };


    return(
        <form>
            <input type="text" className="inputtext" onChange = {Savetodoinput}/>
            <button onClick={Objectifytodo} className="firstbutton">+</button>
        </form>
    );
        
}

export default Form;