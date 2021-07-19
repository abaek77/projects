
import React, {useState} from 'react';
import {useDebounce} from 'use-debounce';

function Temperature({selectTemperature}) {

    const [unit, setUnit] = useState("");
    const [unit2, setUnit2] = useState("");
    const [numInputTemperature, setNumInputTemperature] = useState(0);
    const [numResult] = useDebounce(numInputTemperature, 500);

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

       if(unit === "Celsius"){
           if(unit2 === "Celsius"){
               return Number((numResult).toFixed(2));
           }
           else if (unit2 === "Kelvin"){
               return Number((numResult + 273).toFixed(2));
           }
           else if (unit2 === "Fahrenheit"){
               return Number(((numResult*1.8)+32).toFixed(2));
           }
       }
       else if (unit === "Kelvin"){
           if(unit2 === "Celsius"){
               return Number((numResult-273).toFixed(2));
           }
           else if (unit2 === "Kelvin"){
               return Number((numResult).toFixed(2));
           }
           else if (unit2 === "Fahrenheit"){
               return Number((((numResult-273)*1.8)+32).toFixed(2));
           }
       }
       else if (unit === "Fahrenheit"){
           if(unit2 === "Celsius"){
               return Number(((numResult-32)/1.8).toFixed(2));
           }
           else if (unit2 === "Kelvin"){
               return Number(((numResult-32)/1.8+273).toFixed(2));
           }
           else if (unit2 === "Fahrenheit"){
               return Number((numResult).toFixed(2));
           }
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