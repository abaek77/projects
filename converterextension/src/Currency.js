import React, {useState} from 'react';

function Currency({selectCurrency}) {

    const USD = 1;
    const Euro = .85;
    const PLN = 3.88;
    const ChineseYen = 6.47;
    const BritishPound = 0.72;
    const [generalTranslationNumber, setGeneralTranslationNumber] = useState();
    const [generalTranslationNumber2, setGeneralTranslationNumber2] = useState();
    
    const [numInputCurrency, setNumInputCurrency] = useState(0);
    const [numInputCurrency2, setNumInputCurrency2] = useState(0);

    const handleChangeNum = ({target:{value}}) => {
        setNumInputCurrency(value);
    }

    const generalTranslationNumberHandler = ({target:{value}}) => {
        setGeneralTranslationNumber(value);
    }
    const generalTranslationNumberHandler2 = ({target:{value}}) => {
        setGeneralTranslationNumber2(value);
    }

    const numChangeHandler = (event) => {
        event.preventDefault();
        return(
        setNumInputCurrency2(generalTranslationNumber2*numInputCurrency/generalTranslationNumber)
        );
        
    }

    return(
    <form hidden={!selectCurrency} >
        <select onChange = {generalTranslationNumberHandler}>
            <option hidden = {true}>select</option>
            <option value = {USD}>USD</option>
            <option value = {Euro}>Euro</option>
            <option value = {PLN}>PLN</option>
            <option value = {ChineseYen}>Chinese Yen</option>
            <option value = {BritishPound}>British Pound</option>
        </select>
        <select onChange ={generalTranslationNumberHandler2}>
            <option hidden = {true}>select</option>
            <option value = {USD}>USD</option>
            <option value = {Euro}>Euro</option>
            <option value = {PLN}>PLN</option>
            <option value = {ChineseYen}>Chinese Yen</option>
            <option value = {BritishPound}>British Pound</option>
        </select>
        <input type="number" value={numInputCurrency} onChange = {handleChangeNum} />
        <button onClick  = {numChangeHandler}>Convert</button>

    
    <h4>{numInputCurrency2}</h4>
    </form>
    )
    }

export default Currency;