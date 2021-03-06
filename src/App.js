import React, { useState } from 'react'
import Form from './Form'

export default () => {
	const [ todos, setTodos ] = useState([])

	const toggleComplete = (i) =>
		setTodos(
			todos.map(
				(todo, k) =>
					k === i
						? {
								...todo,
								complete: !todo.complete
							}
						: todo
			)
		)

	
	return (
		<div>
			<Form
				onSubmit={(text) => {
					setTodos([ { text, complete: false }, ...todos ])
				}}
			/>
			<div>
				{todos.map(({ text, complete }, i) => (
					<div>
						<p key={text} onClick={ () => toggleComplete(i)} style={{
              textDecoration: complete ? 'line-through' : ''
            }}>{text}</p>
					</div>
				))}
			</div>
      <button onClick={() => setTodos([])}>Reset</button>
		</div>
	)
}
