<template>
<div id="recent-work">
	<div class="images">
		<img src="@/assets/images/lpdpl/desktop.png" alt="lespaniersdupetitlucien - desktop">
		<img src="@/assets/images/lpdpl/mobile.png" alt="lespaniersdupetitlucien - mobile">
	</div>
	<div class="recent-work-container">
		<h1>Recent Work</h1>
		<div>
			<router-link to="/work">VIEW ALL</router-link>
			<img src="@/assets/images/right-arrow.png" alt="right arrow" height="30">
		</div>
	</div>
</div>
</template>


<script>
	
</script>


<style lang="scss">
	#recent-work {
		
		width: 100vw;
		height: 70vh;

		display: grid;
		grid-template-columns: 1fr 1fr 1fr;

		background: linear-gradient(to bottom left, #fff 0%, #fff 50%, #7DD2DF 50%, #187B8A 100%);

		@media screen and (max-width:900px){
			display: flex;
			justify-content: center;
			margin-top: 25vh;
		}

		&>.images {

		display: flex;
		flex-direction: row;

		justify-content: center;
		padding-top: 10%;

		@media screen and (max-width:900px){
			display: none;
		}

			&>img {
				&:first-child { //desktop
					max-width: 400px;
					max-height: 400px;
				}
				&:last-child { //mobile
					max-height: 500px;

					margin-left: -50px;
					margin-top: 50px;
				}
			}
		}
	
		&>.recent-work-container{

			display:flex;
			flex-direction: column;
			align-items: center;

			&>h1{
				font-family: 'Raleway', sans-serif;
				font-size: 64px;
				color: black;

				text-align: center;

				width: 6em;
			}

			&>div {
				display: flex;
				align-items: center;
				justify-content: center;

				font-family: 'Raleway', sans-serif;
				color: black;

				&:hover {
					cursor: pointer;
				}

				&>a, &>img {
					text-decoration: none;
					border: solid 2px black;
					height: 1em;
				}

				&>a {
					color: black;
					padding: 10px 20px;
				}

				&>img {
					border-left:none;
					width: 1.5em;
					padding: 10px;
				}
			}
		}
	}
</style>