import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Define a service using a base URL and expected endpoints
export const todosApi = createApi({
	reducerPath: "todos",
	baseQuery: fetchBaseQuery({
		baseUrl: "https://jsonplaceholder.typicode.com",
	}),
	//mis endpoints
	endpoints: builder => ({
		getTodos: builder.query({
			query: () => "/todos",
		}),
		getTodoById: builder.query({
			query: id => `/todos/${id}`,
		}),
	}),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints

//Si es un get se pone use{nombreFuncion}Query
export const { useGetTodosQuery, useGetTodoByIdQuery } = todosApi;
