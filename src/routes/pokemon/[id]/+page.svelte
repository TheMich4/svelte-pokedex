<script lang="ts">
	let { data } = $props();
	let pokemon = $derived(data.pokemon);
</script>

<div class="container p-2">
	<div
		class="pokemon-card border rounded-lg bg-blue-200 gap-2 flex items-center p-2"
		data-flip-id="pokemon-card-{pokemon.id}"
	>
		<img
			alt={pokemon.name}
			src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`}
			data-flip-id="pokemon-card-sprite-{pokemon.id}"
		/>
		<div
			class="pokemon-card-name uppercase text-semibold tracking-tight"
			data-flip-id="pokemon-card-name-{pokemon.id}"
		>
			{pokemon.name}
		</div>
	</div>
</div>
