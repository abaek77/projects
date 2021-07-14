import React, {useState} from 'react';

function Temperature({selectTemperature}) {

    const [unit, setUnit] = useState("");
    const [unit2, setUnit2] = useState("");
    const [numInputTemperature, setNumInputTemperature] = useState(1);
    const [numInputTemperature2, setNumInputTemperature2] = useState(1);
    const [numInputTemperature3, setNumInputTemperature3] = useState();

    const handleChangeNum = ({target:{value}}) => {
        setNumInputTemperature(value);
    }

    const generalTranslationNumberHandler = ({target:{value}}) => {
        setUnit(value);

    }
    const generalTranslationNumberHandler2 = ({target:{value}}) => {
        setUnit2(value);
    }

    const numChangeHandler = (event) => {
        event.preventDefault();
        switch (unit){
            case "Celsius":
                setNumInputTemperature2(numInputTemperature);
                console.log("bye");
                break;
            case "Kelvin":
                setNumInputTemperature2(numInputTemperature-273);
                console.log("bye");
                break;
            case "Fahrenheit":
                setNumInputTemperature2((numInputTemperature-32)/1.8);
                console.log("bye");
                break;
        }
        switch (unit2){
            case "Celsius":
                setNumInputTemperature3(numInputTemperature2);
                console.log("hi");
                break;
            case "Kelvin":
                setNumInputTemperature3(numInputTemperature2+273);
                console.log("hi");
                break;
            case "Fahrenheit":
                setNumInputTemperature3((numInputTemperature2*1.8)+32)
                console.log("hi");
                break;
        }
        
    }

    return(
    <form hidden={!selectTemperature} >
        <h4>Convert</h4>
        <select onChange = {generalTranslationNumberHandler} value = {unit}>
            <option hidden = {true}>select</option>
            <option >Celsius</option>
            <option >Kelvin</option>
            <option >Fahrenheit</option>
        </select>
        <h4>to</h4>
        <select onChange ={generalTranslationNumberHandler2} value = {unit2}>
            <option hidden = {true}>select</option>
            <option >Celsius</option>
            <option >Kelvin</option>
            <option >Fahrenheit</option>
        </select>
        <input type="number" value={numInputTemperature} onChange = {handleChangeNum} />

        
        <button onClick  = {numChangeHandler}>Convert</button>

    
    <h4>{numInputTemperature3}</h4>
    </form>
    )
    }

export default Temperature;