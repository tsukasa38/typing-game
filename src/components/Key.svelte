<script lang="ts">
    let is_typed: boolean;
    let display_key: string;
    export let flex: number = 1.0;
    export let width: number = 50;
    export let height: number = 50;
    export let typed_key: string = "";
    export let upper_case_key: string = null;
    export let lower_case_key: string = null;
    export let is_typed_shift_key: boolean = false;

    $: is_typed = is_typed_key(typed_key);
    $: display_key = select_display_key(is_typed_shift_key);

    function is_typed_key(typed_key: string): boolean {
        const is_upper_case: boolean = (upper_case_key === typed_key);
        const is_lower_case: boolean = (lower_case_key === typed_key);
        return is_typed_shift_key? is_upper_case: is_lower_case;
    }

    function select_display_key(is_typed_shift_key: boolean): string {
        if(is_typed_shift_key) { return upper_case_key? upper_case_key: ""; }
        else { return lower_case_key? lower_case_key: ""; } 
    }

    function handleClick(): void {
        typed_key = "";
        typed_key = display_key;
        if(typed_key === "Shift") { is_typed_shift_key = !is_typed_shift_key; }
    }
</script>

<button class="key" class:is_typed on:click={handleClick} style={`width: ${width}px; height: ${height}px; line-height: ${height}px; flex: ${flex}`}>{display_key}</button>

<style>
    .key {
        padding: 0;
        margin: 1.5px;
        outline: none;
        cursor: pointer;
        overflow: hidden;
        font-size: 1.4rem;
        font-weight: bold;
        text-align: center;
        border-radius: 4px;
        border: 2px solid #8d8d8d;
        box-shadow: 0px 2px 2px 2px #dcdcdc;
    }    .is_typed {
        color: #ffffff;
        border-color: #ff9c00;
        background-color: #ff9c00;
    }
</style>
