import loadDisqus from './disqus'

const loadLazy = (entry, observer) => {
    if (entry.isIntersecting) {
        let lazy = entry.target;
        if (lazy.tagName === "DIV") {
            lazy.style.backgroundImage = `url(${lazy.dataset.src})`;
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