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
		background: black no-repeat center center/cover;
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
		margin-top: -135px;
	}

	.content div {
		font-size: 22px;
		text-transform: uppercase;
		letter-spacing: 1px;
	}
</style>
