<script lang="ts"></script>

<main>
	<h1 class="title">タイピングゲーム</h1>
	<div class="start">
		<a href="/game/">Start</a>
	</div>
</main>

<style>
	main {
		width: 100vw;
		height: 100vh;
		display: flex;
		align-items: center;
		flex-direction: column;
		justify-content: center;
	}

	.title {
		font-size: 4rem;
		line-height: 1.1;
		color: #ff3e00;
		font-weight: bold;
		margin: 2rem auto;
	}

	.start>a {
		font-size: 2rem;
		color: #ff9e00;
		font-weight: bold;
		text-align: center;
	}

	@media (max-width: 520px) {
		.title {
			font-size: 2.5rem;
		}
	}
</style>
