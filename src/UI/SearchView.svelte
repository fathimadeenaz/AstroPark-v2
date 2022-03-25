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
                filteredData = response.data.filter(e => e.links !== undefined);
                pageData = filteredData.slice(0, 8);
                fetched = true;
                // console.log(pageData);
            });
        }
    };
</script>

<div class="search">
    <div class="search-container">
        <input
            type="text"
            placeholder="Search.."
            on:input={(event) => (keyword = event.target.value)}
        />
        <button on:click={fetchData}><i class="fas fa-search" /></button>
        {#if !keywordValid}
            <p class="error">Please enter valid data!</p>
        {/if}
    </div>
</div>
<div class="search-results">
    {#if fetched && hasValidData}
        {#each pageData as element (element.href)}
            <SearchElement {element} />
        {/each}
    {:else if !hasValidData}
        <h2>No Data Found!</h2>
    {/if}
</div>

<style>
    .error {
        color: #FF4C29;
        display: flex;
        justify-content: center;
    }

    .search {
        display: flex;
        justify-content: center;
        align-items: center;
        position: relative;
        height: 20vh;
    }
    ::placeholder{
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
        background-color: #2C394B;
        border-radius: 30px 0px 0px 30px;
        box-shadow: 0 0 10px 0 #334756, 0 20px 25px 0 rgba(0, 0, 0, 0.1);

    }
    .search .search-container button {
        outline: none;
        padding: 7px 10px;
        margin: 0;
        background-color: #2C394B;
        border-radius: 0px 30px 30px 0px;
        color: #fff;
        font-size: 18px;
        border: none;
        cursor: pointer;
        box-shadow: 0 0 10px 0 #334756, 0 20px 25px 0 rgba(0, 0, 0, 0.1);
    }

    .search-results {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-wrap: wrap;
        width: 100vw;
    }
</style>
