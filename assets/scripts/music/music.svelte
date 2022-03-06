<script lang="ts">
    class SongProgress {
        duration: number;
        elapsed_time: number;

        paused: boolean;
        player_thumb: HTMLDivElement;
        progress_bar: HTMLProgressElement;
        constructor() {
            this.elapsed_time = 0;
            this.duration = Infinity;
            this.paused = true;
        }
        get remaining() {
            return this.duration - this.elapsed_time;
        }
        playPercent(current: number | null) {
            if (current === null) {
                current = this.elapsed_time;
            }
            return current / this.duration;
        }
        displayed(rest: number | null) {
            if (rest === null) {
                rest = this.remaining;
            }
            let minute = Math.floor(rest / 60);
            let second = Math.floor(rest - minute * 60);
            let format_m = minute < 10 ? "0" + minute : minute;
            let format_s = second < 10 ? "0" + second : second;
            return `${format_m}:${format_s}`;
        }
        timeGoOn(time: number) {
            this.elapsed_time = time;
            if (!this.player_thumb) {
                return;
            }
            this.setPlayerThumbPosition();
        }
        togglePlay(player: HTMLAudioElement) {
            this.paused ? player.play() : player.pause();
        }
        setPlayerThumbPosition() {
            this.player_thumb.style.left = `${
                this.playPercent(null) * this.progress_bar.offsetWidth - 6
            }px`;
        }
    }
    export let music_id: string;
    let s = new SongProgress(),
        player: HTMLAudioElement,
        currentTime: number = 0;
    $: s.timeGoOn(currentTime);
    let music_info = `https://api.itswincer.com/cloudmusic/v1/detail?ids=[${music_id}]`,
        music_link = `https://music.163.com/song/media/outer/url?id=${music_id}.mp3`,
        promise = fetch(music_info).then((resp) => {
            return resp.json();
        });

    function handleClick(e: MouseEvent) {
        const { left, right } = this.getBoundingClientRect();
        player.currentTime =
            ((e.clientX - left) * s.duration) / s.progress_bar.offsetWidth;
    }
    function handleMove(e: any) {
        if (e.buttons !== 1) return;
        const clientX =
            e.type === "touchmove" ? e.touches[0].clientX : e.clientX;
        const { left, right } = this.getBoundingClientRect();
        currentTime =
            (s.duration * (clientX - left)) / s.progress_bar.offsetWidth;
    }
</script>

<div
    class="leading-5 h-20 mx-6 mb-6 flex-col flex relative text-white shadow-lg"
>
    <div
        style="background: rgba(0, 0, 0, 0) linear-gradient(rgba(0, 0, 0, 0.72), rgba(0, 0, 0, 0.8)) repeat scroll 0% 0%"
        class="left-0 top-0 right-0 absolute flex-col"
    >
        <div class="flex relative flex-row text-gray-300">
            <div class="w-20 h-20 relative flex-none bg-gray-200">
                {#await promise}
                    <div
                        class="w-full h-full relative bg-gray-200 animate-pulse"
                    />
                {:then music_info}
                    <div id="music-player" class="w-full h-full relative">
                        <div
                            class="bg-center bg-no-repeat bg-contain h-full relative"
                            style="background-image: url({music_info.songs[0]
                                .album.picUrl});"
                        >
                            <button
                                title="播放"
                                on:click={() => {
                                    s.togglePlay(player);
                                }}
                                class="cursor-pointer transition duration-75 ease-linear transform hover:scale-105 px-2 w-1/2 h-1/2 left-1/4 top-1/4 rounded-full overflow-hidden border border-white bg-gray-500 absolute"
                            >
                                {#if s.paused}
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
                        <div class="truncate my-2 mx-3 block">
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
                                bind:currentTime
                                bind:duration={s.duration}
                                bind:paused={s.paused}
                                src={music_link}
                            />
                            <div
                                class="m-0 w-full cursor-auto flex-grow py-2 relative flex items-center px-3"
                            >
                                {#await promise}
                                    <div
                                        class="h-1 flex-grow bg-gray-200 animate-pulse pl-3 sm:mr-3"
                                    />
                                {:then music_info}
                                    <div class="flex-grow sm:mr-3 ">
                                        <div
                                            class="cursor-pointer h-4"
                                            on:click={handleClick}
                                            on:mousemove={handleMove}
                                            on:touchmove|preventDefault={handleMove}
                                            on:mouseleave={() => {
                                                s.player_thumb.classList.add(
                                                    "hidden"
                                                );
                                            }}
                                            on:focus
                                            on:mouseover={() => {
                                                s.player_thumb.classList.remove(
                                                    "hidden"
                                                );
                                            }}
                                        >
                                            <progress
                                                bind:this={s.progress_bar}
                                                class="h-1 z-10 bottom-[5px] bg-white bg-opacity-30 relative w-full bg-gray-200 flex-grow text-gray-100"
                                                value={s.playPercent(
                                                    currentTime
                                                )}
                                            />
                                            <div
                                                bind:this={s.player_thumb}
                                                class="bottom-4 h-[10px] w-[10px] bg-white hidden -left-1 rounded-full relative"
                                            />
                                        </div>
                                    </div>
                                {/await}
                                <div
                                    class="items-center inline-flex"
                                    style="line-height: 25px;"
                                >
                                    <div class="sm:hidden block">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            class="h-6 w-4"
                                            fill="none"
                                            viewBox="0 0 14 24"
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
                                    <div class="flex font-code">
                                        <span class="sm:block hidden"
                                            >{s.displayed(currentTime)}</span
                                        >
                                        <span class="sm:hidden block"
                                            >{s.displayed(
                                                s.duration - currentTime
                                            )}</span
                                        >
                                        <span class="hidden sm:block sm:px-1">
                                            /
                                        </span>
                                        <span class="hidden sm:block"
                                            >{s.displayed(s.duration)}</span
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
