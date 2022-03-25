<script>
    import { createEventDispatcher } from "svelte";

    const dispatch = createEventDispatcher();

    let selectedButton = 0;
</script>

<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link
    href="https://fonts.googleapis.com/css2?family=Mulish:wght@500&display=swap"
    rel="stylesheet"
/>
<nav class="navbar nav-row">
    <h2 class="navbar-logo">AstroPark</h2>
    <ul class="navbar-list">
        <li
            class:active={selectedButton === 0}
            on:click={() => {
                selectedButton = 0;
                dispatch("select", 0);
            }}
        >
            Home
        </li>
        <li
            class:active={selectedButton === 1}
            on:click={() => {
                selectedButton = 0;
                dispatch("select", 1);
            }}
        >
            Library
        </li>
        <li
            class:active={selectedButton === 2}
            on:click={() => {
                selectedButton = 0;
                dispatch("select", 2);
            }}
        >
            LIR
        </li>
        <li
            class:active={selectedButton === 3}
            on:click={() => {
                selectedButton = 0;
                dispatch("select", 3);
            }}
        >
            About
        </li>
    </ul>
</nav>

<style>
    nav {
        display: flex;
        justify-content: space-between;
        align-items: center;
        text-align: center;
        background-color: solid #2C394B;
        color: #a1a1a1;
    }
    .nav-row{
        background-color: #082032;
        box-shadow: 0 8px 18px 2px #061928;
    }
    nav ul {
        list-style-type: none;
        display: flex;
        margin: 0 15px 2px;
        height: 100%;
    }

    nav ul li {
        height: 100%;
        margin: 0px 10px 3px;
        padding: 15px 0px;
        font-size: 22px;
    }

    nav ul li:hover {
        color: #ffffff;
        cursor: pointer;
        transform: scale(110%);
    }

    nav h2 {
        padding: 0 15px;
        margin-top: 10px;
    }
</style>
