import React, {useState} from 'react';
import Currency from './Currency.js';
import Distance from './Distance';
import Temperature from './Temperature';

function Form () {
    
    const [category, setCategory] = useState("");
    const [selectCurrency, setSelectCurrency] = useState(false);
    const [selectDistance, setSelectDistance] = useState(false);
    const [selectTemperature, setSelectTemperature] = useState(false);

    const handleChangeCategory = ({target: {value}}) => {
        setCategory(value);
        if (value == "Currencies"){
            setSelectCurrency(true);
            setSelectDistance(false);
            setSelectTemperature(false);
        }
        if (value == "Distances"){
            setSelectDistance(true);
            setSelectCurrency(false);
            setSelectTemperature(false);
        }
        if (value == "Temperatures"){
            setSelectTemperature(true);  
            setSelectCurrency(false);
            setSelectDistance(false);
        }
    } 
    

    return(
        <form >
            <select value={category} onChange = {handleChangeCategory}>
                <option hidden={true}>select</option>
                <option >Currencies</option>
                <option >Distances</option>
                <option >Temperatures</option>
            </select>
            <Currency selectCurrency = {selectCurrency} setSelectCurrency = {setSelectCurrency}/>
            <Temperature selectTemperature = {selectTemperature} setSelectTemperature = {setSelectTemperature}/>
            <Distance selectDistance = {selectDistance} setSelectDistance = {setSelectDistance}/>
            
        </form>
    )

}

export default Form;