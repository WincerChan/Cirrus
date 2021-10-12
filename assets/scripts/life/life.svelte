<script context="module">
    const update = async () => {
        await tick();
        lazyLoadThing();
    };
</script>

<script>
    import { tick } from "svelte";

    import lazyLoadThing from "../lazyload/core";

    let element;
    let promise = fetch("https://live.itswincer.com/api/v0/douban").then(
        (resp) => {
            return resp.json();
        }
    );

    let placeholder = [0, 1, 2, 3, 4];
    $: update(element);
</script>

<div class="flex flex-wrap px-4 mb-4 items-end">
    {#await promise}
        {#each placeholder as l}
            <div class="px-2 w-1/5 rounded-md sm:w-1/4 pb-6">
                <figure
                    class="text-center text-sm truncate text-beargray bg-contentbg link-card rounded"
                >
                    <div class="mx-auto  bg-slightgray animate-pulse h-52" />
                    <div
                        class="block mx-auto mt-1 truncate p-smallest h-5 w-2/3 bg-slightgray animate-pulse"
                    />
                </figure>
            </div>
        {/each}
    {:then douban_infos}
        {#each douban_infos as douban}
            <div class="px-2 w-1/5 sm:w-1/4 pb-6">
                <figure
                    class="text-center text-sm truncate text-beargray  bg-contentbg link-card link-card-shadow rounded-md"
                >
                    <a
                        href="https://{douban.type}.douban.com/subject/{douban.id}"
                        target="_blank"
                        class="mx-0"
                    >
                        <img
                            class="mx-auto lazy min-h-48 rounded"
                            title="{douban.date} {douban.type == 'movie'
                                ? '看过'
                                : '读过'}"
                            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVQImWP4+vXrfwAJoQPf9FzjxgAAAABJRU5ErkJggg=="
                            data-src={douban.poster}
                            alt=""
                        />
                    </a>
                    <span class="block truncate p-smallest" title={douban.title}
                        >{douban.title}</span
                    >
                </figure>
            </div>
        {/each}
        <span bind:this={element} />
    {/await}
</div>
