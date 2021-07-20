import React from 'react'

function Component (props) {
return(
<div className="component"><p className="title">{props.title}</p>
<p className="category-title">Category</p>
<p className="category">{props.category}</p>
<img src="https://static.thenounproject.com/png/160062-200.png" alt="peopleicon" />
<p className="people">{props.people}</p></div>


)
}

export default Component;