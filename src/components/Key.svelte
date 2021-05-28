<script lang="ts">
    let is_typed: boolean;
    export let width: number = 40;
    export let height: number = 40;
    export let typed_key: string = "";
    export let display_key: string = "";
    export let upper_case_key: string = null;
    export let lower_case_key: string = null;

    $: is_typed = is_typed_key(typed_key);

    function is_typed_key(typed_key: string): boolean {
        return (lower_case_key === typed_key || upper_case_key === typed_key);
    }
</script>

<button class="key" class:is_typed style={`width: ${width}px; height: ${height}px; line-height: ${height}px;`}>{display_key}</button>

<style>
    .key {
        outline: none;
        margin: 1.5px;
        font-size: 1em;
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
