<script lang="ts">
	import type { PokemonEntry } from 'pokenode-ts';

	export let pokemon: PokemonEntry & { id: string };
	export let caught: boolean;
</script>

<div
	class="pokemon-card border rounded-lg bg-blue-200/20 gap-2 flex items-center p-2 pb-3 flex-col justify-between cursor-pointer w-36 {caught
		? 'border-blue-800/80'
		: 'border-blue-200/80'}"
>
	<div class="label uppercase font-bold tracking-tighter text-center text-nowrap">
		{pokemon.pokemon_species.name}
	</div>
	<div class="circle rounded-full bg-blue-200/80 border-2 border-blue-200/80">
		<img
			alt={pokemon.pokemon_species.name}
			class="sprite relative top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-20 h-20 align-middle z-10"
			src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`}
		/>
	</div>
	{#if caught}
		<div class="absolute w-5 h-5 bottom-1 right-1">
			<img src="/pokeball.png" alt="Caught" />
		</div>
	{/if}
</div>

<style lang="postcss">
	.pokemon-card {
		transition: transform 0.2s ease-in-out;
	}

	.pokemon-card:hover .label {
	}

	.sprite {
		@apply transition-all ease-in duration-200 delay-75;
	}

	.pokemon-card:hover .sprite {
		@apply transform scale-150;
	}

	.pokemon-card:hover .circle::before {
		@apply border-t-blue-400 border-r-blue-400 border-b-blue-400;

		transition:
			border-top-color 0.15s linear,
			border-right-color 0.15s linear 0.1s,
			border-bottom-color 0.15s linear 0.2s;
	}

	.pokemon-card:hover .circle::after {
		@apply border-t-blue-400 border-t-2;
		/* border-top: 2px solid; */
		border-left-width: 2px;
		border-right-width: 2px;
		transform: rotate(270deg);
		transition:
			transform 0.4s linear 0s,
			border-left-width 0s linear 0.35s;
	}

	.circle {
		@apply transition-colors duration-150;
		box-shadow: none;
		color: red;
		font-size: inherit;
		font-weight: 700;
		/* transform: rotate(-45deg); */
	}

	.circle::before {
		border: 2px solid transparent;
	}

	.circle::after {
		border: 0 solid transparent;
	}

	.circle::before,
	.circle::after {
		box-sizing: inherit;
		content: '';
		position: absolute;
		width: 100%;
		height: 100%;
		border-radius: 100%;
		top: 0;
		left: 0;
	}

	.pokemon-card:hover .circle {
		@apply bg-inherit border-blue-200;
	}
	img {
		pointer-events: none;
		cursor: pointer;
		-webkit-user-drag: none;
		-khtml-user-drag: none;
		-moz-user-drag: none;
		-o-user-drag: none;
		user-drag: none;
	}
</style>
