<script lang="ts">
	import LinkBox from "../../components/LinkBox.svelte";
</script>

<main>
	<h1 class="title">ジャンル</h1>
	<div class="container">
		<LinkBox url="/game/prefecture" title="都道府県" />
		<LinkBox url="/game/prefecture-capital" title="都道府県庁所在地" />
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
		overflow-y: auto;
	}
	.container {
		display: flex;
		flex-wrap: wrap;
        justify-content: center;
	}
	.title {
		padding: 2.5rem;
		color: #ff3e00;
		line-height: 1.2;
		margin: 2rem auto;
		border-radius: 50%;
		background-color: #ffffff;
	}
</style>
