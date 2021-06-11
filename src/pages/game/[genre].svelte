<script lang="ts">
    import { onMount } from "svelte";
    import type { Word, Status } from "../../lib/game.svelte";
    import { generateWords, checkKey } from "../../lib/game.svelte";
    import KeyBoard from "../../components/KeyBoard.svelte";
    import View1 from "./_view1.svelte";
    import View2 from "./_view2.svelte";
    import View3 from "./_view3.svelte";

    export let genre: string;

    let WORDS: Word[] = null;
    let assign_words: Word[] = null;

    let typed_key: string = "";
    let typed_word: string = "";

    let typed_word_index: number = 0;
    let typed_word_count: number = 0;
    let assign_word_count: number = 10;
    let status: Status = "start";

    $: if(status === "run") {
        const target_word: Word = assign_words[typed_word_count];
        const target_char: string = target_word.romaji[typed_word_index];

        if(checkKey(typed_key)) {
            typed_word = target_word.romaji.slice(0, typed_word_index) + typed_key;

            if(typed_key === target_char){
                typed_word_index += 1;

                if(typed_word_index === target_word.romaji.length) {
                    typed_word_index = 0;
                    typed_word_count += 1;
                    typed_word = "";

                    if(typed_word_count === assign_word_count) {
                        typed_word_count = 0;
                        status = "finish";
                        typed_key = "";
                    }
                }
            }
        }
    }

    onMount(async () => {
        WORDS = await (await fetch(`/data/${genre}.json/`)).json();
        assign_words = generateWords(WORDS, assign_word_count);
    });

</script>

<main>
    {#if status === "start"}
    <View1 bind:status={status} />

    {:else if status === "run"}
    <View2 {assign_words} {typed_word_count} {typed_word_index} />

    {:else if status === "finish"}
    <View3 bind:status={status} />
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
