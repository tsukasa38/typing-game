<script lang="ts" context="module">

    export type Word = {
        name: string;
        romaji: string;
        hiragana: string;
    };

    export type Status = "start" | "run" | "finish";

    function generateRandomInt(max: number): number {
        return Math.floor(Math.random() * max);
    }

    function generateSerialNums(num: number): number[] {
        return [...Array(num).keys()];
    }

    function generateRandomNums(max: number, num: number): number[] {
        let random_nums: number[] = [];
        let index_nums: number[] = generateSerialNums(max);

        for(let i = 0; i < num; ++i) {
            const len: number = index_nums.length;
            const index: number = generateRandomInt(len);
            const rand_num: number = index_nums[index];
            index_nums.splice(index, 1);
            random_nums.push(rand_num);
        }

        return random_nums;
    }

    export function generateWords(words: Word[], num: number): Word[] {
        let typingWords: Word[] = [];
        const len: number = words.length;
        const indexs: number[] = generateRandomNums(len, num);

        for(const index of indexs) {
            const word: Word = words[index];
            typingWords.push(word);
        }

        return typingWords;
    }

    export function checkKey(key: string): boolean {
        const reg: RegExp = /^[0-9a-zA-Z]$/;
        const is_match: RegExpMatchArray = key.match(reg);
        return is_match === null ? false: true;
    }

</script>
