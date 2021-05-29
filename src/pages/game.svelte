<script lang="ts">
    import { onMount } from "svelte";
    import { generateWords, checkKey } from "../lib/game.svelte";
    import KeyBoard from "../components/KeyBoard.svelte";

    type Word = {
        name: string;
        romaji: string;
        hiragana: string;
    };

    type Status = "preparation" | "running" | "finish";

    let WORDS: Word[] = null;
    let assign_words: Word[] = null;

    let typed_key: string = "";
    let typed_word: string = "";
    
    let typed_word_index: number = 0;
    let typed_word_count: number = 0;
    let assign_word_count: number = 10;
    let status: Status = "preparation";

    $: if(status === "running") {
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
        WORDS = await (await fetch("PrefectureCapital.json")).json();
        assign_words = generateWords(WORDS, assign_word_count);
    });

</script>

<main>
    {#if status === "preparation"}
    <h1>Preparation</h1>
    <button on:click={() => { status = "running"; }}>start</button>

    {:else if status === "running"}
    <h1>Typing Game</h1>
    <h1>{assign_words[typed_word_count].name}</h1>
    <h1>{assign_words[typed_word_count].hiragana}</h1>
    <h1>{assign_words[typed_word_count].romaji}</h1>
    <h1>{typed_word}</h1>
    
    {:else if status === "finish"}
    <h1>Clear</h1>
    <button on:click={() => { status = "preparation"; }}>retry</button>
    {/if}

    <KeyBoard bind:typed_key={typed_key} />
</main>

<style>
    main {
        text-align: center;
        padding: 1em;
        margin: 0 auto;
    }
</style>
