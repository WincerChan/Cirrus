<script lang="ts">
    import { enc, AES } from "crypto-js";
    let password: string,
        show_input: boolean = true,
        on_focus: HTMLDivElement = false,
        err_msg = false;
    const ele: HTMLDivElement = document.getElementsByTagName("content")[0];
    function decrypt() {
        let key = password,
            cipher = ele.innerHTML;
        try {
            let decrypted = AES.decrypt(cipher, key);
            ele.innerHTML = decrypted.toString(enc.Utf8);
            ele.style.display = "block";
            show_input = false;
        } catch {
            err_msg = true;
        }
    }
</script>

{#if show_input}
    <div class="mt-2 mb-10 ml-6 flex items-start">
        <div class="w-56 sm:w-72 h-9 px-2 text-center ">
            <input
                type="password"
                placeholder="🔑 Input Password"
                bind:value={password}
                on:focus={() => (on_focus.style.width = "100%")}
                on:blur={() => (on_focus.style.width = "0")}
                class="transition mb-2 ease-linear px-2 py-1 z-10 relative duration-300 dark:bg-transparent bg-transparent border-[#0d9488] border-opacity-40 w-full border-b-2 focus:outline-none"
            />
            <div
                bind:this={on_focus}
                style="transition: width .2s;"
                class="w-0 -top-26px relative h-[2px] mx-auto self-center bg-[#0d9488] inline-block hover:w-10"
            />
        </div>
        <button
            on:click={decrypt}
            class="rounded-md px-3 py-2 text-sm bg-[#0d9488] hover:opacity-100 opacity-90 transition ease-linear duration-300 text-[#f1f5f9] dark:text-[#1E293B]"
            >Submit</button
        >
        {#if err_msg}
            <span id="error_msg" class="text-red-600 pl-6"
                >🙅Wrong Password！</span
            >
        {/if}
    </div>
{/if}
