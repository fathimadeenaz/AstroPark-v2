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
	<div class="apod">
		{#if !fetched}
			<LoadingSpinner />
		{:else}
			<img src={imageUrl} alt={title} />
			<div class="title">{title}</div>
		{/if}
	</div>
	<div class="desc">
		<p class="info">{description}</p>
		<p class="owner">-{owner || "Unknown"}</p>
	</div>
</div>

<style>
	.container {
		height: 79vh;
		padding: 0 20px 20px;
		display: flex;
	}

	.apod {
		width: 70%;
		position: relative;
	}

	img {
		width: 100%;
		max-height: 100%;
		object-fit: cover scale-down;
	}

	.title {
		padding: 10px;
		position: absolute;
		bottom: 0;
		right: 0;
		text-transform: capitalize;
		background-color: rgba(0, 0, 0, 0.5);
		font-size: 25px;
		font-weight: lighter;
	}
	.desc {
		padding: 0 20px;
		width: 30%;
	}

	.info {
		margin-block-start: 0 !important;
	}
</style>
