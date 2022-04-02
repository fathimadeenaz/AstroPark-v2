<!-- <div class="lds-ring">
    <div />
    <div />
    <div />
    <div />
</div> -->

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
	/* .lds-ring {
        display: inline-block;
        position: relative;
        width: 80px;
        height: 80px;
    }
    .lds-ring div {
        box-sizing: border-box;
        display: block;
        position: absolute;
        width: 64px;
        height: 64px;
        margin: 8px;
        border: 8px solid #fff;
        border-radius: 50%;
        animation: lds-ring 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
        border-color: #fff transparent transparent transparent;
    }
    .lds-ring div:nth-child(1) {
        animation-delay: -0.45s;
    }
    .lds-ring div:nth-child(2) {
        animation-delay: -0.3s;
    }
    .lds-ring div:nth-child(3) {
        animation-delay: -0.15s;
    }
    @keyframes lds-ring {
        0% {
            transform: rotate(0deg);
        }
        100% {
            transform: rotate(360deg);
        }
    } */
</style>
