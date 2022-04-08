<script>
	import { createEventDispatcher } from "svelte";

	const dispatch = createEventDispatcher();

	let selectedButton = 0;

	let toggleButton;
	let navbarLinks;

	let changeColor = false;

	let showNavbar = false;

	let makeSolid = false;

	let removeMargin = true;

	$: console.log(makeSolid);
	$: console.log(removeMargin);

	$: console.log(toggleButton);
	$: console.log(navbarLinks);

	const toggleClickHandler = () => {
		showNavbar = !showNavbar;
		changeColor = !changeColor;
	};
</script>

<nav
	class="navbar {changeColor ? 'active' : ''} {makeSolid
		? 'makeSolid'
		: ''} {removeMargin ? 'removeMargin' : ''}"
>
	<a
		href="#"
		class="toggle-button"
		bind:this={toggleButton}
		on:click={toggleClickHandler}
	>
		<img src="./Images/AP.png" />
	</a>
	<div
		class="navbar-links {showNavbar ? 'active' : ''}"
		bind:this={navbarLinks}
	>
		<ul class="navbar-list">
			<li
				class="home"
				on:click={() => {
					selectedButton = 0;
					dispatch("select", 0);
					makeSolid = false;
					removeMargin = true;
				}}
			>
				<div>home</div>
			</li>
			<li
				class:active={selectedButton === 0}
				on:click={() => {
					selectedButton = 0;
					dispatch("select", 1);
					makeSolid = true;
					removeMargin = false;
				}}
			>
				<div>apod</div>
			</li>

			<li
				class:active={selectedButton === 1}
				on:click={() => {
					selectedButton = 0;
					dispatch("select", 2);
					removeMargin = false;
					makeSolid = true;
				}}
			>
				<div>lib</div>
			</li>

			<!-- svelte-ignore a11y-missing-attribute -->
			<!-- svelte-ignore a11y-invalid-attribute -->
			<li
				class="logo"
				on:click={() => {
					selectedButton = 0;
					dispatch("select", 0);
				}}
			>
				<img src="./Images/AP.png" />
			</li>

			<li
				class:active={selectedButton === 2}
				on:click={() => {
					selectedButton = 0;
					dispatch("select", 3);
					removeMargin = false;
					makeSolid = true;
				}}
			>
				<div>lir</div>
			</li>

			<li
				class:active={selectedButton === 3}
				on:click={() => {
					selectedButton = 0;
					dispatch("select", 4);
					removeMargin = false;
					makeSolid = true;
				}}
			>
				<div id="about">about</div>
			</li>
		</ul>
	</div>
</nav>

<style>
	nav {
		position: sticky;
		top: 0;
		width: 100%;
		/* position: relative; */
		/* background-color: red; */
		margin-bottom: 40px;
		/* padding-top: 10px; */
		/* padding: auto; */
		/* position: relative; */

		z-index: 3;
		display: flex;
		justify-content: center;
		align-items: center;
		text-align: center;
		color: var(--text);
		/* margin-top: -1em !important; */
		/* height: 60px; */
	}

	img {
		max-width: 70px;
		object-fit: cover scale-down;
	}

	.navbar-links {
		height: 100%;
	}
	nav ul {
		/* background-color: blue; */

		list-style-type: none;
		display: flex;
		align-items: center;
		margin: 0 15px 2px;
		height: 100%;
		padding-inline-start: 0px !important;
	}

	nav ul li {
		/* background-color: yellowgreen; */
		height: 100%;
		margin: 0px 15px;
		padding: auto;
		font-size: 17px;
		text-transform: uppercase;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	nav ul li div {
		/* background-color: orange; */
		font-family: var(--heading);
		display: inline-block;
		position: relative;
		letter-spacing: 0.1em;
		padding: 10px 0px;
		width: 40px;
	}

	nav ul li div:after {
		background: none repeat scroll 0 0 transparent;
		bottom: 0;
		content: "";
		display: block;
		height: 2px;
		left: 50%;
		position: absolute;
		background: var(--text);
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

	.toggle-button {
		/* position: absolute;
		top: 0.75rem;
		right: 1rem; */
		display: none;
		/* flex-direction: column;
		justify-content: center;
		align-items: center;
		width: 30px;
		height: 21px; */
	}
	.home {
		display: none;
	}

	nav.removeMargin {
		margin-bottom: 0 !important;
	}
	.navbar.makeSolid {
		background-color: var(--primary);
	}

	/* media queries */

	/* Extra small devices (phones, 600px and down) */
	@media (max-width: 600px) {
		.navbar {
			flex-direction: column;
		}

		.navbar.active {
			/* backdrop-filter: blur(5px) !important; */
			background-color: rgba(10, 10, 22, 0.9);
		}

		.toggle-button {
			display: flex;
		}
		.navbar-links {
			display: none;
			width: 100%;

			/* overflow: hidden; */
		}
		.navbar-links ul {
			position: fixed;
			height: calc(100vh - 70px);

			/* height: calc(100vh - 70px);
			min-height: calc(100vh - 70px); */
			width: 100%;
			flex-direction: column;
			/* margin: auto; */
			align-items: center;
			justify-content: center;
			padding: 10px !important;

			margin: 0;

			background-color: rgba(10, 10, 22, 0.9);
			/* backdrop-filter: blur(5px) !important; */
		}
		.navbar-links ul li {
			display: flex;
			align-items: center;
			justify-content: center;
			text-align: center;
			width: 100%;
			padding: 0;
			height: auto;
			margin: 0;
		}
		.navbar-links ul li div {
			width: 50%;
			/* padding: auto; */
			height: 50px;

			/* margin: 0; */
			/* margin-bottom: 12px; */
			/* height: 100%; */
			display: flex;
			align-items: center;
			justify-content: center;
			border-bottom: 1px solid var(--border);
		}
		.navbar-links.active {
			display: flex;
		}
		.navbar-links ul li:nth-child(4) {
			display: none;
		}
		#about {
			border-bottom: 0;
		}
		.home {
			display: block;
		}
		nav ul li div:hover:after {
			width: 0;
			left: 0;
		}
	}
</style>
