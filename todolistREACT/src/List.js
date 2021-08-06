import React from 'react';
import Item from './Item';
import './App.css';

function List({setTodos, todos}) {
	return (
		<div className="list">
			<ul>{
				todos.map((todo, index) => <Item key={index} todos={todos} setTodos={setTodos} todo={todo}/>)
			}
			</ul>
		</div>
	);
}

export default List;
