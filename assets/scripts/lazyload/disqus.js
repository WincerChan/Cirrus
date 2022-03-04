import fetch from "../patches/fetch";

const instant_load = () => {
    const d = document,
        s = d.createElement('script'),
        btn = document.getElementById('load-disqus');
    s.src = `https://${disqusUserName}.disqus.com/embed.js`;
    s.setAttribute('data-timestamp', + new Date());
    (d.head || d.body).appendChild(s);
    btn.remove();
}

const loadDisqus = () => {
    document.getElementById('load-disqus').onclick = instant_load;
    console.log('Trying auto load disqus...');
    fetch('https://disqus.com/next/config.json', { timeout: 100 })
        .then(() => {
            instant_load()
        })
        .catch(() => console.log('Auto load disqus timeout.'))
}

export default loadDisqus;