import React, {useState} from 'react';

export default function Counter () {
    
    var [amount, setAmount] = useState(0);
    
    const Increment = (e) => {
        e.preventDefault();
        setAmount(amount+1);
    }

    const Decrement = (e) => {
        e.preventDefault();
        setAmount(amount-1);
    }
    
    return (
        <form>
            <button onClick={Increment}>+</button>
            <button onClick={Decrement}>-</button>
            <h3>{amount}</h3>
        </form>
        
    )
}