import { MainClient } from 'pokenode-ts';

export async function load() {
	const api = new MainClient();

	const pokedexName = 'paldea';

	const { pokemon_entries } = await api.game.getPokedexByName(pokedexName);

	const pokemons = pokemon_entries.map((pokemon) => {
		const urlSplit = pokemon.pokemon_species.url.split('/');

		return {
			...pokemon,
			id: urlSplit[urlSplit.length - 2]
		};
	});

	return {
		pokedexName,
		pokemons
	};
}
