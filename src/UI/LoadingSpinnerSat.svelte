<div class="spin-loader" aria-hidden="true" />

<style>
	:root {
		--spinner_speed: 0.675s;
		--spinner_radius: 80%;
		--spinner_fill_radius: 90px;

		--spinner_size: 50px;
		--spinner_thickness: 10px;
		--spinner_inner_circle: 40px; /*--spinner_size - --spinner_thickness*/

		--spinner_color: #121126;
		--spinner_bg: #2c2851;
		--spinner_inner_bg: #1e1b3a;
	}
	.spin-loader {
		border-radius: 80%;
		display: block;
		height: var(--spinner_size);
		width: var(--spinner_size);
		position: relative;
		animation: spin var(--spinner_speed) linear 0s infinite normal;
		background: var(--spinner_bg);
		margin-top: -15px;
	}
	.spin-loader:before,
	.spin-loader:after {
		content: "";
		display: block;
		position: absolute;
	}

	.spin-loader:before {
		border-radius: 0 var(--spinner_fill_radius) var(--spinner_fill_radius) 0;
		height: var(--spinner_size);
		width: 50%;
		top: 0;
		right: 0;
		z-index: 1;
		background: var(--spinner_color);
		background-image: linear-gradient(
			var(--spinner_bg),
			var(--spinner_color)
		);
	}

	.spin-loader:after {
		border-radius: var(--spinner_radius);
		height: var(--spinner_inner_circle);
		width: var(--spinner_inner_circle);
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		z-index: 1;
		background: var(--spinner_inner_bg);
	}

	@keyframes spin {
		to {
			transform: rotate(360deg);
		}
	}

	/* media queries */

	/* 880px and down */
	@media only screen and (max-width: 880px) {
		.spin-loader {
			margin-top: -105%;
		}
	}

	/*600px and down */
	@media only screen and (max-width: 600px) {
		.spin-loader {
			margin-top: -100%;
		}
	}
</style>
