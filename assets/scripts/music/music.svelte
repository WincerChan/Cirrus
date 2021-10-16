<script context="module">
    let music_id = window.music_id;
    let music_link = `https://music.163.com/song/media/outer/url?id=${music_id}.mp3`;
</script>

<script>
    let time,
        duration,
        paused = true;
    let player_thumb,
        show_thumb = false;
    let show_time;
    let player, progress_bar;
    let promise = fetch(
        `https://live.itswincer.com/cloudmusic/v1/detail?ids=[${music_id}]`
    ).then((resp) => {
        return resp.json();
    });

    function formatTime(rest) {
        let minute = Math.floor(rest / 60);
        let second = Math.floor(rest - minute * 60);
        let format_m = minute < 10 ? "0" + minute : minute;
        let format_s = second < 10 ? "0" + second : second;
        return `${format_m}:${format_s}`;
    }

    function secToMinSec() {
        if (time === undefined && duration === undefined) {
            show_time = "00:00";
            return;
        }
        let rest = duration - (time || 0);
        show_time = formatTime(rest);
        if (player_thumb) updateThumb(time);
    }
    function togglePlay() {
        paused ? player.play() : player.pause();
    }
    function updateTime(offset) {
        player.currentTime = (duration * offset) / progress_bar.offsetWidth;
        player_thumb.style.left = `${offset - 4}px`;
    }
    function updateThumb() {
        player_thumb.style.left = `${
            (time / duration) * progress_bar.offsetWidth - 4
        }px`;
    }
    function handleClick(e) {
        const { left, right } = this.getBoundingClientRect();
        updateTime(e.clientX - left);
    }
    function handleMove(e) {
        if (e.buttons !== 1) return;
        const clientX =
            e.type === "touchmove" ? e.touches[0].clientX : e.clientX;
        const { left, right } = this.getBoundingClientRect();
        updateTime(clientX - left);
    }
    $: if (duration) secToMinSec(time);
</script>

<div
    class="leading-5 h-20 mx-6 mb-6 flex-col flex relative text-white shadow-lg"
>
    <div
        style="background: rgba(0, 0, 0, 0) linear-gradient(rgba(0, 0, 0, 0.72), rgba(0, 0, 0, 0.8)) repeat scroll 0% 0%"
        class="left-0 top-0 right-0 absolute flex-col"
    >
        <div class="flex relative flex-row text-gray-300">
            <div class="w-20 h-20 relative flex-none">
                {#await promise}
                    <div
                        class="w-full h-full relative bg-gray-200 animate-pulse"
                    />
                {:then music_info}
                    <div class="w-full h-full relative">
                        <div
                            class="bg-center bg-no-repeat bg-contain h-full relative"
                            style="background-image: url({music_info.songs[0]
                                .album.picUrl});"
                        >
                            <button
                                title="播放"
                                on:click={togglePlay}
                                style="background: rgba(0, 0, 0, 0.5) none repeat scroll 0% 0%;"
                                class="cursor-pointer shadow-button transition duration-75 ease-linear hover:scale-105 px-2 w-1/2 h-1/2 left-1/4 top-1/4 rounded-full overflow-hidden border border-white bg-gray-500 absolute"
                            >
                                {#if paused}
                                    <svg
                                        style="width: 100%; height: 100%; color: white; "
                                        viewBox="0 0 26 26"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <title>播放</title>
                                        <path
                                            d="M7.712 22.04a.732.732 0 0 1-.806.007.767.767 0 0 1-.406-.703V4.656c0-.31.135-.544.406-.703.271-.16.54-.157.806.006l14.458 8.332c.266.163.4.4.4.709 0 .31-.134.546-.4.71L7.712 22.04z"
                                            fill="currentColor"
                                            fill-rule="evenodd"
                                        />
                                    </svg>
                                {:else}
                                    <svg
                                        viewBox="0 0 26 26"
                                        xmlns="http://www.w3.org/2000/svg"
                                        style="width: 100%; height: 100%; color: white;"
                                        ><title>暂停</title><g
                                            fill="currentColor"
                                            fill-rule="evenodd"
                                            ><rect
                                                x="5"
                                                y="3"
                                                width="5"
                                                height="20"
                                                rx="1"
                                            /><rect
                                                x="16"
                                                y="3"
                                                width="5"
                                                height="20"
                                                rx="1"
                                            /></g
                                        ></svg
                                    >
                                {/if}
                            </button>
                        </div>
                    </div>
                {/await}
            </div>
            <div class="relative w-full">
                <div class="flex">
                    <div class="h-20 text-sm relative w-full">
                        <div class="truncate m-2 block">
                            {#await promise}
                                <div
                                    class="bg-gray-200 h-4 mb-1 animate-pulse w-20"
                                />
                                <div
                                    class="bg-gray-200 h-4 animate-pulse w-10"
                                />
                            {:then music_info}
                                <div
                                    style="line-height: 19px;"
                                    class="font-semibold overflow-hidden overflow-ellipsis text-white"
                                >
                                    <span dir="auto"
                                        >{music_info.songs[0].name}</span
                                    >
                                </div>
                                <div
                                    style="line-height: 19px;"
                                    class="overflow-ellipsis font-extralight text-white"
                                >
                                    <span dir="auto"
                                        >{music_info.songs[0].artists[0]
                                            .name}</span
                                    >
                                </div>
                            {/await}
                        </div>
                        <div
                            dir="ltr"
                            class="my-0 bottom-0 flex-nowrap justify-between items-center w-full flex-row absolute flex"
                        >
                            <audio
                                bind:this={player}
                                bind:currentTime={time}
                                bind:duration
                                bind:paused
                                src={music_link}
                            />
                            <div
                                class="m-0 w-full cursor-auto flex-grow py-2 relative flex items-center px-2"
                            >
                                {#await promise}
                                    <div
                                        class="h-1 flex-grow bg-gray-200 animate-pulse mr-2 sm:mr-0"
                                    />
                                {:then music_info}
                                    <div class="flex-grow mr-2 sm:mr-0">
                                        <div
                                            style="height: 18px;"
                                            class="cursor-pointer"
                                            on:click={handleClick}
                                            on:mousemove={handleMove}
                                            on:touchmove|preventDefault={handleMove}
                                        >
                                            <progress
                                                bind:this={progress_bar}
                                                class="h-1 relative mb-1 w-full bg-gray-200 flex-grow text-gray-100"
                                                style="background-color: rgba(255, 255, 255, 0.3);"
                                                value={time / duration || 0}
                                            />
                                            <div
                                                bind:this={player_thumb}
                                                style="height: 11px; width: 11px; background-color: rgba(255, 255, 255, 1)"
                                                class="bottom-4 -left-1 rounded-full shadow-button relative"
                                            />
                                        </div>
                                    </div>
                                {/await}
                                <div
                                    class="items-center inline-flex"
                                    style="line-height: 25px;"
                                >
                                    <div class="hidden sm:block">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            class="h-6 w-5"
                                            fill="none"
                                            viewBox="0 0 8 24"
                                            stroke="currentColor"
                                        >
                                            <path
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                                stroke-width="1"
                                                d="M11 12H6"
                                            />
                                        </svg>
                                    </div>
                                    <div class="flex">
                                        <span class="w-10 block sm:hidden"
                                            >{formatTime(time || 0)}</span
                                        >
                                        <span class="hidden sm:block w-10"
                                            >{show_time}</span
                                        >
                                        <span class="sm:hidden block px-1">
                                            /
                                        </span>
                                        <span class="w-10 sm:hidden block"
                                            >{formatTime(duration)}</span
                                        >
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
