<script lang="ts">
    import { onDestroy } from "svelte";

    let frame: number;
    let active: boolean;
    let last_time: number;
    export let power_on: boolean = false;
    export let remaining_time: number = null;

    $: active = power_on? startTimer(): stopTimer();

    function runningTimer(): void {
        frame = requestAnimationFrame(runningTimer);
        const time: number = window.performance.now();
        remaining_time -= time - last_time;

        if(remaining_time >= 0) { 
            last_time = time;
        } else {
            remaining_time = 0;
            cancelAnimationFrame(frame);
        }
    }

    function startTimer(): boolean {
        last_time = window.performance.now();
        runningTimer();
        return true;
    }

    function stopTimer(): boolean {
        cancelAnimationFrame(frame);
        return false;
    }

    onDestroy(() => {
        if(active) {
            cancelAnimationFrame(frame);
        }
    });

</script>

<slot></slot>
