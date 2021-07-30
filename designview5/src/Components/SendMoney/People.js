import React from 'react';
import './SendMoney.css'
import PeopleList from './PeopleList';

function People({ lastName, firstName, img }) {
    return (
        <div className="person">
            <img src={img} alt="" className="pfp2" />
            <p className="firstname">{firstName}</p>
            <p className="lastname">{lastName}</p>
        </div>
    )
}
export default People;