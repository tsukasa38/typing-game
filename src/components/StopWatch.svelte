<script lang="ts">
    import { onDestroy } from "svelte";

    let frame: number;
    let last_time: number;
    let active: boolean = false;
    let elapsed_time: number = 0;


    function update(): void {
        frame = requestAnimationFrame(update);
        const time: number = window.performance.now();
        elapsed_time += time - last_time;
        last_time = time;
    }

    function startStopwatch(): void {
        if(!active) {
            last_time = window.performance.now();
            active = true;
            update();
        }
    }

    function stopStopwatch(): void {
        if(active) {
            cancelAnimationFrame(frame);
            active = false;
        }
    }

    onDestroy(() => {
        if(active) {
            cancelAnimationFrame(frame);
        }
    });

</script>

<div class="container">
    <h1>{(elapsed_time/1000).toFixed(2)}</h1>
    <div class="buttonGroup">
        <button on:click={startStopwatch}>Start</button>
        <button on:click={stopStopwatch}>Stop</button>
    </div>
</div>

<style>
    .container {
        display: flex;
        align-items: center;
        flex-direction: column;
        justify-content: center;
        background-color: #ffffff;
        border-radius: 50%;
        padding: 2rem 3rem;
    }
    .buttonGroup {
        display: flex;
        justify-content: center;
    }
</style>
