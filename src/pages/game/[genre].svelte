<script lang="ts">
    import { onMount } from "svelte";
    import { generateWords } from "../../lib/game.svelte";
    import type { Word, Status } from "../../lib/game.svelte";
    import KeyBoard from "../../components/KeyBoard.svelte";
    import Countdown from "./_countdown.svelte";
    import Finish from "./_finish.svelte";
    import Start from "./_start.svelte";
    import Run from "./_run.svelte";


    export let genre: string;

    let status: Status = "start";

    let WORDS: Word[] = null;
    let assign_words: Word[] = null;

    let typed_key: string = "";
    let typed_word_index: number = 0;
    let typed_word_count: number = 0;
    let assign_word_count: number = 10;


    onMount(async () => {
        WORDS = await (await fetch(`/data/${genre}.json/`)).json();
        assign_words = generateWords(WORDS, assign_word_count);
    });

</script>

<main>
    {#if status === "start"}
    <Start bind:status={status} />

    {:else if status === "countdown"}
    <Countdown bind:status={status} />

    {:else if status === "run"}
    <Run bind:status={status} typed_key={typed_key} assign_words={assign_words} typed_word_count={typed_word_count} typed_word_index={typed_word_index} />

    {:else if status === "finish"}
    <Finish bind:status={status} />
    {/if}

    <KeyBoard bind:typed_key={typed_key} />
</main>

<style>
    main {
        width: 100vw;
		height: 100vh;
		display: flex;
		align-items: center;
		flex-direction: column;
		justify-content: space-evenly;
    }
</style>
