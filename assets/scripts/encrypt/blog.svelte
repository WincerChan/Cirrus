<script>
    import { enc, AES } from "crypto-js";
    let password,
        input_pass,
        err_msg = false;
    const ele = document.getElementsByTagName("content")[0];
    function decrypt() {
        let key = enc.Utf8.parse(password),
            cipher = enc.Hex.parse(ele.innerHTML);
        let decrypted = AES.decrypt(cipher, key);
        try {
            ele.innerHTML = decrypted.toString(enc.Utf8);
            ele.classList.remove("hidden");
            input_pass.remove();
        } catch {
            console.log("Error Password");
            err_msg = true;
        }
    }
</script>

<div class="my-4 ml-6" bind:this={input_pass}>
    <input
        type="text"
        placeholder="🔑 Input Password, Press `Enter`"
        bind:value={password}
        class="transition ease-linear duration-300 border-hyper w-64 border-b-2 px-2 py-1 focus:border-hyper focus:outline-none"
    />
    <button
        on:click={decrypt}
        class="border rounded p-2 text-base bg-hyper text-[#f1f5f9] dark:text-[#1E293B]"
        >提交</button
    >
    {#if err_msg}
        <span id="error_msg" class="text-red-600 pl-6">🙅Wrong Password！</span>
    {/if}
</div>
