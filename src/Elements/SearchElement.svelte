<script>
	export let element;
	console.log(element);
	let title = element.data[0].title;
	let imageUrl = element.links[0].href;
	let description = element.data[0].description;
</script>

<div class="result">
	<div class="heading">{title}</div>
	<img src={imageUrl} alt={title} />
	<div class="desc ">
		{description}
	</div>
</div>

<style>
	.result {
		border-radius: 3px;
		border: transparent;
		min-height: 350px;
		height: max-content;
		width: 100%;
		margin: 0 auto 50px;
		position: relative;
		display: flex;
		flex-direction: column;
		background-color: var(--secondary);
		padding: 20px 30px;
	}

	.heading {
		text-transform: uppercase;
		font-size: larger;
		font-weight: 400;
	}
	.result img {
		height: 250px;
		width: 100%;
		object-fit: cover scale-down;
		margin: 20px 0;
	}

	.desc {
		word-wrap: break-word;
	}

	/* media queries */

	/* 460px and down */
	@media only screen and (max-width: 460px) {
		.result img {
			height: 60%;
		}
	}
</style>
