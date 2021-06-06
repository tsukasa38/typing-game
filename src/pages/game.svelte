<script lang="ts">
    import { onMount } from "svelte";
    import type { Word, Status } from "../lib/game.svelte";
    import { generateWords, checkKey } from "../lib/game.svelte";
    import KeyBoard from "../components/KeyBoard.svelte";

    let WORDS: Word[] = null;
    let assign_words: Word[] = null;

    let typed_key: string = "";
    let typed_word: string = "";

    let typed_word_index: number = 0;
    let typed_word_count: number = 0;
    let assign_word_count: number = 10;
    let status: Status = "prepare";

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

    onMount(async ()=>{
        WORDS = await (await fetch("/data/PrefectureCapital.json/")).json();
        assign_words = generateWords(WORDS, assign_word_count);
    });

</script>

<main>
    {#if status === "prepare"}
    <button on:click={() => { status = "run"; }}>start</button>

    {:else if status === "run"}
    <h1>{assign_words[typed_word_count].name}({assign_words[typed_word_count].hiragana})</h1>
    <h1>{assign_words[typed_word_count].romaji}:{typed_word}</h1>

    {:else if status === "finish"}
    <button on:click={() => { status = "prepare"; }}>ReTRY Same Words</button>
    <button on:click={() => { status = "prepare"; assign_words = generateWords(WORDS, assign_word_count); }}>ReTRY Random Words</button>
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
		justify-content: center;
    }
</style>
