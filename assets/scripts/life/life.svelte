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
    let promise = fetch("https://api.itswincer.com/douban/v1/").then((resp) => {
        return resp.json();
    });

    let placeholder = [0, 1, 2, 3];
    $: update(element);
</script>

<div class="px-6">
    <div class="seprator my-5" />
    <div class="flex justify-center w-full mb-10">
        <p class="text-2xl ">
            我看过的书籍和电影（{new Date().getFullYear()}）
        </p>
    </div>
    <div class="flex flex-wrap mb-4 items-end">
        {#await promise}
            {#each placeholder as l}
                <div class="px-2 w-1/5 rounded-md <sm:w-1/4 pb-6">
                    <figure
                        class="text-center text-sm truncate text-beargray bg-contentbg link-card rounded"
                    >
                        <div
                            class="mx-auto  bg-slightgray animate-pulse xl:h-52 h-24"
                        />
                        <div
                            class="block mx-auto mt-1 truncate p-smallest h-5 w-2/3 bg-slightgray animate-pulse"
                        />
                    </figure>
                </div>
            {/each}
        {:then douban_infos}
            {#each douban_infos as douban}
                <div class="px-2 w-1/5 <sm:w-1/4 pb-6">
                    <figure
                        class="text-center text-sm truncate text-beargray  bg-contentbg link-card link-card-shadow rounded-md"
                    >
                        <a
                            href="https://{douban.type}.douban.com/subject/{douban.id}"
                            target="_blank"
                            class="mx-0"
                        >
                            <img
                                class="mx-auto lazy rounded"
                                title="{douban.date} {douban.type == 'movie'
                                    ? '看过'
                                    : '读过'}"
                                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVQImWP4+vXrfwAJoQPf9FzjxgAAAABJRU5ErkJggg=="
                                data-src={douban.poster}
                                alt=""
                            />
                        </a>
                        <span
                            class="block truncate p-smallest"
                            title={douban.title}>{douban.title}</span
                        >
                    </figure>
                </div>
            {/each}
            <span bind:this={element} />
        {/await}
    </div>
</div>
