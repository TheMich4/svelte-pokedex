<script lang="ts">
	export let data;

	console.log({ data });
</script>

<div class="flex min-w-screen min-h-screen justify-center items-center bg-blue-300 p-8">
	<div class="container grid grid-cols-5 gap-4 max-w-[800px]">
		{#each data.pokemons as pokemon}
			<div
				class="border rounded-lg bg-blue-200/20 border-blue-200/80 gap-2 flex items-center p-4 flex-col justify-between"
			>
				<div class="uppercase font-semibold tracking-tight text-center text-nowrap">
					{pokemon.pokemon_species.name}
				</div>
				<div class="rounded-full bg-blue-200/80 w-24 h-24">
					<img
						src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`}
						alt={pokemon.pokemon_species.name}
					/>
				</div>
			</div>
		{/each}
	</div>
</div>
