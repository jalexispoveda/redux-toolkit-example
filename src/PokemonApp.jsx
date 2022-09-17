import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPokemons } from "./store/slices/pokemon";

export const PokemonApp = () => {
	//no importa la pieza de store, el dispatch siempre es el mismo
	const dispatch = useDispatch();
	const {
		isLoading,
		pokemons = [],
		page,
	} = useSelector(state => state.pokemons);
	const test = useSelector(state => state.pokemons);

	console.log(test);

	useEffect(() => {
		dispatch(getPokemons());
	}, []);

	//console.log(data);

	return (
		<>
			<h1>Pokemon App</h1>
			<hr></hr>
			<span>Loading: {isLoading ? "True" : "False"}</span>
			<ul>
				{pokemons?.map(pokemon => (
					<li key={pokemon.name}>{pokemon.name}</li>
				))}
			</ul>

			<button disabled={isLoading} onClick={() => dispatch(getPokemons(page))}>
				Next
			</button>
		</>
	);
};
