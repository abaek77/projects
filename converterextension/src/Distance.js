import React, {useState} from 'react';
import {useDebounce} from 'use-debounce';

function Distance() {

    const [translationNumber, setTranslationNumber] = useState();
    const [translationNumber2, setTranslationNumber2] = useState();

    
    const [numInputDistance, setNumInputDistance] = useState();
    const [numResult] = useDebounce(numInputDistance, 500);


    const handleChangeNum = ({target:{value}}) => {
        setNumInputDistance(value);
    }

    const convertValue = () => {
        return(
        Number((translationNumber2*numResult/translationNumber).toFixed(2))
        );  
    }

    return(
    <form  >
        <h3>Convert</h3>
        <select onChange = {(e) => setTranslationNumber(e.target.value)}>
            <option hidden = {true}>select</option>
            <option value = {1}>meter</option>
            <option value = {3.28084}>feet</option>
            <option value = {39.3701}>inches</option>
            <option value = {1000}>millimeters</option>
            <option value = {0.000621371}>miles</option>
        </select>
        <input type="number" value={numInputDistance} onChange = {handleChangeNum} />
        <h3>to</h3>
        <select onChange ={(e) => setTranslationNumber2(e.target.value)}>
            <option hidden = {true}>select</option>
            <option value = {1}>meter</option>
            <option value = {3.28084}>feet</option>
            <option value = {39.3701}>inches</option>
            <option value = {1000}>millimeters</option>
            <option value = {0.000621371}>miles</option>
        </select>
      
        {numInputDistance && translationNumber && translationNumber2 ?
        <h3>{convertValue()}</h3>
        :
        <h3>Provide more information</h3>
    }

    
    
    </form>
    )
    }

export default Distance;
