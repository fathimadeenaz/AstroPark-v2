<script>
	export let element;
	console.log(element);
	let title = element.data[0].title;
	let imageUrl = element.links[0].href;
	let description = element.data[0].description;
</script>

<!-- <div class="result">
	<img src={imageUrl} alt={title} />
	<h3>{title}</h3>
	<p class="desc">{description}</p>
</div> -->

<div class="result">
	<div class="heading">{title}</div>
	<img src={imageUrl} alt={title} />
	<div class="desc ">
		{description}
	</div>
</div>

<style>
	/* temporary styles */

	.result {
		border-radius: 3px;
		border: transparent;
		min-height: 350px;
		height: max-content;
		width: 570px;
		/* min-height: min-content; */
		margin: 0 30px 50px;
		position: relative;
		display: flex;
		flex-direction: column;
		background-color: var(--secondary);
		padding: 20px 30px;

		/* word-wrap: break-word; */
		/* border: 2px solid white;
		border-radius: 5px;
		overflow: ; */
		/* box-shadow: 0 0 100px 0 #334756, 0 20px 25px 0 rgba(0, 0, 0, 0.99); */
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
	/* .result {
		height: 300px;
		width: 400px;
		margin: 30px;
		position: relative;
		border: 2px solid white;
		border-radius: 5px;
		overflow: hidden;
		/* box-shadow: 0 0 100px 0 #334756, 0 20px 25px 0 rgba(0, 0, 0, 0.99);
	}

	.result img {
		height: 100%;
		width: 100%;
	}

	.result h3 {
		font-size: 22px;
		position: absolute;
		bottom: -5%;
		color: #fff;
		padding: 0 15px 15px 15px;
		background-color: rgba(0, 0, 0, 0.5);
		width: 100%;
	}

	.result:hover .desc {
		transform: translateY(0);
	}

	.desc {
		font-size: 18px;
		background-color: #334756;
		padding: 2rem;
		position: absolute;
		left: 0;
		bottom: 0;
		right: 0;
		max-height: 100%;
		transform: translateY(101%);
		overflow-y: auto;
		transition: transform 0.3s ease-in;
		/*box-shadow: 0 0 50px 0 #334756, 0 20px 25px 0 rgba(0, 0, 0, 0.5);
	}

	p {
		color: #fff;
	} */
</style>
