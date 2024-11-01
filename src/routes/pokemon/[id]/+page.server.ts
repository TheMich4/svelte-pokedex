import { MainClient } from 'pokenode-ts';

export async function load({ params }) {
	const { id } = params;

	const api = new MainClient();
	const pokemon = await api.pokemon.getPokemonById(id);

	return {
		id,
		pokemon
	};
}
