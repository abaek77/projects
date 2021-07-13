import React, {useState} from 'react';

function Distance({selectDistance}) {
    const [distances, setDistances] = useState([]);

    return(
    <form hidden={!selectDistance}>
        <select>
            <option hidden = {true}>select</option>
            <option>meters</option>
            <option>feet</option>
            <option>millimeters</option>
            <option>inches</option>
            <option>miles</option>
        </select>
        <input type="text" />
    </form>
    )
}

export default Distance;