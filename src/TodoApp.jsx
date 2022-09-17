import React, { useState } from "react";
import { useGetTodoByIdQuery, useGetTodosQuery } from "./store/apis/todosApi";

export const TodoApp = () => {
	//const { data: todos = [], isLoading } = useGetTodosQuery();
	const [id, setId] = useState(1);

	const { data, isLoading } = useGetTodoByIdQuery(id);

	return (
		<>
			<h1>Todos - RTK Query</h1>
			<hr></hr>
			<h4>isLoading : {isLoading ? "True" : "False"}</h4>
			<pre>...</pre>
			<h1>{JSON.stringify(data)}</h1>
			<button
				disabled={id === 1}
				className="btn btn-primary"
				onClick={() => setId(id - 1)}
			>
				Prev todo
			</button>
			<button className="btn btn-primary" onClick={() => setId(id + 1)}>
				Next todo
			</button>

			{/* <ul>
				{todos.map(todo => (
					<li key={todo.id}>
						<strong>{todo.completed ? "DONE" : "Pending"}</strong>
						{todo.title}
					</li>
				))}
			</ul> */}
		</>
	);
};
