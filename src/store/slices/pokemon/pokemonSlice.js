import { createSlice } from "@reduxjs/toolkit";

export const pokemonSlice = createSlice({
	name: "pokemon",
	initialState: {
		page: 0,
		pokemons: [],
		isLoading: false,
	},
	reducers: {
		startLoadingPokemons: state => {
			state.isLoading = true;
		},
		//Esto se carga desde el thunk porque es una peticion http
		setPokemons: (state, action) => {
			console.log("slice");
			// console.log(state);
			// console.log(action);
			state.isLoading = false;
			state.page = action.payload.page;
			state.pokemons = action.payload.pokemons;
		},
	},
});

// Action creators are generated for each case reducer function
export const { startLoadingPokemons, setPokemons } = pokemonSlice.actions;
