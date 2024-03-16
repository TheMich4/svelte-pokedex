<script lang="ts">
	import PokemonCard from '../lib/components/pokemon-card.svelte';

	export let data;
	export let caught = false;

	console.log({ data, caught });
</script>

<div
	class="flex min-w-screen min-h-screen justify-center items-center bg-blue-300 p-4 flex-col gap-4 pb-18"
>
	<div
		class="flex justify-center items-center text-md py-2 px-4 uppercase rounded-md border cursor-pointer bg-blue-200/20 border-blue-200/80 min-w-48 font-bold tracking-tight text-xl"
	>
		{data.pokedexName}
	</div>

	<div
		class="w-fit-content grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 max-w-[800px]"
	>
		{#each data.pokemons as pokemon}
			<PokemonCard {pokemon} {caught} delay={10 * pokemon.entry_number} />
		{/each}
	</div>
</div>
