<script>
    import { enc, AES, mode, pad } from "crypto-js";
    let password, input_pass;
    $: err_msg = null;
    const ele = document.getElementsByTagName("content")[0];
    const aes_block_size = 16;
    function fillToPassword() {
        let pwd = "";
        for (let i = password.length; i < aes_block_size; i++) pwd += "a";
        return pwd + password;
    }
    function decrypt() {
        let pwd = fillToPassword();
        console.log(pwd);
        let key = enc.Utf8.parse(pwd),
            encryptedHexStr = enc.Hex.parse(ele.innerHTML),
            encryptedBase64Str = enc.Base64.stringify(encryptedHexStr);
        let decrypted = AES.decrypt(encryptedBase64Str, key, {
            iv: key,
            mode: mode.CBC,
            padding: pad.Pkcs7,
        });
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
        class="border rounded p-2 text-base bg-hyper text-bqbg">提交</button
    >
    {#if err_msg}
        <span id="error_msg" class="text-red-600 pl-6">🙅Wrong Password！</span>
    {/if}
</div>
