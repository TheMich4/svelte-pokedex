<script lang="ts">
	import '../app.css';

	import { afterNavigate, beforeNavigate } from '$app/navigation';
	import { gsap } from 'gsap/dist/gsap';
	import { Flip } from 'gsap/dist/Flip';

	gsap.registerPlugin(Flip);

	let state: Flip.FlipState;

	beforeNavigate(() => {
		state = Flip.getState('.pokemon-card, .pokemon-card-name, .pokemon-card-sprite');
	});

	afterNavigate(() => {
		console.log('afterNavigate', state);
		state &&
			Flip.from(state, {
				targets: '.pokemon-card, .pokemon-card-name, .pokemon-card-sprite',
				duration: 0.3,
				scale: true,
				ease: 'ease-out'
			});
	});
</script>

<div class="flex flex-col justify-between">
	<slot />

	<div
		class="w-full h-10 bg-blue-400 sticky bottom-0 left-0 z-20 shadow-2xl shadown-black flex items-center justify-center"
	>
		<div class="w-[800px] p-2 font-semibold tracking-tight mt-auto">svelte-pokedex</div>
	</div>
</div>
