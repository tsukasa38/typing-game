<script lang="ts">
    import Key from "./Key.svelte";
    export let typed_key: string = "";
    export let is_typed_shift_key: boolean = false;

    function handleKeyup(event: KeyboardEvent): void {
        typed_key = "";
        is_typed_shift_key = event.shiftKey;
    }

    function handleKeydown(event: KeyboardEvent): void {
        typed_key = event.key;
        is_typed_shift_key = event.shiftKey;
    }
</script>

<svelte:window on:keyup={handleKeyup} on:keydown={handleKeydown}/>

<div class="keyboard">
    <div class="segmant">
        <Key bind:typed_key={typed_key} bind:is_typed_shift_key={is_typed_shift_key} flex={1.0} />
        <Key bind:typed_key={typed_key} bind:is_typed_shift_key={is_typed_shift_key} flex={1.0} upper_case_key="!" lower_case_key="1"/>
        <Key bind:typed_key={typed_key} bind:is_typed_shift_key={is_typed_shift_key} flex={1.0} upper_case_key='"' lower_case_key="2"/>
        <Key bind:typed_key={typed_key} bind:is_typed_shift_key={is_typed_shift_key} flex={1.0} upper_case_key="#" lower_case_key="3"/>
        <Key bind:typed_key={typed_key} bind:is_typed_shift_key={is_typed_shift_key} flex={1.0} upper_case_key="$" lower_case_key="4"/>
        <Key bind:typed_key={typed_key} bind:is_typed_shift_key={is_typed_shift_key} flex={1.0} upper_case_key="%" lower_case_key="5"/>
        <Key bind:typed_key={typed_key} bind:is_typed_shift_key={is_typed_shift_key} flex={1.0} upper_case_key="&" lower_case_key="6"/>
        <Key bind:typed_key={typed_key} bind:is_typed_shift_key={is_typed_shift_key} flex={1.0} upper_case_key="'" lower_case_key="7"/>
        <Key bind:typed_key={typed_key} bind:is_typed_shift_key={is_typed_shift_key} flex={1.0} upper_case_key="(" lower_case_key="8"/>
        <Key bind:typed_key={typed_key} bind:is_typed_shift_key={is_typed_shift_key} flex={1.0} upper_case_key=")" lower_case_key="9"/>
        <Key bind:typed_key={typed_key} bind:is_typed_shift_key={is_typed_shift_key} flex={1.0}                    lower_case_key="0"/>
        <Key bind:typed_key={typed_key} bind:is_typed_shift_key={is_typed_shift_key} flex={1.0} upper_case_key="=" lower_case_key="-"/>
        <Key bind:typed_key={typed_key} bind:is_typed_shift_key={is_typed_shift_key} flex={2.5} />
    </div>
    <div class="segmant">
        <Key bind:typed_key={typed_key} bind:is_typed_shift_key={is_typed_shift_key} flex={1.5} />
        <Key bind:typed_key={typed_key} bind:is_typed_shift_key={is_typed_shift_key} flex={1.0} upper_case_key="Q" lower_case_key="q"/>
        <Key bind:typed_key={typed_key} bind:is_typed_shift_key={is_typed_shift_key} flex={1.0} upper_case_key="W" lower_case_key="w"/>
        <Key bind:typed_key={typed_key} bind:is_typed_shift_key={is_typed_shift_key} flex={1.0} upper_case_key="E" lower_case_key="e"/>
        <Key bind:typed_key={typed_key} bind:is_typed_shift_key={is_typed_shift_key} flex={1.0} upper_case_key="R" lower_case_key="r"/>
        <Key bind:typed_key={typed_key} bind:is_typed_shift_key={is_typed_shift_key} flex={1.0} upper_case_key="T" lower_case_key="t"/>
        <Key bind:typed_key={typed_key} bind:is_typed_shift_key={is_typed_shift_key} flex={1.0} upper_case_key="Y" lower_case_key="y"/>
        <Key bind:typed_key={typed_key} bind:is_typed_shift_key={is_typed_shift_key} flex={1.0} upper_case_key="U" lower_case_key="u"/>
        <Key bind:typed_key={typed_key} bind:is_typed_shift_key={is_typed_shift_key} flex={1.0} upper_case_key="I" lower_case_key="i"/>
        <Key bind:typed_key={typed_key} bind:is_typed_shift_key={is_typed_shift_key} flex={1.0} upper_case_key="O" lower_case_key="o"/>
        <Key bind:typed_key={typed_key} bind:is_typed_shift_key={is_typed_shift_key} flex={1.0} upper_case_key="P" lower_case_key="p"/>
        <Key bind:typed_key={typed_key} bind:is_typed_shift_key={is_typed_shift_key} flex={1.0} upper_case_key="@" lower_case_key="@"/>
        <Key bind:typed_key={typed_key} bind:is_typed_shift_key={is_typed_shift_key} flex={2.0} />
    </div>
    <div class="segmant">
        <Key bind:typed_key={typed_key} bind:is_typed_shift_key={is_typed_shift_key} flex={2.0} />
        <Key bind:typed_key={typed_key} bind:is_typed_shift_key={is_typed_shift_key} flex={1.0} upper_case_key="A" lower_case_key="a"/>
        <Key bind:typed_key={typed_key} bind:is_typed_shift_key={is_typed_shift_key} flex={1.0} upper_case_key="S" lower_case_key="s"/>
        <Key bind:typed_key={typed_key} bind:is_typed_shift_key={is_typed_shift_key} flex={1.0} upper_case_key="D" lower_case_key="d"/>
        <Key bind:typed_key={typed_key} bind:is_typed_shift_key={is_typed_shift_key} flex={1.0} upper_case_key="F" lower_case_key="f"/>
        <Key bind:typed_key={typed_key} bind:is_typed_shift_key={is_typed_shift_key} flex={1.0} upper_case_key="G" lower_case_key="g"/>
        <Key bind:typed_key={typed_key} bind:is_typed_shift_key={is_typed_shift_key} flex={1.0} upper_case_key="H" lower_case_key="h"/>
        <Key bind:typed_key={typed_key} bind:is_typed_shift_key={is_typed_shift_key} flex={1.0} upper_case_key="J" lower_case_key="j"/>
        <Key bind:typed_key={typed_key} bind:is_typed_shift_key={is_typed_shift_key} flex={1.0} upper_case_key="K" lower_case_key="k"/>
        <Key bind:typed_key={typed_key} bind:is_typed_shift_key={is_typed_shift_key} flex={1.0} upper_case_key="L" lower_case_key="l"/>
        <Key bind:typed_key={typed_key} bind:is_typed_shift_key={is_typed_shift_key} flex={1.0} upper_case_key="+" lower_case_key=";"/>
        <Key bind:typed_key={typed_key} bind:is_typed_shift_key={is_typed_shift_key} flex={1.0} upper_case_key="*" lower_case_key=":"/>
        <Key bind:typed_key={typed_key} bind:is_typed_shift_key={is_typed_shift_key} flex={1.5} />
    </div>
    <div class="segmant">
        <Key bind:typed_key={typed_key} bind:is_typed_shift_key={is_typed_shift_key} flex={2.5} upper_case_key="Shift" lower_case_key="Shift"/>
        <Key bind:typed_key={typed_key} bind:is_typed_shift_key={is_typed_shift_key} flex={1.0} upper_case_key="Z" lower_case_key="z"/>
        <Key bind:typed_key={typed_key} bind:is_typed_shift_key={is_typed_shift_key} flex={1.0} upper_case_key="X" lower_case_key="x"/>
        <Key bind:typed_key={typed_key} bind:is_typed_shift_key={is_typed_shift_key} flex={1.0} upper_case_key="C" lower_case_key="c"/>
        <Key bind:typed_key={typed_key} bind:is_typed_shift_key={is_typed_shift_key} flex={1.0} upper_case_key="V" lower_case_key="v"/>
        <Key bind:typed_key={typed_key} bind:is_typed_shift_key={is_typed_shift_key} flex={1.0} upper_case_key="B" lower_case_key="b"/>
        <Key bind:typed_key={typed_key} bind:is_typed_shift_key={is_typed_shift_key} flex={1.0} upper_case_key="N" lower_case_key="n"/>
        <Key bind:typed_key={typed_key} bind:is_typed_shift_key={is_typed_shift_key} flex={1.0} upper_case_key="M" lower_case_key="m"/>
        <Key bind:typed_key={typed_key} bind:is_typed_shift_key={is_typed_shift_key} flex={1.0} upper_case_key="<" lower_case_key=","/>
        <Key bind:typed_key={typed_key} bind:is_typed_shift_key={is_typed_shift_key} flex={1.0} upper_case_key=">" lower_case_key="."/>
        <Key bind:typed_key={typed_key} bind:is_typed_shift_key={is_typed_shift_key} flex={1.0} upper_case_key="?" lower_case_key="/"/>
        <Key bind:typed_key={typed_key} bind:is_typed_shift_key={is_typed_shift_key} flex={1.0} upper_case_key="_" lower_case_key="\"/>
        <Key bind:typed_key={typed_key} bind:is_typed_shift_key={is_typed_shift_key} flex={1.0} />
    </div>
</div>

<style>
    .keyboard {
        padding: .8rem;
        margin: 0 auto;
        border-radius: 1.5rem;
        background-color: #ffffff;
        box-sizing: border-box;
    }
    .segmant {
        display: flex;
        align-items: center;
        flex-direction: row;
        justify-content: center;
    }
    @media (orientation: landscape) and (max-height: 480px) {
        .keyboard {
            width: 100vw;
        }
    }
    @media (orientation: portrait) and (max-width: 720px) {
        .keyboard {
            width: 100vw;
        }
    }
</style>
