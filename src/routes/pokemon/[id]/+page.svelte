<script lang="ts">
	let { data } = $props();
	let pokemon = $derived(data.pokemon);
</script>

<div class="container p-2">
	<div class="border rounded-lg bg-blue-200 gap-2 flex items-center p-2">
		<img
			alt={pokemon.name}
			src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`}
		/>
		<div class="uppercase text-semibold tracking-tight">
			{pokemon.name}
		</div>
	</div>
</div>
