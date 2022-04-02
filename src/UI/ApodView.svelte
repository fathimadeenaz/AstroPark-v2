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

<!-- <div class="main">
    <div class="main-content">
        {#if !fetched}
            <LoadingSpinner />
        {:else}
            <img src={imageUrl} alt={title} />
            <div class="description">
                <span class="title">{title}</span>
                <p>{description}</p>
                <span class="owner">-{owner || "Unknown"}</span>
            </div>
        {/if}
    </div>
</div> -->
{#if !fetched}
	<LoadingSpinner />
{:else}
	<div class="container">
		<div class="apod">
			<img src={imageUrl} alt={title} />
			<div class="title">{title}</div>
		</div>
		<div class="desc">
			<p class="info">{description}</p>
			<p class="owner">-{owner || "Unknown"}</p>
		</div>
	</div>{/if}

<style>
	.container {
		height: 79vh;
		/* background-color: pink; */
		padding: 0 20px 20px;
		display: flex;
	}

	.apod {
		/* background-color: blue; */
		width: 70%;
		/* display: flex;
		justify-content: center; */
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
		/* background-color: yellowgreen; */
		padding: 0 20px;
		width: 30%;
	}

	.info {
		margin-block-start: 0 !important;
	}
	/* .main {
        position: absolute;
        top: 2.5rem;
        display: flex;
        margin-top: 30px;
        justify-content: center;
        align-items: bottom;
        height: 100vh;
        width: 100vw;
        overflow: hidden;
    }

    .main-content {
        width: 100%;
        height: 100%;
        position: relative;
    }

    .main-content img {
        vertical-align: middle;
        width: 100vw;
        height: 100vh;
    }
    .description {
        position: relative;
        bottom: 10%;
        width: 100vw;
        color: #fff;
        position: absolute;
        /* bottom: 10px; 
        padding: 0 15px 15px 15px;
        background-color: rgba(0, 0, 0, 0.5);
    }

    .description .title {
        font-size: 30px;
    } */
</style>
