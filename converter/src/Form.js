import React, {useState} from 'react';
import {debounce} from "lodash";

function Form () {
    
    const [unit, setUnit] = useState("____");
    const [numInput, setNumInput] = useState(1);

    const handleChangeUnit = ({target: {value}}) => {
        setUnit(value);
    }

    const handleChangeNum = ({target: {value}}) => {
        setNumInput(value);
    }

    const generateResult = () => {
    
        switch(unit){
            case "USD":
                return <h4>Converted value from USD to PLN is {numInput*3.829386}</h4>
            case "miles":
                return <h4>Converted value from miles to kilometers is {numInput*1.60934}</h4>
            case "Fahrenheit":
                return <h4>Converted value from Fahrenheit to Celsius is {(numInput-32)/1.8}</h4>
        }
    }

    return(
        <form>
            <select value = {unit} onChange={ handleChangeUnit}>
                <option hidden={true}>select</option>
                <option >miles</option>
                <option >USD</option>
                <option >Fahrenheit</option>
            </select>
            <input type="number" value={numInput} onChange={handleChangeNum}/>
            {unit && numInput ?
                generateResult()
                :
                <h4>Provide some value.</h4>
            }
        </form>
    );
}

export default Form;

