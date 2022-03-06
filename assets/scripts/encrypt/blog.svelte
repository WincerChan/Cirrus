<script lang="ts">
    import { enc, AES } from "crypto-js";
    let password: string,
        show_input: boolean = true,
        err_msg = false;
    const ele = document.getElementsByTagName("content")[0];
    function decrypt() {
        let key = enc.Utf8.parse(password),
            cipher = enc.Hex.parse(ele.innerHTML);
        let decrypted = AES.decrypt(cipher, key);
        try {
            ele.innerHTML = decrypted.toString(enc.Utf8);
            ele.classList.toggle("hidden");
            show_input = false;
        } catch {
            err_msg = true;
        }
    }
</script>

{#if show_input}
    <div class="mt-2 mb-10 ml-6">
        <input
            type="password"
            placeholder="🔑 Input Password, Press `Enter`"
            bind:value={password}
            class="transition ease-linear duration-300 dark:bg-transparent bg-transparent border-[#0d9488] w-56 sm:w-72 border-b-2 px-2 py-1 focus:border-hyper focus:outline-none"
        />
        <button
            on:click={decrypt}
            class="rounded-md px-3 py-2 text-sm bg-[#0d9488] hover:opacity-80 transition ease-linear duration-300 text-[#f1f5f9] dark:text-[#1E293B]"
            >Submit</button
        >
        {#if err_msg}
            <span id="error_msg" class="text-red-600 pl-6"
                >🙅Wrong Password！</span
            >
        {/if}
    </div>
{/if}
