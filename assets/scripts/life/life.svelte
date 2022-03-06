<script context="module">
    const update = async () => {
        await tick();
        lazyLoadThing();
    };
</script>

<script lang="ts">
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
                <div class="px-2 sm:w-1/5 rounded-md w-1/4 pb-6">
                    <figure
                        class="text-center text-sm truncate text-[#3F3F46] dark:text-[#a8a29e]  bg-[#fffffd] dark:bg-[#2e2e2e] bg-[#fffffd] dark:bg-[#2e2e2e]  transition ease-linear duration-300 rounded"
                    >
                        <div
                            class="mx-auto bg-[#e4e4e7] dark:bg-[#2f1e2e] animate-pulse xl:h-52 h-24"
                        />
                        <div
                            class="block mx-auto mt-1 truncate p-[1px] h-5 w-2/3 bg-[#e4e4e7] dark:bg-[#2f1e2e] animate-pulse"
                        />
                    </figure>
                </div>
            {/each}
        {:then douban_infos}
            {#each douban_infos as douban}
                <div class="px-2 sm:w-1/5 w-1/4 pb-6">
                    <figure
                        class="text-center text-sm truncate text-[#3F3F46] dark:text-[#a8a29e]   bg-[#fffffd] dark:bg-[#2e2e2e] transition ease-linear duration-300 transition ease-linear duration-300-shadow rounded-md"
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
                            class="block truncate p-[1px]"
                            title={douban.title}>{douban.title}</span
                        >
                    </figure>
                </div>
            {/each}
            <span bind:this={element} />
        {/await}
    </div>
</div>
