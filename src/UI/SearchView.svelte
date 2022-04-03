<script>
	import SearchElement from "../Elements/SearchElement.svelte";
	import { isEmpty } from "../helpers/validation.js";

	const baseUrl = "https://astropark.herokuapp.com/search?q=";
	let url;
	let filteredData;
	let pageData;
	let fetched = false;
	let hasValidData = true;

	let keyword = "";

	$: keywordValid = !isEmpty(keyword);
	$: hasValidData = filteredData != 0;
	// $: console.log(keyword);

	const fetchData = () => {
		if (keywordValid) {
			url = baseUrl + keyword.trim();
			axios.get(url).then((response) => {
				filteredData = response.data.filter(
					(e) => e.links !== undefined
				);
				pageData = filteredData.slice(0, 8);
				fetched = true;
				// console.log(pageData);
			});
		}
	};
</script>

<div class="search-container">
	<div class="search" action="">
		<input
			type="text"
			placeholder="Search for a valid term"
			on:input={(event) => (keyword = event.target.value)}
		/>
		<button on:click={fetchData}><i class="fas fa-search" /></button>
	</div>
</div>

<div class="search-results">
	{#if fetched && hasValidData}
		{#each pageData as element (element.href)}
			<SearchElement {element} />
		{/each}
	{:else if !hasValidData}
		<div class="error">No Data Found!</div>
	{/if}
</div>

<style>
	.search {
		width: 45vw;
		height: 40px;
		margin: 0 auto;
		background: var(--secondary);
		border-radius: 3px;
		border: transparent;
		display: flex;
		justify-content: center;
		align-items: center;
	}
	.search input {
		margin-left: 10px;
		width: 90%;
		height: 100%;
		color: var(--text);
		border: 0;
		background: transparent;
		border-radius: 3px 0 0 3px;
	}

	.search input:focus {
		outline: 0;
	}

	.fas {
		color: var(--text);
	}

	button {
		border: 0;
		padding: 0;
		cursor: pointer;
		height: 100%;
		width: 10%;
		background: var(--accent);

		border-radius: 0 3px 3px 0;
	}

	button:hover {
		background: var(--accent);
	}

	button:active {
		background: var(--accent);
	}
	button:focus {
		outline: 0;
	}

	.search-results {
		margin-top: 50px;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		flex-wrap: wrap;
	}
</style>
