import React, {useState} from 'react';

function Form () {
    
    const [unit, setUnit] = useState("____");
    var [numInput, setNumInput] = useState(1);
    var [numInput2, setNumInput2] = useState();
    var [buttonLockFeature, setButtonLockFeature] = useState(false);
    var [unit2, setUnit2] = useState("____")

    function handleChangeUnit(event){
        setUnit(event.target.value);
        console.log(event.target.value);
        setButtonLockFeature(false);
        setUnit2("____");
        setNumInput2();
    }

    function handleChangeNum (event){
        setNumInput(event.target.value);
        console.log(event.target.value);
        setButtonLockFeature(false);
    }

    function numHandler (event){
        event.preventDefault();
        setButtonLockFeature(true);
    
        switch(unit){
            case "USD":
                setNumInput2(numInput*3.829386);
                setUnit2("PLN");
                break;
            case "miles":
                setNumInput2(numInput*1.60934);
                setUnit2("kilometers");
                break;
            case "Fahrenheit":
                setNumInput2((numInput-32)/1.8)
                setUnit2("Celcius");
                break;
            case "select":
                alert("Select a unit");
                setButtonLockFeature(false);
        }
    }

    return(
        <form>
            <select value = {unit} onChange={ handleChangeUnit}>
                <option >select</option>
                <option >miles</option>
                <option >USD</option>
                <option >Fahrenheit</option>
            </select>
            <input type="number" value={numInput} onChange={handleChangeNum}/>
            <button onClick={numHandler} disabled = {buttonLockFeature}>Convert</button>
            <h4>Converted value from {unit} to {unit2}</h4>
            <p>{numInput2} {unit2}</p>
        </form>
    );
}

export default Form;
