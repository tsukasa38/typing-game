<script lang="ts">
    import { onMount } from "svelte";
    import type { Word, Status } from "../../lib/game.svelte";
    import { generateWords, checkKey } from "../../lib/game.svelte";
    import KeyBoard from "../../components/KeyBoard.svelte";

    export let genre: string;

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

    onMount(async () => {
        WORDS = await (await fetch(`/data/${genre}.json/`)).json();
        assign_words = generateWords(WORDS, assign_word_count);
    });

    function start(): void {
        status = "run";
    }

    function retry(): void {
        status = "prepare";
        assign_words = generateWords(WORDS, assign_word_count);
    }

</script>

<main>
    {#if status === "prepare"}
    <div class="prepareContainer">
        <button class="startButton" on:click={start}>スタート</button>
    </div>

    {:else if status === "run"}
    <div class="runContainer">
        <p class="name">
            {assign_words[typed_word_count].name}
        </p>
        <p class="romaji">
            <span class="correctString">{assign_words[typed_word_count].romaji.slice(0, typed_word_index)}</span>{assign_words[typed_word_count].romaji.slice(typed_word_index)}
        </p>
    </div>

    {:else if status === "finish"}
    <div class="finishContainer">
        <button class="retryButton" on:click={retry}>リトライ</button>
    </div>
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
    .prepareContainer {
        display: flex;
        align-items: center;
        background-color: #ffffff;
        border-radius: 50%;
        padding: 2rem 4rem;
    }
    .runContainer {
        display: flex;
        align-items: center;
        flex-direction: column;
        background-color: #ffffff;
        border-radius: 50%;
        padding: 3.5rem 7rem;
        transition: all 1s;
    }
    .finishContainer {
        display: flex;
        align-items: center;
        background-color: #ffffff;
        border-radius: 50%;
        padding: 2rem 4rem;
    }
    .startButton {
        border: none;
        outline: none;
        padding: 1rem;
        cursor: pointer;
        color: #ffffff;
        font-weight: bold;
        border-radius: .25rem;
        background-color: #057fff;
        box-shadow: 0px 2px 2px 2px #dcdcdc;
    }
    .retryButton {
        border: none;
        outline: none;
        padding: 1rem;
        cursor: pointer;
        color: #ffffff;
        font-weight: bold;
        border-radius: .25rem;
        background-color: #057fff;
        box-shadow: 0px 2px 2px 2px #dcdcdc;
    }
    .name {
        margin: 0;
        padding: .25rem;
        font-size: 3.5rem;
        font-weight: bold;
    }
    .romaji {
        margin: 0;
        padding: .25rem;
        font-size: 3.5rem;
        font-weight: bold;
    }
    .correctString {
        color: darkorange;
    }
	@media (max-height: 640px) {
		.runContainer {
            padding: 3rem 6rem;
        }
        .name {
            font-size: 3rem;
        }
        .romaji {
            font-size: 3rem;
        }
	}
    @media (max-height: 520px) {
		.runContainer {
            padding: 2rem 4rem;
        }
        .name {
            font-size: 2.5rem;
        }
        .romaji {
            font-size: 2.5rem;
        }
	}
    @media (max-height: 440px) {
		.runContainer {
            padding: 1rem 4rem;
        }
        .name {
            font-size: 2rem;
        }
        .romaji {
            font-size: 2rem;
        }
	}
</style>
