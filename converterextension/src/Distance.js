import React, {useState} from 'react';

function Distance({selectDistance}) {

<<<<<<< Updated upstream
    const [translationNumber, setTranslationNumber] = useState();
    const [translationNumber2, setTranslationNumber2] = useState();
=======
    const [translationNumber, settranslationNumber] = useState();
    const [translationNumber2, settranslationNumber2] = useState();
>>>>>>> Stashed changes
    
    const [numInputDistance, setNumInputDistance] = useState();
    const [numInputDistance2, setNumInputDistance2] = useState();

    const handleChangeNum = ({target:{value}}) => {
        setNumInputDistance(value);
    }

    const translationNumberHandler = ({target:{value}}) => {
<<<<<<< Updated upstream
        setTranslationNumber(value);
    }
    const translationNumberHandler2 = ({target:{value}}) => {
        setTranslationNumber2(value);
=======
        settranslationNumber(value);
    }
    const translationNumberHandler2 = ({target:{value}}) => {
        settranslationNumber2(value);
>>>>>>> Stashed changes
    }

    const numChangeHandler = (event) => {
        event.preventDefault();
        return(
        setNumInputDistance2(translationNumber2*numInputDistance/translationNumber)
        );
        
    }

    return(
    <form hidden={!selectDistance} >
        <h4>Convert</h4>
        <select onChange = {translationNumberHandler}>
            <option hidden = {true}>select</option>
            <option value = {1}>meter</option>
            <option value = {3.28084}>feet</option>
            <option value = {39.3701}>inches</option>
            <option value = {1000}>millimeters</option>
            <option value = {0.000621371}>miles</option>
        </select>
        <h4>to</h4>
        <select onChange ={translationNumberHandler2}>
            <option hidden = {true}>select</option>
            <option value = {1}>meter</option>
            <option value = {3.28084}>feet</option>
            <option value = {39.3701}>inches</option>
            <option value = {1000}>millimeters</option>
            <option value = {0.000621371}>miles</option>
        </select>
        <input type="number" value={numInputDistance} onChange = {handleChangeNum} />
        <button onClick  = {numChangeHandler}>Convert</button>

    
    <h4>{numInputDistance2}</h4>
    </form>
    )
    }

export default Distance;
