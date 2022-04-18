<script>
	import { isEmpty } from "../helpers/validation.js";

	import LoadingSpinnerSatellite from "./LoadingSpinnerSat.svelte";

	let latitude = "";
	let longitude = "";
	let rDate = "";
	let pDate = "";

	const baseUrl = "https://astropark.herokuapp.com/satellite?";
	let recentUrl, pastUrl;

	let isLoading1 = false;
	let isLoading2 = false;

	let isFormValid = false;
	let showImages = false;

	let pastImageDiv;
	let recentImageDiv;

	$: latitudeValid = !isEmpty(latitude);
	$: longitudevalid = !isEmpty(longitude);
	$: rDatevalid = !isEmpty(rDate);
	$: pDatevalid = !isEmpty(pDate);
	$: isFormValid =
		latitudeValid && longitudevalid && rDatevalid && pDatevalid;

	function onKeyDown(e) {
		if (e.key !== "Enter") return;
		const current = document.activeElement;
		const items = [...document.getElementsByClassName("form-field")];
		const currentIndex = items.indexOf(current);
		let newIndex;
		if (currentIndex === -1) {
			newIndex = 0;
		} else {
			if (e.key === "Enter") {
				newIndex = (currentIndex + 1) % items.length;
				// console.log(newIndex);
				if (newIndex === 4) {
					// console.log("search pressed");
					return submitForm();
				}
			}
		}
		current.blur();
		items[newIndex].focus();
	}

	const submitForm = () => {
		if (isFormValid) {
			recentUrl = `${baseUrl}latitude=${latitude}&longitude=${longitude}&date=${rDate}`;
			pastUrl = `${baseUrl}latitude=${latitude}&longitude=${longitude}&date=${pDate}`;
			showImages = true;
			isLoading1 = true;
			isLoading2 = true;

			let pastImage = new Image();
			pastImage.src = pastUrl;
			pastImage.onload = function () {
				isLoading1 = false;
				if (!pastImageDiv.querySelector("img")) {
					pastImageDiv.appendChild(pastImage);
				} else {
					const oldImg1 = pastImageDiv.querySelector("img");
					oldImg1.parentNode.replaceChild(pastImage, oldImg1);
				}
			};

			let recentImage = new Image();
			recentImage.src = recentUrl;
			recentImage.onload = function () {
				isLoading2 = false;
				if (!recentImageDiv.querySelector("img")) {
					recentImageDiv.appendChild(recentImage);
				} else {
					const oldImg2 = recentImageDiv.querySelector("img");
					oldImg2.parentNode.replaceChild(recentImage, oldImg2);
				}
			};
		}
	};
</script>

<div class="sat-view-container">
	<div class="search-container">
		<div class="field-container lat">
			<input
				type="Number"
				id="latitude"
				class="latitude form-field"
				on:input={(event) => (latitude = event.target.value)}
				placeholder="Latitude"
			/>
		</div>
		<div class="field-container long">
			<input
				type="Number"
				class="Longitude form-field"
				id="longitude"
				on:input={(event) => (longitude = event.target.value)}
				placeholder="Longitude"
			/>
		</div>
		<div class="field-container past">
			<input
				type="text"
				class="form-field"
				id="past-date"
				placeholder="Past date"
				onfocus="(this.type='date')"
				on:input={(event) => (pDate = event.target.value)}
			/>
		</div>
		<div class="field-container pres">
			<input
				type="text"
				class="form-field"
				id="present-date"
				placeholder="Recent date"
				onfocus="(this.type='date')"
				on:input={(event) => (rDate = event.target.value)}
			/>
		</div>
		<div class="field-container btn">
			<button
				class="btn-search form-field"
				on:click={submitForm}
				type="button">search</button
			>
		</div>
	</div>

	<div class="compare-results">
		<div class="results">
			{#if showImages}
				<div class="past-result" bind:this={pastImageDiv}>
					{#if isLoading1}
						<LoadingSpinnerSatellite />
					{/if}
					<div class="date">Date: {pDate}</div>
				</div>
				<div class="recent-result" bind:this={recentImageDiv}>
					{#if isLoading2}
						<LoadingSpinnerSatellite />
					{/if}
					<div class="date">Date: {rDate}</div>
				</div>
			{/if}
		</div>
	</div>
</div>

<svelte:window on:keypress={onKeyDown} />

<style>
	.sat-view-container {
		width: 857px;
		height: fit-content;
		margin: auto;
		display: flex;
		flex-direction: column;
		/* justify-content: center; */
		align-items: center;
		/* background-color: aqua; */
	}
	.compare-results {
		/* background-color: violet; */
		margin: auto;
		margin-top: 35px;
		/* padding-left: 10px; */
		width: 100%;
		height: 50%;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}

	.results {
		display: flex;
		height: 100%;
		width: 100%;
		justify-content: center;
		align-items: center;
	}
	.past-result,
	.recent-result {
		border-radius: 3px;
		border: transparent;
		width: 300px;
		/* height: 300px; */
		margin: 20px;
		text-align: center;
		background-color: var(--secondary);
		position: relative;
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.date {
		position: absolute;
		text-align: center;
		bottom: 0;
		width: 100%;
		padding: 10px;
		background-color: rgba(0, 0, 0, 0.5);
		color: var(--text);
	}

	.search-container {
		/* background-color: royalblue; */
		width: 100%;
		height: fit-content;
		margin: 0 auto;
		border-radius: 3px;
		border: transparent;
		display: flex;
		justify-content: center;
		align-items: center;
		padding: 0 5px 15px 15px;
	}

	.field-container {
		width: 20%;
		height: 40px;
		margin: auto;
		margin-right: 10px;
	}

	input,
	button {
		border-radius: 3px;
		border: transparent;
		background-color: var(--secondary);
		padding-left: 10px;
		margin-left: 10px;
		width: 100%;
		height: 100%;
		color: var(--text);
		border: 0;
		text-transform: capitalize;
	}

	input:first-child {
		margin-left: 0;
	}

	.field-container button {
		cursor: pointer;
		padding-left: 0;
		text-transform: uppercase;
		background-color: var(--accent);
		margin-left: 0;
	}

	input:focus,
	button:focus {
		outline: 0;
	}

	input::-webkit-outer-spin-button,
	input::-webkit-inner-spin-button {
		-webkit-appearance: none;
		margin: 0;
	}

	::-webkit-calendar-picker-indicator {
		filter: invert(99%) sepia(10%) saturate(500%) hue-rotate(155deg);
		margin-right: 5px;
	}

	/* media queries */

	/* 1000px and down */
	@media only screen and (max-width: 1000px) {
		.sat-view-container {
			/* max-width: none;
			width: 80%; */
			width: 80vw;
		}
	}

	/* 880px and down */
	@media only screen and (max-width: 880px) {
		.search-container {
			flex-wrap: wrap;
			padding: 0;
			padding: 0 0 30px;
			margin: 0;
		}
		.field-container {
			width: 45%;
			padding: 0;
			margin: 0;
			margin-bottom: 15px;

			/* flex-grow: 2; */
		}

		.field-container:nth-child(even) {
			margin-left: 5px;
		}

		.field-container:nth-child(odd) {
			margin-right: 5px;
		}

		.field-container:last-child {
			margin: 0;
			padding: 0;
			/* margin-left: -4px; */

			width: 92%;
			/* margin-right: 0;
			margin-left: -20px; */
			/* padding: 0 10px 0 15px; */
		}

		.compare-results {
			padding: 0 10px;
		}
		.past-result,
		.recent-result {
			width: 50%;
			padding-top: 43%;
		}
	}
	/* 600px and down */
	@media only screen and (max-width: 600px) {
		.results {
			flex-direction: column;
		}
		.past-result,
		.recent-result {
			width: 90%;
			padding-top: 83%;
		}
	}

	/* 500px and down */
	@media only screen and (max-width: 500px) {
		.search-container {
			padding: 0 20px 20px;
		}
		.field-container {
			width: 100%;
			margin: 0 !important;
			margin-bottom: 10px !important;
			padding: 0;
		}
		.search-container .field-container:last-child {
			/* margin-left: -2px !important; */
			margin-bottom: 0 !important;
			width: 100%;
		}
	}

	/* 880px and up */
	@media only screen and (min-width: 880px) {
		.past-result,
		.recent-result {
			height: 300px;
		}
	}
</style>
