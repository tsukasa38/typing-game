<script lang="ts">
    import { onDestroy } from "svelte";

    let frame: number;
    let active: boolean;
    let last_time: number;
    export let elapsed_time: number = 0;
    export let power_on: boolean = false;

    $: active = power_on? startStopwatch(): stopStopwatch();

    function runningStopwatch(): void {
        frame = requestAnimationFrame(runningStopwatch);
        const time: number = window.performance.now();
        elapsed_time += time - last_time;
        last_time = time;
    }

    function startStopwatch(): boolean {
        last_time = window.performance.now();
        runningStopwatch();
        return true;
    }

    function stopStopwatch(): boolean {
        cancelAnimationFrame(frame);
        return false;
    }

    onDestroy(() => {
        if(active) {
            cancelAnimationFrame(frame);
        }
    });

</script>

<div class="container">
    <h1>{(elapsed_time/1000).toFixed(2)}</h1>
</div>

<style>
    .container {
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: #ffffff;
        border-radius: 50%;
        padding: 2rem 3rem;
    }
</style>
