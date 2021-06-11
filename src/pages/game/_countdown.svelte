<script lang="ts">
    import { onMount } from "svelte";
    import type { Status } from "../../lib/game.svelte";
    import Timer from "../../components/Timer.svelte";
    
    export let status: Status;

    let time: number = 3000;
    let display_time: number;
    let power_on: boolean = false;

    $: if(time === 0) { status = "run"; }
    $: display_time = Math.ceil(time/1000);

    onMount(() => {
        power_on = true;
    });
</script>

<Timer bind:remaining_time={time} power_on={power_on} >
    <div class="container">
        <p class="time">{display_time}</p>
    </div>
</Timer>

<style>
    .container {
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: #ffffff;
        border-radius: 50%;
        padding: 1.5rem 6rem;
    }
    .time {
        margin: 0;
        font-size: 3.8rem;
        font-weight: bold;
    }
</style>