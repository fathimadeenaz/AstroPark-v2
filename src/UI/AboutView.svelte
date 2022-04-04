<script>
</script>

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
				a short description of the APOD with its title and owner of the
				picture.
			</div>
		</div>
	</div>
	<div class="card">
		<div class="icon"><i class="fa-solid fa-book-atlas" /></div>
		<div class="desc">
			<div class="head">lib</div>
			<div class="body">
				AstroPark Media Library helps access the NASA's Image Library.
				On searching, a grid of articles related to the keyword will be
				displayed on the page. The search is done based on a particular
				keyword which is passed as a query parameter to the backend.
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
		margin-top: 65px;
		background-color: var(--accent);
		border: 1px solid var(--accent);
		height: 0px;
	}
	footer {
		text-align: center;
		padding: 20px;
		padding-bottom: 30px;
	}
</style>
