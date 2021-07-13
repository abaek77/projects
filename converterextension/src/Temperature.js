import React, {useState} from 'react';

function Temperature({selectTemperature}) {
    const [temperatures, setTemperatures] = useState([]);
    return(
    <form hidden={!selectTemperature}>
        <select>
            <option hidden = {true}>select</option>
            <option>Fahrenheit</option>
            <option>Celsius</option>
            <option>Kelvin</option>
            <option>Rankine</option>
            <option>Réaumur</option>
        </select>
    </form>
    )
}

export default Temperature;