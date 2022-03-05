<script context="module">
    let path = document.location.pathname;
    let encrypted = window.blog_encrypted || false;
    let music = window.music_id || false;
</script>

<script lang="ts">
    import MovieCollects from "./life/life.svelte";
    import SearchBlog from "./search/blog.svelte";
    import EncryptBlog from "./encrypt/blog.svelte";
    import MusicPlayer from "./music/music.svelte";

    import "./entrypoint.js";
</script>

{#if path === "/life/"}
    <MovieCollects />
{:else if path === "/search/"}
    <SearchBlog />
{:else if encrypted}
    <EncryptBlog />
{:else if music}
    <MusicPlayer />
{/if}
