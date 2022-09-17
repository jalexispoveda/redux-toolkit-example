import { pokemonApi } from "../../../api/pokemonApi";
import { setPokemons, startLoadingPokemons } from "./pokemonSlice";

//Funcion que ejecuta algo async y luego llama un metodo del reducer ene l slice
export const getPokemons = (page = 0) => {
	//const url = `https://pokeapi.co/api/v2/pokemon?limit=10&offset=${page * 10}`;

	//getState se puede llamar para obtener todo el rootState
	return async (dispatch, getState) => {
		dispatch(startLoadingPokemons());

		//TODO: realizar peticion http
		// const response = await fetch(url);
		// const data = await response.json();
		const { data } = await pokemonApi.get(
			`/pokemon?limit=10&offset=${page * 10}`
		);
		dispatch(setPokemons({ pokemons: data.results, page: page + 1 }));
	};
};
