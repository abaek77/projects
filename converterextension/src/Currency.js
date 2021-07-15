import React, {useState} from 'react';

function Currency({selectCurrency}) {

    const [translationNumber, settranslationNumber] = useState();
    const [translationNumber2, settranslationNumber2] = useState();
    
    const [numInputCurrency, setNumInputCurrency] = useState();
    const [numInputCurrency2, setNumInputCurrency2] = useState();



    const translationNumberHandler = ({target:{value}}) => {
        settranslationNumber(value);
    }
    const translationNumberHandler2 = ({target:{value}}) => {
        settranslationNumber2(value);
    }

    const handleChangeNum = ({target:{value}}) => {
        setNumInputCurrency(value);
    }

    const numChangeHandler = (event) => {
        event.preventDefault();
        return(
        setNumInputCurrency2(translationNumber2*numInputCurrency/translationNumber)
        );
        
    }

    return(
    <form hidden={!selectCurrency} >
        <h4>Convert</h4>
        <select onChange = {translationNumberHandler}>
            <option hidden = {true}>select</option>
            <option value = {1}>USD</option>
            <option value = {.85}>Euro</option>
            <option value = {3.88}>PLN</option>
            <option value = {6.47}>Chinese Yen</option>
            <option value = {.72}>British Pound</option>
        </select>
        <h4>to</h4>
        <select onChange ={translationNumberHandler2}>
            <option hidden = {true}>select</option>
            <option value = {1}>USD</option>
            <option value = {.85}>Euro</option>
            <option value = {3.88}>PLN</option>
            <option value = {6.47}>Chinese Yen</option>
            <option value = {.72}>British Pound</option>
        </select>
        <input type="number" value={numInputCurrency}  onChange = {handleChangeNum}/>
        <button onClick  = {numChangeHandler}>Convert</button>

    
    <h4>{numInputCurrency2}</h4>
    </form>
    )
    }

export default Currency;