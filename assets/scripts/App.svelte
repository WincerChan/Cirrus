<script context="module">
    let location = window.location;
    let encrypted = window.blog_encrypted || false;
</script>

<script>
    import { onMount } from "svelte";

    import "./entrypoint.js";
    let Place;
    onMount(async () => {
        if (location.pathname.startsWith("/life/"))
            Place = (await import("./life/life.svelte")).default;
        else if (encrypted)
            Place = (await import("./encrypt/blog.svelte")).default;
    });
</script>

<svelte:component this={Place} />
