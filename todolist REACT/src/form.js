import React from 'react';

function Form ({setTodoinput, setTodos, todoinput}) {
    function Savetodoinput(event) {
        console.log(event.target.value)
        setTodoinput(event.target.value)
    }

    function Printtodo(event){
        event.preventDefault();
        setTodos([...todos, {completed: false}])
        
        
    }

    return(
        <form>
            <input type="text" className="inputtext" onChange = {Savetodoinput}/>
            <button onClick={Printtodo}>+</button>
        </form>
    );
        
}

export default Form;