import React, {useState} from 'react';

function Currency({selectCurrency}) {

    const [generalTranslationNumber, setGeneralTranslationNumber] = useState();
    const [generalTranslationNumber2, setGeneralTranslationNumber2] = useState();
    
    const [numInputCurrency, setNumInputCurrency] = useState();
    const [numInputCurrency2, setNumInputCurrency2] = useState();



    const generalTranslationNumberHandler = ({target:{value}}) => {
        setGeneralTranslationNumber(value);
    }
    const generalTranslationNumberHandler2 = ({target:{value}}) => {
        setGeneralTranslationNumber2(value);
    }

    const handleChangeNum = ({target:{value}}) => {
        setNumInputCurrency(value);
    }

    const numChangeHandler = (event) => {
        event.preventDefault();
        return(
        setNumInputCurrency2(generalTranslationNumber2*numInputCurrency/generalTranslationNumber)
        );
        
    }

    return(
    <form hidden={!selectCurrency} >
        <h4>Convert</h4>
        <select onChange = {generalTranslationNumberHandler}>
            <option hidden = {true}>select</option>
            <option value = {1}>USD</option>
            <option value = {.85}>Euro</option>
            <option value = {3.88}>PLN</option>
            <option value = {6.47}>Chinese Yen</option>
            <option value = {.72}>British Pound</option>
        </select>
        <h4>to</h4>
        <select onChange ={generalTranslationNumberHandler2}>
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