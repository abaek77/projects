
import React, {useState} from 'react';

function Temperature({selectTemperature}) {

    const [unit, setUnit] = useState("");
    const [unit2, setUnit2] = useState("");
    const [numInputTemperature, setNumInputTemperature] = useState(0);

    const handleChangeNum = ({target:{value}}) => {
        setNumInputTemperature(value);
        console.log(value);
    }


    
    const translationNumberHandler = ({target:{value}}) => {
        setUnit(value);
    }
    const translationNumberHandler2 = ({target:{value}}) => {
        setUnit2(value);
    }
   
    const numChangeHandler = () => {

       
        switch (unit){
            case "Celsius":
                for(let i = 0; i<2; i++){
                setNumInputTemperature(numInputTemperature)
                }
                break;
            case "Kelvin":
                for(let i = 0; i<2; i++){
                setNumInputTemperature(numInputTemperature-273)
                }
                break;
            case "Fahrenheit":
                for(let i = 0; i<2; i++){
                setNumInputTemperature((numInputTemperature-32)/1.8)
                }
                break;
    
    }
        switch (unit2){
            case "Celsius":
                return numInputTemperature
            case "Kelvin":
                return numInputTemperature + 273
            case "Fahrenheit":
                return(numInputTemperature*1.8)+32
        }  
        
    }

    return(
    <form hidden={!selectTemperature} >
        <h3>Convert</h3>
        <select onChange = {translationNumberHandler} value = {unit}>
            <option hidden = {true}>select</option>
            <option >Celsius</option>
            <option >Kelvin</option>
            <option >Fahrenheit</option>
        </select>
        <input type="number" value={numInputTemperature} onChange = {handleChangeNum} />
        <h3>to</h3>
        <select onChange ={translationNumberHandler2} value = {unit2}>
            <option hidden = {true}>select</option>
            <option >Celsius</option>
            <option >Kelvin</option>
            <option >Fahrenheit</option>
        </select>
{unit && unit2 && numInputTemperature ?

<h3>{numChangeHandler()}</h3>
:
<h3>Provide more information</h3>
}
        
    </form>
    )
    }

export default Temperature;