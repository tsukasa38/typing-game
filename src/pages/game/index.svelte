<script lang="ts"></script>

<main>
	<h1>メニュー</h1>
	<div class="container">
        <div class="linkContainer">
            <a href="/game/prefecture">都道府県名</a>
        </div>
		<div class="linkContainer">
            <a href="/game/prefecture-capital">都道府県庁所在地名</a>
        </div>
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
	.container {
		display: flex;
		align-items: center;
        justify-content: center;
	}
    .linkContainer {
        margin: 1rem;
        padding: 1rem;
		border-radius: 1rem;
        background-color: #ffffff;
    }
</style>
