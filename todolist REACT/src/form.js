import React from 'react';

function Form ({setTodoinput, setTodos, todoinput, todos}) {
    function Savetodoinput(event) {
        console.log(event.target.value);
        setTodoinput(event.target.value);
    };

    const Objectifytodo = (event) => {
        event.preventDefault()
        setTodos([...todos, {text: todoinput, completed: false}])
        console.log({todos})
    }

    return(
        <form>
            <input type="text" className="inputtext" onChange = {Savetodoinput}/>
            <button onClick={Objectifytodo}>+</button>
        </form>
    );
        
}

export default Form;
