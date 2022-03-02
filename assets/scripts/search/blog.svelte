<script context="module">
    let url = new URL(`${window.backendAPI}/blog-search/v1/`);
    console.log(window.backendAPI);
</script>

<script>
    import Params from "./params";
    let promise = Promise.resolve([]);
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
    <div class="flex mt-4 mb-6 md:mx-2">
        <input
            type="text"
            bind:value={query_params}
            placeholder="请输入关键字"
            id="search-params"
            class="h-10 mr-1 flex-grow rounded-full outline-none px-6 md:px-3"
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
                    class="text-sm text-deepgray w-28 h-5 bg-gray-200 animate-pulse"
                />
            </div>
            <div class="card-compact-list space-y-6">
                {#each fake_result as _}
                    <div
                        class=" bg-gray-200 animate-pulse rounded-md link-card h-[9rem]"
                    />
                {/each}
            </div>
        {:then data}
            {#if data.err_msg}
                <p class="text-xl text-red-600">{data.err_msg}</p>
            {:else}
                <div class="mb-4 md:px-2">
                    <p class="text-sm text-deepgray">
                        共搜索到<span
                            id="search-number"
                            class="font-code w-6 text-center inline-block"
                            >{data.count}</span
                        >篇文章
                    </p>
                </div>
                <div class="card-compact-list space-y-6" id="search-results">
                    {#each data.data as item}
                        <div
                            class="bg-contentbg rounded-md overflow-hidden font-sans link-card"
                        >
                            <div class="metadata px-4 py-4">
                                <a
                                    id="search-url"
                                    class="cursor-pointer"
                                    href={item.url}
                                >
                                    <h3
                                        id="search-title"
                                        class="text-deepgray truncate w-full text-xl hover:text-hyper"
                                        contenteditable="false"
                                        bind:innerHTML={item.title}
                                    />
                                </a>
                                <div
                                    class="w-full mt-3 text-beargray font-headline sm:pb-3"
                                >
                                    <p class="text-justify">
                                        <span
                                            id="search-date"
                                            class="h-4 mr-1 items-center text-tagborder"
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
                    class="mt-16 flex justify-between text-beargray uppercase font-headline"
                >
                    <div>
                        {#if Params.page > 1}
                            <button
                                id="search-prev"
                                on:click={() => {
                                    Params.page--;
                                    fetchResults();
                                }}
                                class="text-center border-2 bg-contentbg rounded font-medium px-5 py-3 link-card border-lightgray hover:border-beargray"
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
                                class="text-center border-2 bg-contentbg rounded font-medium px-5 py-3 link-card border-lightgray hover:border-beargray"
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
