<script context="module">
    let location = window.location;
</script>

<script>
    import { onMount } from "svelte";

    import "./entrypoint.js";
    let Place;
    onMount(async () => {
        if (location.pathname.startsWith("/life/")) {
            Place = (await import("./life/life.svelte")).default;
        }
    });
</script>

<svelte:component this={Place} />
