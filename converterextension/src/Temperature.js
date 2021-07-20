
import React, {useState} from 'react';
import {useDebounce} from 'use-debounce';

function Temperature() {

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
   
    const convertValues = () => {

       if(unit === "Celsius"){
           if(unit2 === "Celsius"){
               return (numResult)
           }
           else if (unit2 === "Kelvin"){
               return (numResult + 273)
           }
           else if (unit2 === "Fahrenheit"){
               return ((numResult*1.8)+32)
           }
       }
       else if (unit === "Kelvin"){
           if(unit2 === "Celsius"){
               return (numResult-273)
           }
           else if (unit2 === "Kelvin"){
               return (numResult)
           }
           else if (unit2 === "Fahrenheit"){
               return (((numResult-273)*1.8)+32)
           }
       }
       else if (unit === "Fahrenheit"){
           if(unit2 === "Celsius"){
               return ((numResult-32)/1.8)
           }
           else if (unit2 === "Kelvin"){
               return (numResult-32)/1.8+273
           }
           else if (unit2 === "Fahrenheit"){
               return (numResult)
           }
       }

        
    }

    return(
    <form  >
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

<h3>{Number(convertValues()).toFixed(2)}</h3>
:
<h3>Provide more information</h3>
}
        
    </form>
    )
    }

export default Temperature;