<script lang="ts">
    import type { Status } from "../../lib/game.svelte";

    export let status: Status;
</script>

<div class="container">
    <button class="retryButton" on:click={() => status = "start"}>リトライ</button>
</div>

<style>
    button {
        border: none;
        outline: none;
        cursor: pointer;
    }
    .container {
        display: flex;
        align-items: center;
        background-color: #ffffff;
        border-radius: 50%;
        padding: 2rem 4rem;
    }
    .retryButton {
        padding: 1rem;
        color: #ffffff;
        font-weight: bold;
        border-radius: .25rem;
        background-color: #057fff;
        box-shadow: 0px 2px 2px 2px #dcdcdc;
    }
</style>
