import React from 'react';
import List from './list';

function Item({task}){
    return(
        <div className="item">
        <li>{task}</li>
        <li>sdlkfjsdklfj</li>
        <button>X</button>
    </div>
    );

};

export default Item;