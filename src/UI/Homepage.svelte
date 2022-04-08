<section class="showcase">
	<div class="video-container">
		<video src="./Video/bgvid.mp4" autoplay muted loop />
	</div>
	<div class="content">
		<h1>astropark</h1>
		<div>one stop shop for all astronomy lovers</div>
	</div>
</section>

<style>
	h1 {
		font-family: var(--heading);
		font-weight: 300;
		font-size: 100px;
		line-height: 0.9;
		margin-bottom: 15px;
		text-transform: capitalize;
		letter-spacing: 5px;
	}

	.showcase {
		height: 77vh;
		display: flex;
		align-items: center;
		justify-content: center;
		text-align: center;
		color: var(--text);
		padding: 0 20px;
	}

	.video-container {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		overflow: hidden;
		background: var(--primary) no-repeat center center/cover;
	}

	.video-container video {
		min-width: 100%;
		min-height: 100%;
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		object-fit: cover;
	}

	.video-container:after {
		content: "";
		z-index: 1;
		height: 100%;
		width: 100%;
		top: 0;
		left: 0;
		background: rgba(51, 47, 105, 0.295);
		position: absolute;
	}

	.content {
		z-index: 2;
		/* margin-top: -85px; */
	}

	.content div {
		font-size: 22px;
		text-transform: uppercase;
		letter-spacing: 1px;
	}

	/* media queries */

	/* Extra extra small devices (phones, 425px and down) */
	@media only screen and (max-width: 425px) {
		h1 {
			font-weight: 300;
			font-size: 45px;
			line-height: 0.7;
		}
		.content div {
			font-size: 13px;
			padding: 0 40px;
		}
	}

	/* Extra small devices (phones, 425px and up) */
	@media only screen and (min-width: 425px) {
		h1 {
			font-weight: 300;
			font-size: 45px;
			line-height: 0.5;
		}
		.content div {
			font-size: 16px;
		}
	}

	/* Small devices (portrait tablets and large phones, 600px and up) */
	@media only screen and (min-width: 600px) {
		h1 {
			font-weight: 300;
			font-size: 65px;
			line-height: 0.6;
		}
		.content div {
			font-size: 16px;
		}
	}

	/* Medium devices (landscape tablets, 768px and up) */
	@media only screen and (min-width: 768px) {
		h1 {
			font-weight: 300;
			font-size: 85px;
			line-height: 0.7;
		}
		.content div {
			font-size: 16px;
		}
	}

	/* Large devices (laptops/desktops, 992px and up) */
	@media only screen and (min-width: 992px) {
		h1 {
			font-weight: 300;
			font-size: 95px;
			line-height: 0.8;
		}
		.content div {
			font-size: 20px;
		}
	}
</style>
