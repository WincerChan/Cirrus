<script context="module">
    let path = document.location.pathname;
    let encrypted = window.blog_encrypted;
    let music_id = window.music_id || undefined;
</script>

<script lang="ts">
    import MovieCollects from "./life/life.svelte";
    import SearchBlog from "./search/blog.svelte";
    import EncryptBlog from "./encrypt/blog.svelte";
    import MusicPlayer from "./music/music.svelte";
</script>

{#if path === "/life/"}
    <MovieCollects />
{:else if path === "/search/"}
    <SearchBlog />
{:else if encrypted}
    <EncryptBlog />
{:else if music_id}
    <MusicPlayer {music_id} />
{/if}
