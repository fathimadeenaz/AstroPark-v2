<script>
</script>

<!-- <main id="main">
	<div>
		<h2 class="first">About</h2>
	</div>
	<div class="two">
		<h2 class="second">Description</h2>
	</div>
	<div class="section-2">
		<div class="tab">
			<h3>AstroPark</h3>
			AstroPark is a project built using the NASA API. It has two segments
			- a Frontend and a Backend. Frontend portrays the information received
			from the backend. The backend works as an intermediate proxy server which
			processes and pipes the response back to the frontend.<br />
			AstroPart comprises of the given features.
			<br />- APOD Homepage
			<br />- Media Library
			<br />- Landsat Image Retriever(LIR)
		</div>
		<div class="tab">
			<h3>APOD Homepage</h3>
			The APOD Homepage is an informative homepage. This homepage is designed
			with the help of APOD API provided by NASA. The cover page of AstroPark
			changes on a daily basis. Along with the picture, user is provided with
			some description related to the picture.
		</div>
		<div class="tab">
			<h3>Library</h3>
			AstroPark Media Library develops a link with Media Library of NASA. The
			required data is retrieved based upon the keyword. As a result, a grid
			of pictures are displayed based upon the keyword. And along with the
			pictures, the information regarding those pictures is also displayed
			to the user.
		</div>
		<div class="tab">
			<h3>Landsat Image Retriever</h3>
			LIR feature works with the help of Earth API. The user is required to
			fill the details in the given form. Based upon the values of Latitude
			and Longitude, the satellite images of that particular region taken on
			the provided dates are retrieved, proccessed from the database and are
			displayed.
		</div>
	</div>

	<div>
		<h2 class="third">Meet the Team</h2>
		<div class="box">
			<div class="flip-card">
				<div class="flip-card-inner">
					<div class="flip-card-front">
						<img
							src="./Images/A1.png"
							alt="Avatar"
							style="width:300px;height:300px;border-radius:30px"
						/>
					</div>
					<div class="flip-card-back">
						<h1>Habeeb Ullah</h1>
						<p>Backend Developer</p>
						<p>We love that guy</p>

						<a
							target="_blank"
							href="https://twitter.com/TheOpCoder"
							class="fab fa-twitter-square"
						/>
						<a
							target="_blank"
							href="https://github.com/HabeebUllahTabrez"
							class="fab fa-github-square"
						/>
						<a
							target="_blank"
							href="https://www.linkedin.com/in/mohammed-habeeb-ullah-tabrez-914001191/"
							class="fab fa-linkedin"
						/>
					</div>
				</div>
			</div>

			<div class="flip-card">
				<div class="flip-card-inner">
					<div class="flip-card-front">
						<img
							src="./Images/A2.png"
							alt="Avatar"
							style="width:300px;height:300px;border-radius:30px"
						/>
					</div>
					<div class="flip-card-back">
						<h1>Sadiya Noorain</h1>
						<p>Frontend Developer</p>
						<p>We love that guy</p>

						<a
							target="_blank"
							href="https://twitter.com/Sadiya_0613"
							class="fab fa-twitter-square"
						/>
						<a
							target="_blank"
							href="https://github.com/Sadiya1noorain"
							class="fab fa-github-square"
						/>
						<a
							target="_blank"
							href="https://www.linkedin.com/in/sadiya-noorain/"
							class="fab fa-linkedin"
						/>
					</div>
				</div>
			</div>
		</div>
	</div>
	<div>
		<h2 class="fourth" style="margin-bottom:20px">
			Know More About the Project
		</h2>
		<div class="section-4">
			<p>
				The frontend is created using SvelteJS and it is deployed on
				GitHub pages <a
					target="_blank"
					href="https://habeebullahtabrez.github.io/AstroPark"
					class="know"
					>https://habeebullahtabrez.github.io/AstroPark</a
				>
			</p>
			<p>
				The backend is created using NodeJS and ExpressJS. It is
				deployed on Heroku <a
					target="_blank"
					href="https://astropark.herokuapp.com/"
					class="know">https://astropark.herokuapp.com/</a
				>
			</p>
			<p>
				To view the source code of the Frontend visit : <a
					target="_blank"
					href="https://github.com/HabeebUllahTabrez/AstroPark"
					class="know"
					>https://github.com/HabeebUllahTabrez/AstroPark</a
				>
			</p>
			<p>
				To view the source code of the Backend visit : <a
					target="_blank"
					href="https://github.com/HabeebUllahTabrez/AstroPark-REST-API"
					class="know"
					>https://github.com/HabeebUllahTabrez/AstroPark-REST-API</a
				>
			</p>
			<p>
				The documentation of AstroPark is available on <a
					target="_blank"
					href="https://www.icloud.com/pages/0d2Q3FjATEaH2gfbK0xs20Anw#Report"
					class="know"
					>https://www.icloud.com/pages/0d2Q3FjATEaH2gfbK0xs20Anw#Report</a
				>
			</p>
			<p>
				The PPT of AstroPark is available on <a
					target="_blank"
					href="https://www.icloud.com/keynote/0048dnY4SFdIVXCWdeBcL0qAg#PPT_1"
					class="know"
					>https://www.icloud.com/keynote/0048dnY4SFdIVXCWdeBcL0qAg#PPT_1</a
				>
			</p>
			<p>To know more, contact us</p>
		</div>
	</div>
</main>-->
<link
	rel="stylesheet"
	href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css"
/>
<div class="container">
	<div class="card">
		<div class="icon">
			<i class="fa-solid fa-meteor" />
		</div>
		<div class="desc">
			<div class="head">apod</div>
			<div class="body">
				The APOD displays the Astronomy Picture Of the Day which is
				fetched from the APOD API provided by NASA. The APOD changes on
				a daily basis. Along with the picture, the user is provided with
				a short description of the APOD along with its title and owner
				of the picture.
			</div>
		</div>
	</div>
	<div class="card">
		<div class="icon"><i class="fa-solid fa-book-atlas" /></div>
		<div class="desc">
			<div class="head">lib</div>
			<div class="body">
				?!WTF!? AstroPark Media Library develops a link with Media
				Library of NASA. The required data is retrieved based upon the
				keyword. As a result, a grid of pictures are displayed based
				upon the keyword. And along with the pictures, the information
				regarding those pictures is also displayed to the user.
			</div>
		</div>
	</div>
	<div class="card">
		<div class="icon"><i class="fa-solid fa-satellite" /></div>
		<div class="desc">
			<div class="head">lir</div>
			<div class="body">
				The LIR - Landsat Image Retriever - works with the help of the
				Earth API. The user is required to fill in the details in the
				given form. Based on the values of latitude and longitude, the
				satellite images of that particular region taken on the provided
				dates are retrieved from the database and are displayed to the
				user.
			</div>
		</div>
	</div>
</div>
<hr />
<footer>
	<div>
		Developed by Habeeb Ullah Tabrez and Sadiya Noorain
		<br />Redesigned by Deenaz Fathima
	</div>
</footer>

<style>
	.container {
		display: flex;
		flex-direction: column;
	}
	.card {
		border-left: 20px solid var(--accent);
		margin: 30px auto;
		height: 170px;
		width: 80%;
		background-color: var(--secondary);
		display: flex;
		padding: 20px 30px 20px 0;
	}

	.card:nth-child(2) {
		border-left: 0;
		border-right: 20px solid var(--accent);
		padding: 20px 0 20px 30px;
		flex-direction: row-reverse;
		text-align: right;
	}

	.icon {
		width: 20%;
		display: flex;
		padding: 10px;
		justify-content: center;
		align-items: center;
	}

	i {
		color: var(--text);
		font-size: 40px;
		display: inline-block;
		padding: 24px;
		border: 2px solid var(--text);
		border-radius: 50%;
	}
	.desc {
		width: 80%;
		display: flex;
		flex-direction: column;
		padding: 10px;
		justify-content: center;
		/* align-items: center; */
	}
	.head {
		text-transform: uppercase;
		font-size: 20px;
		font-weight: bold;
		height: 30%;
	}
	.body {
		margin-top: 10px;
		height: 70%;
	}
	hr {
		width: 60%;
		/* border: 0;
		height: 12	px; */
		margin-top: 65px;
		background-color: var(--accent);
		border: 1px solid var(--accent);
		height: 0px;
	}
	footer {
		/* background-color: pink; */
		/* margin-top: 20px; */
		text-align: center;
		padding: 20px;
		padding-bottom: 30px;
	}

	/* html {
	height: 100%;
	background: radial-gradient(ellipse at bottom, #1b2735 0%, #090a0f 100%);
	overflow: hidden;
} 

	#main {
		background-image: linear-gradient(
			to bottom,
			#082032,
			#192d3e,
			#293b4a,
			#394956,
			#495863
		);
	}

	.first {
		font-size: 240px;
		color: #a1a1a1;
		height: 40vh;
	}

	.second,
	.third,
	.fourth {
		font-size: 60px;
		color: wheat;
	}

	h2 {
		display: flex;
		align-items: center;
		justify-content: center;
		width: 100%;
		position: relative;
		font-weight: bolder;
	}

	.flip-card {
		background-color: transparent;
		width: 300px;
		height: 300px;
		perspective: 1000px;
		margin: 20px 150px;
	}

	.flip-card-inner {
		position: relative;
		width: 100%;
		height: 100%;
		text-align: center;
		transition: transform 1s;
		transform-style: preserve-3d;
		box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
	}

	.flip-card:hover .flip-card-inner {
		transform: rotateY(180deg);
	}

	.flip-card-front,
	.flip-card-back {
		position: absolute;
		width: 100%;
		height: 100%;
		-webkit-backface-visibility: hidden;
		backface-visibility: hidden;
	}

	.flip-card-front {
		background-color: #bbb;
		color: black;
	}

	.flip-card-back {
		background-color: #082032;
		color: #a1a1a1;
		transform: rotateY(180deg);
	}

	.box {
		display: flex;
		justify-content: center;
		align-items: center;
		position: relative;
	}

	.fab {
		color: #394c5a;
		padding: 20px;
		font-size: 35px;
		width: 50px;
		text-align: center;
		text-decoration: none;
		margin: 5px 2px;
	}

	.fab:hover {
		opacity: 0.7;
	}

	.section-2 {
		color: #c1c7cc;
		padding: 30px 120px;
		margin: 30px 120px;
		font-size: 20px;
		line-height: 1.5em;
	}

	h3 {
		font-size: 40px;
		line-height: 2em;
		text-decoration: #c1c7cc dashed underline;
		text-underline-position: under;
	}

	.section-4 {
		color: #c1c7cc;
		padding: 20px 120px;
		margin: 20px 120px;
		font-size: 25px;
		line-height: 1.5em;
	}

	.know {
		color: #2597ed;
	}*/
</style>
