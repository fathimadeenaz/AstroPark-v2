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

<div class="main">
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
</div>

<style>
    .main {
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
        /* bottom: 10px; */
        padding: 0 15px 15px 15px;
        background-color: rgba(0, 0, 0, 0.5);
    }

    .description .title {
        font-size: 30px;
    }
</style>
