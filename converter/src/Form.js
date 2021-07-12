import React, {useState} from 'react';
import {useDebounce} from "use-debounce";

function Form () {
    
    const [unit, setUnit] = useState("");
    const [numInput, setNumInput] = useState(1);
    const [numResult] = useDebounce(numInput, 400);

    const handleChangeUnit = ({target: {value}}) => {
        setUnit(value);
    }

    const handleChangeNum = ({target: {value}}) => {
        setNumInput(value);
    }

    const generateResult =() => {
    
        switch(unit){
            case "USD":
                return <h4>Converted value from USD to PLN is {numResult*3.829386}</h4>
            case "miles":
                return <h4>Converted value from miles to kilometers is {numResult*1.60934}</h4>
            case "Fahrenheit":
                return <h4>Converted value from Fahrenheit to Celsius is {(numResult-32)/1.8}</h4>
        }
    }


    return(
        <form>
            <select value = {unit} onChange={handleChangeUnit}>
                <option hidden={true}>select</option>
                <option >miles</option>
                <option >USD</option>
                <option >Fahrenheit</option>
            </select>
            <input type="number" value={numInput} onChange={handleChangeNum}/>
            {unit && numResult ?
                generateResult()
                :
                <h4>Provide some value.</h4>
            }
        </form>
    );
}

export default Form;

