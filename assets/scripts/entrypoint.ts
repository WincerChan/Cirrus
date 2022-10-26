import lazyLoadThing from './lazyload/core'
import registerServiceWorker from './lazyload/serviceworker'
import patchDarkmode from './patches/darkmode'
import hideArchives from './patches/archive'
import registerUmamiEvents from "./patches/umami";


window.hideArchives = hideArchives

window.addEventListener("load", () => {
    patchDarkmode()
    lazyLoadThing();
    registerServiceWorker();
    registerUmamiEvents()
})
