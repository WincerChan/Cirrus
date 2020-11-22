import z from "./analytics/google";
import addToggleMenu from './patches/menu';
import lazyLoadThing from './lazyload/core'
import registerServiceWorker from './lazyload/serviceworker'
import patchDarkmode from './patches/darkmode'

window.ga_tid = 'UA-101362832-1';
window.ga_api = 'https://divine-credit-5273.loerfy.workers.dev'
z();

window.addEventListener("load", () => {
    patchDarkmode()
    addToggleMenu()
    lazyLoadThing();
    registerServiceWorker();
})
