<script>
	import LoadingSpinner from "./LoadingSpinner.svelte";

	let imageUrl;
	let title;
	let description;
	let owner;

	let fetched = false;

	axios.get("https://astropark.herokuapp.com/apod").then((response) => {
		// console.log(response);
		imageUrl = response.data.url;
		title = response.data.title;
		description = response.data.explanation;
		owner = response.data.copyright;
		fetched = true;
	});
</script>

<div class="container">
	{#if !fetched}
		<LoadingSpinner />
	{:else}
		<div class="apod">
			<img src={imageUrl} alt={title} />
		</div>
		<div class="desc-container">
			<div class="card">
				<div class="title">{title}</div>
				<div class="desc">
					<p class="info">{description}</p>
					<br />
					<p class="owner">-{owner || "Unknown"}</p>
				</div>
			</div>
		</div>
	{/if}
</div>

<!-- <div class="footer" /> -->

<!-- <footer>
	Lorem, ipsum dolor sit amet consectetur adipisicing elit. Qui sunt nam
	obcaecati, beatae autem magnam ducimus accusantium repellat alias, cum quam
	quae, error ipsa sequi harum unde distinctio consequatur. Blanditiis.
</footer> -->
<style>
	.container {
		/* height: 79vh; */
		padding: 0 30px 30px;
		display: flex;
		flex-direction: column;
	}

	.apod {
		margin: auto;
		height: 76vh;
		width: 90%;
		/* position: relative; */
		/* box-shadow: 15px 15px var(--accent); */
	}

	img {
		width: 100%;
		max-height: 100%;
		object-fit: cover scale-down;
	}

	.desc-container {
		/* background-color: aqua; */
		width: 90%;
		margin: auto;
		/* padding: 30px 0; */
		/* position: relative;
		margin: auto;
		margin-top: 40px;
		height: 300px;
		width: 90%; */

		/* padding: 30px; */
		/* height: max-content; */
		/* background-color: blueviolet; */
		/* background-color: var(--secondary); */
	}

	.card {
		/* background-color: pink; */
		/* width: 90%;
		margin: auto;
		padding: 30px; */
	}

	.desc {
		/* background-color: blue; */
		padding: 30px;
		padding-top: 50px;

		background-color: var(--secondary);
		/* border: 3px solid var(--accent); */
		/* width: 100%;
		padding: 30px;
		padding-top: 50px;
		position: absolute;
		top: 30px;
		height: max-content;
		margin-bottom: 40px; */
	}

	.title {
		/* background-color: brown; */
		background-color: var(--accent);

		position: relative;
		top: 30px;
		left: 30px;
		font-size: 1.5em;
		width: fit-content;
		padding: 15px;
		text-transform: uppercase;

		/* position: absolute;
		left: 40px;
		padding: 15px;
		background-color: var(--accent);
		width: fit-content;

		text-transform: uppercase;
		font-size: 25px;
		font-weight: lighter;
		z-index: 1; */
	}

	p {
		margin-block-start: 0 !important;
		margin-block-end: 0 !important;
	}

	/* .footer {
		margin: 10px;
	} */
</style>
