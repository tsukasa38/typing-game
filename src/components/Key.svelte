<script lang="ts">
    let is_typed: boolean;
    export let flex: number = 1.0;
    export let width: number = 50;
    export let height: number = 50;
    export let typed_key: string = "";
    export let display_key: string = "";
    export let upper_case_key: string = null;
    export let lower_case_key: string = null;

    $: is_typed = is_typed_key(typed_key);

    function is_typed_key(typed_key: string): boolean {
        return (lower_case_key === typed_key || upper_case_key === typed_key);
    }

    function handleClick(): void {
        typed_key = "";
        typed_key = display_key;
    }
</script>

<button class="key" class:is_typed on:click={handleClick} style={`width: ${width}px; height: ${height}px; line-height: ${height}px; flex: ${flex}`}>{display_key}</button>

<style>
    .key {
        padding: 0;
        margin: 1.5px;
        outline: none;
        font-size: 1em;
        cursor: pointer;
        overflow: hidden;
        font-weight: bold;
        text-align: center;
        border-radius: 4px;
        border: 2px solid #8d8d8d;
    }
    .is_typed {
        color: #ffffff;
        border-color: #ff9c00;
        background-color: #ff9c00;
    }
</style>
