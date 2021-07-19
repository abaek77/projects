import React, {useState} from 'react';

function Distance({selectDistance}) {

    const [translationNumber, setTranslationNumber] = useState();
    const [translationNumber2, setTranslationNumber2] = useState();

    
    const [numInputDistance, setNumInputDistance] = useState();


    const handleChangeNum = ({target:{value}}) => {
        setNumInputDistance(value);
    }

    const translationNumberHandler = ({target:{value}}) => {

        setTranslationNumber(value);
    }
    const translationNumberHandler2 = ({target:{value}}) => {
        setTranslationNumber2(value);
    }

    const numChangeHandler = () => {
        return(
        translationNumber2*numInputDistance/translationNumber
        );
        
    }

    return(
    <form hidden={!selectDistance} >
        <h3>Convert</h3>
        <select onChange = {translationNumberHandler}>
            <option hidden = {true}>select</option>
            <option value = {1}>meter</option>
            <option value = {3.28084}>feet</option>
            <option value = {39.3701}>inches</option>
            <option value = {1000}>millimeters</option>
            <option value = {0.000621371}>miles</option>
        </select>
        <input type="number" value={numInputDistance} onChange = {handleChangeNum} />
        <h3>to</h3>
        <select onChange ={translationNumberHandler2}>
            <option hidden = {true}>select</option>
            <option value = {1}>meter</option>
            <option value = {3.28084}>feet</option>
            <option value = {39.3701}>inches</option>
            <option value = {1000}>millimeters</option>
            <option value = {0.000621371}>miles</option>
        </select>
      
        {numInputDistance && translationNumber && translationNumber2 ?
        <h3>{numChangeHandler()}</h3>
        :
        <h3>Provide more information</h3>
    }

    
    
    </form>
    )
    }

export default Distance;
