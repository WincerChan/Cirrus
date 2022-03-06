<script context="module">
    let url = new URL(`${window.backendAPI}/blog-search/v1/`);
    console.log(window.backendAPI);
</script>

<script lang="ts">
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
            class="flex-none  text-gray-100 hover:text-white hover:bg-indigo-500 bg-indigo-400 rounded-full ml-1 px-6 h-10 flex items-center"
        >
            <p class="text-xl">搜索</p>
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
                <div class="card-compact-list space-y-6" id="search-results">
                    {#each data.data as item}
                        <div
                            class="bg-[#fffffd] dark:bg-[#2e2e2e] rounded-md overflow-hidden font-sans transition ease-linear duration-300"
                        >
                            <div class="metadata px-4 py-4">
                                <a
                                    id="search-url"
                                    class="cursor-pointer"
                                    href={item.url}
                                >
                                    <h3
                                        id="search-title"
                                        class="text-[#404040] dark:text-[#d4d4d4] truncate w-full text-xl hover:text-cyan-700 dark:hover:text-orange-500"
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
                                class="text-center border-2 bg-[#fffffd] dark:bg-[#2e2e2e] rounded font-medium px-5 py-3 transition ease-linear duration-300 border-[#d4d4d8] hover:border-[#3F3F46] hover:border-[#3F3F46] dark:hover::border-[#a8a29e] "
                            >
                                Prev
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
                                class="text-center border-2 bg-[#fffffd] dark:bg-[#2e2e2e] rounded font-medium px-5 py-3 transition ease-linear duration-300 border-[#d4d4d8] hover:border-[#3F3F46] hover:border-[#3F3F46] dark:hover:border-[#a8a29e] "
                            >
                                Next
                            </button>
                        {/if}
                    </div>
                </div>
            {/if}
        {/await}
    {/if}
</div>
