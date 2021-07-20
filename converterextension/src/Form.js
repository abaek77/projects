import React, {useState} from 'react';
import Currency from './Currency.js';
import Distance from './Distance';
import Temperature from './Temperature';

function Form () {
    
    const [category, setCategory] = useState("");


    return(
        <form >
            <select value={category} onChange = {(e) => setCategory(e.target.value)}>
                <option hidden={true}>select</option>
                <option >Currencies</option>
                <option >Distances</option>
                <option >Temperatures</option>
            </select>
            {category === "Currencies" && <Currency/>}
            {category === "Distances" && <Distance/>}
            {category === "Temperatures" && <Temperature/>}
            
        </form>
    )

}

export default Form;