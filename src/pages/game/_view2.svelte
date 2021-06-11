<script lang="ts">
    import { checkKey } from "../../lib/game.svelte";
    import type { Word, Status } from "../../lib/game.svelte";

    export let status: Status;
    export let typed_key: string;
    export let assign_words: Word[];
    export let typed_word_count: number;
    export let typed_word_index: number;

    let name: string;
    let romaji_head: string;
    let romaji_tail: string;


    $: name = assign_words[typed_word_count].name;
    $: romaji_head = assign_words[typed_word_count].romaji.slice(0, typed_word_index);
    $: romaji_tail = assign_words[typed_word_count].romaji.slice(typed_word_index);


    $: if(checkKey(typed_key)) {
        const target_word: Word = assign_words[typed_word_count];
        const target_char: string = target_word.romaji[typed_word_index];

        if(typed_key === target_char) {
            typed_word_index += 1;

            if(typed_word_index === target_word.romaji.length) {
                typed_word_index = 0;
                typed_word_count += 1;

                if(typed_word_count === assign_words.length) {
                    typed_word_count = 0;
                    status = "finish";
                }
            }
        }
    }

</script>

<div class="container">
    <p class="name">{name}</p>
    <p class="romaji">
        <span class="correct">{romaji_head}</span>{romaji_tail}
    </p>
</div>

<style>
    p {
        margin: 0;
    }
    .container {
        display: flex;
        align-items: center;
        flex-direction: column;
        background-color: #ffffff;
        border-radius: 50%;
        padding: 3.5rem 7rem;
        transition: all 1s;
    }
    .name {
        padding: .25rem;
        font-size: 3.5rem;
        font-weight: bold;
    }
    .romaji {
        padding: .25rem;
        font-size: 3.5rem;
        font-weight: bold;
    }
    .correct {
        color: darkorange;
    }
    @media (max-height: 640px) {
		.container {
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
		.container {
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
		.container {
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
