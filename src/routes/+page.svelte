<script lang="ts">
	import PokemonCard from '../lib/components/pokemon-card.svelte';

	export let data;
	export let caught = false;

	console.log({ data, caught });
</script>

<div class="flex min-w-screen min-h-screen justify-center items-center bg-blue-300 p-8">
	<div class="w-fit-content grid grid-cols-5 gap-4 max-w-[800px]">
		{#each data.pokemons as pokemon}
			<PokemonCard {pokemon} {caught} />
		{/each}
	</div>
</div>
