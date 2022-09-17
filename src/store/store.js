import { configureStore } from "@reduxjs/toolkit";
import { todosApi } from "./apis/todosApi";
import { counterSlice } from "./slices/counter/counterSlice";
import { pokemonSlice } from "./slices/pokemon";

export const store = configureStore({
	reducer: {
		counter: counterSlice.reducer,
		pokemons: pokemonSlice.reducer,
		// #RTK
		//Se usan llaves cuadradas para decir que es una propiedad computada
		//todosApi creado con RTK
		[todosApi.reducerPath]: todosApi.reducer,
	},
	middleware: getDefaultMiddleware =>
		getDefaultMiddleware().concat(todosApi.middleware),
});
