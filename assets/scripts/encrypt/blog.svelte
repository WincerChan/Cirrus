<script>
    import { enc } from "crypto-js";
    let password;
    const ele = document.getElementsByTagName("content")[0];
    const aes_block_size = 16;
    function appendLeft(passwd, length) {
        pwd = "";
        for (let i = passwd.length; i < 16; i++) pwd += "a";
        return pwd + passwd;
    }
    function decrypt() {
        pwd = appendLeft(pwd, aes_block_size);
        let key = CryptoJS.enc.Utf8.parse(pwd),
            encryptedHexStr = CryptoJS.enc.Hex.parse(ele.innerHTML),
            encryptedBase64Str = CryptoJS.enc.Base64.stringify(encryptedHexStr);
        decrypted = CryptoJS.AES.decrypt(encryptedBase64Str, key, {
            iv: key,
            mode: CryptoJS.mode.CBC,
            padding: CryptoJS.pad.Pkcs7,
        });
        try {
            ele.innerHTML = decrypted.toString(enc.Utf8);
            ele.classList.remove("hidden");
            document.getElementById("input").remove();
        } catch {
            console.log("Error Password");
            document.getElementById("error_msg");
        }
    }
</script>

<div id="input" class="my-4">
    <input
        type="text"
        placeholder="🔑 Input Password, Press `Enter`"
        bind:value={password}
        onkeydown="EnterPress"
        onkeypress="EnterPress(event)"
        class="transition ease-linear duration-300 border-hyper w-64 border-b-2 px-2 py-1 focus:border-hyper focus:outline-none"
    />
    <span id="error_msg" class="text-red-600 pl-6 hidden"
        >🙅Wrong Password！</span
    >
</div>
