<script>
	import Header from "./UI/Header.svelte";
	import Homepage from "./UI/Homepage.svelte";
	import ApodView from "./UI/ApodView.svelte";
	import SearchView from "./UI/SearchView.svelte";
	import SatelliteView from "./UI/SatelliteView.svelte";
	import AboutView from "./UI/AboutView.svelte";

	let path = 0;

	function setRoute(event) {
		path = event.detail;
	}
</script>

<Header on:select={setRoute} />

<main>
	{#if path === 0}
		<Homepage />
	{:else if path === 1}
		<ApodView />
	{:else if path === 2}
		<SearchView />
	{:else if path === 3}
		<SatelliteView />
	{:else if path === 4}
		<AboutView />
	{/if}
</main>
