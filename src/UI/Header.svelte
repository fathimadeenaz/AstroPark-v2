<script>
	import { createEventDispatcher } from "svelte";

	const dispatch = createEventDispatcher();

	let selectedButton = 0;
</script>

<nav class="navbar nav-row">
	<ul class="navbar-list">
		<li
			class:active={selectedButton === 0}
			on:click={() => {
				selectedButton = 0;
				dispatch("select", 1);
			}}
		>
			<div>apod</div>
		</li>

		<li
			class:active={selectedButton === 1}
			on:click={() => {
				selectedButton = 0;
				dispatch("select", 2);
			}}
		>
			<div>lib</div>
		</li>
	</ul>

	<!-- svelte-ignore a11y-missing-attribute -->
	<!-- svelte-ignore a11y-invalid-attribute -->
	<a href="#"
		><img
			on:click={() => {
				selectedButton = 0;
				dispatch("select", 0);
			}}
			src="./Images/AP.png"
		/></a
	>

	<ul>
		<li
			class:active={selectedButton === 2}
			on:click={() => {
				selectedButton = 0;
				dispatch("select", 3);
			}}
		>
			<div>lir</div>
		</li>

		<li
			class:active={selectedButton === 3}
			on:click={() => {
				selectedButton = 0;
				dispatch("select", 4);
			}}
		>
			<div>about</div>
		</li>
	</ul>
</nav>

<style>
	nav {
		z-index: 3;
		display: flex;
		justify-content: center;
		align-items: center;
		text-align: center;
		color: var(--text);
		margin-top: -1em !important;
	}

	img {
		max-width: 90px;
	}
	nav ul {
		list-style-type: none;
		display: flex;
		margin: 0 15px 2px;
		height: 100%;
		padding-inline-start: 0px !important;
	}

	nav ul li {
		height: 100%;
		margin: 0px 20px;
		padding: 45px 0px;
		font-size: 22px;
		text-transform: uppercase;
	}

	nav ul li div {
		font-family: var(--heading);
		display: inline-block;
		position: relative;
		letter-spacing: 0.1em;
		padding: 10px 0px;
	}

	nav ul li div:after {
		background: none repeat scroll 0 0 transparent;
		bottom: 0;
		content: "";
		display: block;
		height: 2px;
		left: 50%;
		position: absolute;
		background: #fff;
		transition: width 0.3s ease 0s, left 0.3s ease 0s;
		width: 0;
	}

	nav ul li div:hover {
		cursor: pointer;
	}

	nav ul li div:hover:after {
		width: 100%;
		left: 0;
	}
</style>
