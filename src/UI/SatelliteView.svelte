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

<div class="search-container">
	<div class="field-container lat">
		<input
			type="Number"
			id="latitude"
			class="latitude"
			on:input={(event) => (latitude = event.target.value)}
			placeholder="Latitude"
		/>
	</div>
	<div class="field-container long">
		<input
			type="Number"
			class="Longitude"
			id="longitude"
			on:input={(event) => (longitude = event.target.value)}
			placeholder="Longitude"
		/>
	</div>
	<div class="field-container past">
		<input
			type="text"
			id="past-date"
			placeholder="Past date"
			onfocus="(this.type='date')"
			on:input={(event) => (pDate = event.target.value)}
		/>
	</div>
	<div class="field-container pres">
		<input
			type="text"
			id="present-date"
			placeholder="Recent date"
			onfocus="(this.type='date')"
			on:input={(event) => (rDate = event.target.value)}
		/>
	</div>
	<div class="field-container btn">
		<button class="btn-search" on:click={submitForm} type="button"
			>search</button
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

<style>
	.compare-results {
		margin: auto;
		margin-top: 85px;
		padding-left: 10px;
		width: 70%;
		height: 50%;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}

	.results {
		display: flex;
		height: 100%;
		justify-content: center;
		align-items: center;
	}
	.past-result,
	.recent-result {
		border-radius: 3px;
		border: transparent;
		width: 300px;
		height: 300px;
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
		width: 70%;
		height: 40px;
		margin: 0 auto;
		border-radius: 3px;
		border: transparent;
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.field-container {
		width: 20%;
		height: 100%;
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

	.field-container button {
		cursor: pointer;
		padding-left: 0;
		text-transform: uppercase;
		background-color: var(--accent);
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
</style>
