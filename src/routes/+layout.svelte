<script>
	import '../app.css';
</script>

<div class="h-full flex flex-col justify-between">
	<slot />

	<div
		class="w-full h-10 bg-blue-400 sticky bottom-0 left-0 z-20 shadow-2xl shadown-black flex items-center justify-center"
	>
		<div class="w-[800px] p-2 font-semibold tracking-tight mt-auto">svelte-pokedex</div>
	</div>
</div>
