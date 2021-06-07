<script lang="ts"></script>

<main>
	<div class="container">
		<h1 class="title">タイピングゲーム</h1>
		<a class="start" href="/game/">Start</a>
	</div>
</main>

<style>
	main {
		width: 100vw;
		height: 100vh;
		display: flex;
		align-items: center;
		justify-content: center;
	}
	.container {
		display: flex;
		align-items: center;
		flex-direction: column;
		background-color: #ffffff;
		border-radius: 50%;
		padding: 2.5rem;
	}
	.title {
		font-size: 4rem;
		line-height: 1.2;
		color: #ff3e00;
		font-weight: bold;
		margin: 2rem auto;
	}
	.start {
		font-size: 2rem;
		color: #ff9e00;
		font-weight: bold;
	}

	@media (max-width: 620px) {
		.container {
			padding: 2rem;
		}
		.title {
			font-size: 2.5rem;
		}
		.start {
			font-size: 1.5rem;
		}
	}
	@media (max-width: 420px) {
		.container {
			padding: 1.5rem;
		}
		.title {
			font-size: 2rem;
		}
		.start {
			font-size: 1.2rem;
		}
	}
</style>
