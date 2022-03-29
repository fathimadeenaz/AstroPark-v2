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

<!-- <div class="search">
	<div class="search-container">
		<input
			type="text"
			placeholder="Enter a valid search term.."
			on:input={(event) => (keyword = event.target.value)}
		/>
		<button on:click={fetchData}><i class="fas fa-search" /></button>
		{#if !keywordValid}
			<p class="error">Please enter valid data!</p>
		{/if}
	</div>
</div> -->

<div class="search-container">
	<div class="search" action="">
		<input
			type="text"
			placeholder="Search for a valid term"
			on:input={(event) => (keyword = event.target.value)}
		/>
		<button on:click={fetchData}><i class="fas fa-search" /></button>
	</div>
	<!-- {#if !keywordValid}
			<span class="error">Enter valid data!</span>
		{/if} -->
</div>

<!-------------------------- search element redesigning tbd -------------------------->

<!-- <div class="search-results">
	{#if fetched && hasValidData}
		{#each pageData as element (element.href)}
			<SearchElement {element} />
		{/each}
	{:else if !hasValidData}
		<h2>No Data Found!</h2>
	{/if}
</div> -->
<style>
	/* .error {
		color: #ff4c29;
		display: flex;
		justify-content: center;
	} */

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
		/* padding: 10px 5px; */
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
		/* background: transparent; */
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

	/* .search {
		display: flex;
		justify-content: center;
		align-items: center;
		position: relative;
		height: 20vh;
	}
	::placeholder {
		color: #fff;
		opacity: 0.3;
	}
	.search .search-container input {
		outline: none;
		padding: 7px 10px;
		margin: 0;
		font-size: 18px;
		border: none;
		color: #fff;
		background-color: #2c394b;
		border-radius: 30px 0px 0px 30px;
		box-shadow: 0 0 10px 0 #334756, 0 20px 25px 0 rgba(0, 0, 0, 0.1);
	}
	.search .search-container button {
		outline: none;
		padding: 7px 10px;
		margin: 0;
		background-color: #2c394b;
		border-radius: 0px 30px 30px 0px;
		color: #fff;
		font-size: 18px;
		border: none;
		cursor: pointer;
		box-shadow: 0 0 10px 0 #334756, 0 20px 25px 0 rgba(0, 0, 0, 0.1);
	} */

	.search-results {
		margin-top: 10px;
		display: flex;
		align-items: center;
		justify-content: center;
		flex-wrap: wrap;
		/* width: 100vw; */
	}
</style>
