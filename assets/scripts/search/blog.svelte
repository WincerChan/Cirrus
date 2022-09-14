<script context="module">
    let url = new URL(`${window.backendAPI}/blog-search/v1/`);
    console.log(window.backendAPI);
</script>

<script lang="ts">
    import { space } from "svelte/internal";
    import Params from "./params";
    let promise: Promise<SearchResult> = Promise.resolve({});
    let fake_result = [0, 1, 2, 3];
    let query_params = "";
    let show_result = false;
    function fetchResults() {
        show_result = true;
        Params.New(query_params);
        Params.Pages();
        url.search = new URLSearchParams(Params.self).toString();
        promise = fetch(url).then((resp) => resp.json());
    }
    $: if (show_result) document.getElementById("search-hint").hidden = true;
</script>

<div>
    <div class="flex mt-4 mb-6 md:mx-0 mx-2">
        <input
            type="text"
            bind:value={query_params}
            placeholder="请输入关键字"
            id="search-params"
            class="h-10 mr-1 flex-grow rounded-full outline-none px-6 md:px-5 px-3"
        />
        <button
            id="search-button"
            on:click={fetchResults}
            class="flex-none border-1 border-[#425066] rounded-full ml-1 px-6 h-10 flex items-center"
        >
            <p class="text-lg">搜索</p>
        </button>
    </div>
    {#if show_result}
        {#await promise}
            <div class="mb-4 md:px-2">
                <p
                    class="text-sm text-[#404040] dark:text-[#d4d4d4] w-28 h-5 bg-gray-200 animate-pulse"
                />
            </div>
            <div class="card-compact-list space-y-6">
                {#each fake_result as _}
                    <div
                        class=" bg-gray-200 animate-pulse rounded-md transition ease-linear duration-300 h-[9rem]"
                    />
                {/each}
            </div>
        {:then data}
            {#if data.err_msg}
                <p class="text-xl text-red-600">{data.err_msg}</p>
            {:else}
                <div class="mb-4 md:px-2">
                    <p class="text-sm text-[#404040] dark:text-[#d4d4d4]">
                        共搜索到<span
                            id="search-number"
                            class="w-6 text-center inline-block"
                            >{data.count}</span
                        >篇文章
                    </p>
                </div>
                <style>
                    b {
                        font-weight: bold;
                    }
                </style>
                <div class="card-compact-list space-y-6" id="search-results">
                    {#each data.data as item}
                        <div
                            class="bg-[#fffffd] dark:bg-[#2e2e2e] rounded-md overflow-hidden font-sans transition ease-linear duration-300 card-outline"
                        >
                            <div class="metadata px-4 py-4">
                                <a
                                    id="search-url"
                                    class="cursor-pointer"
                                    href={item.url}
                                >
                                    <h3
                                        id="search-title"
                                        class=" text-[#392f41] dark:text-[#f3f9f1] truncate w-full text-xl hover:text-[#065279] dark:hover:text-[#ffa631]"
                                        contenteditable="false"
                                        bind:innerHTML={item.title}
                                    />
                                </a>
                                <div
                                    class="w-full mt-3 text-[#3F3F46] dark:text-[#a8a29e]  font-headline pb-3 sm:pb-0"
                                >
                                    <p class="text-justify">
                                        <span
                                            id="search-date"
                                            class="h-4 mr-1 items-center text-[#44403c] dark:text-[#d6d3d1]"
                                            >{item.date.split("T")[0]}</span
                                        >
                                        <span
                                            id="search-snippet"
                                            contenteditable="false"
                                            bind:innerHTML={item.snippet}
                                        />
                                        ...
                                    </p>
                                </div>
                            </div>
                        </div>
                    {/each}
                </div>
                <div
                    class="mt-16 flex justify-between text-[#3F3F46] dark:text-[#a8a29e]  uppercase font-headline"
                >
                    <div>
                        {#if Params.page > 1}
                            <button
                                id="search-prev"
                                on:click={() => {
                                    Params.page--;
                                    fetchResults();
                                }}
                                class="mr-auto my-2 hover:text-[#065279] dark:hover:text-[#ffa631] flex transition ease-linear duration-200 inline-flex items-center"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke-width="1.5"
                                    stroke="currentColor"
                                    class="w-6 h-6"
                                >
                                    <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        d="M15.75 19.5L8.25 12l7.5-7.5"
                                    />
                                </svg>

                                <span class="text-lg ml-4"> Prev </span>
                            </button>
                        {/if}
                    </div>
                    <div>
                        {#if !(data.data.length < Params.pageSize || Params.page * Params.pageSize == data.count)}
                            <button
                                id="search-next"
                                on:click={() => {
                                    Params.page++;
                                    fetchResults();
                                }}
                                class="ml-auto my-2 hover:text-[#065279] dark:hover:text-[#ffa631] flex transition ease-linear duration-200 inline-flex items-center"
                            >
                                <span class="text-lg mr-4"> Next </span>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke-width="1.5"
                                    stroke="currentColor"
                                    class="w-6 h-6"
                                >
                                    <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        d="M8.25 4.5l7.5 7.5-7.5 7.5"
                                    />
                                </svg>
                            </button>
                        {/if}
                    </div>
                </div>
            {/if}
        {/await}
    {/if}
</div>
