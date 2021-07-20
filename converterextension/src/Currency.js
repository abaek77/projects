import React, {useState} from 'react';
import {useDebounce} from 'use-debounce';

function Currency() {

    const [translationNumber, settranslationNumber] = useState();
    const [translationNumber2, settranslationNumber2] = useState();
    
    const [numInputCurrency, setNumInputCurrency] = useState();
    const [numResult] = useDebounce(numInputCurrency, 500);



    const handleChangeNum = ({target:{value}}) => {
        setNumInputCurrency(value);
    }

    const convertValues = () => {
        return(
        Number((translationNumber2*numResult/translationNumber).toFixed(2))
        );    
    }

    return(
    <form  >
        <h3>Convert</h3>
        <select onChange = {(e) => settranslationNumber(e.target.value)}>
            <option hidden = {true}>select</option>
            <option value = {1}>USD</option>
            <option value = {.85}>Euro</option>
            <option value = {3.88}>PLN</option>
            <option value = {6.47}>Chinese Yen</option>
            <option value = {.72}>British Pound</option>
        </select>
        <input type="number" value={numInputCurrency}  onChange = {handleChangeNum}/>
        <h3>to</h3>
        <select onChange ={(e) => settranslationNumber2(e.target.value)}>
            <option hidden = {true}>select</option>
            <option value = {1}>USD</option>
            <option value = {.85}>Euro</option>
            <option value = {3.88}>PLN</option>
            <option value = {6.47}>Chinese Yen</option>
            <option value = {.72}>British Pound</option>
        </select>
        
        {numInputCurrency && translationNumber && translationNumber2 ?
        <h3>{convertValues()}</h3>
        :
        <h3>Provide more information</h3>
    }


    
    </form>
    )
    }

export default Currency;