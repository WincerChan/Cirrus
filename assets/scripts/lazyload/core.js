import loadDisqus from './disqus'

const loadLazy = (entry, observer) => {
    if (entry.isIntersecting) {
        let lazy = entry.target;
        if (lazy.tagName === "DIV") {
            let x = lazy.dataset.src;
            if (navigator.userAgent.indexOf("Safari") !== -1 || navigator.userAgent.indexOf("MSIE") !== -1) {
                x = x.replace("cover.webp", "cover.jpg");
            }
            lazy.style.backgroundImage = `url(${x})`;
        } else if (lazy.tagName === "BUTTON") {
            loadDisqus()
        } else {
            lazy.src = lazy.dataset.src;
        }
        lazy.classList.remove("lazy");
        observer.unobserve(lazy)
    }
}
const lazyLoadThing = () => {
    let lazyThings = [].slice.call(document.getElementsByClassName("lazy"));
    if ("IntersectionObserver" in window) {
        let lazyObserver = new IntersectionObserver(function (entries, observer) {
            entries.forEach(entry => loadLazy(entry, lazyObserver));
        });
        lazyThings.forEach(function (lazyImage) {
            lazyObserver.observe(lazyImage);
        });
    }
}
window.lazyLoadThing = lazyLoadThing;

export default lazyLoadThing;