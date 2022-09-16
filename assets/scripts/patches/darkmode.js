const setLS = (k, v) => {
    try {
        localStorage.setItem(k, v);
    } catch (e) { }
}

const removeLS = (k) => {
    try {
        localStorage.removeItem(k);
    } catch (e) { }
}

const getLS = (k) => {
    try {
        return localStorage.getItem(k);
    } catch (e) {
        return null
    }
}

const getCSSMediaQuery = () => {
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
}

const validColorModeKeys = {
    'dark': true,
    'light': true
}
const invertDarkModeObj = {
    'dark': 'light',
    'light': 'dark'
}

const hideSVG = (currentSetting) => {
    if (currentSetting === "dark") {
        document.getElementById("moon").style.display = 'none'
        document.getElementById("sun").style.display = ''
    } else {
        document.getElementById("sun").style.display = 'none'
        document.getElementById("moon").style.display = ''
    }
}

const toggleCustomDarkMode = () => {
    let currentSetting = getLS('theme');

    if (validColorModeKeys[currentSetting]) {
        currentSetting = invertDarkModeObj[currentSetting];
    } else if (currentSetting === null) {
        currentSetting = invertDarkModeObj[getCSSMediaQuery()];
    } else {
        return;
    }
    setLS('theme', currentSetting);
    hideSVG(currentSetting)
    return currentSetting;
}

const applyCustomDarkModeSettings = (mode) => {
    const currentSetting = mode || getLS('theme');

    if (validColorModeKeys[currentSetting]) {
        document.documentElement.setAttribute('class', currentSetting);
    } else {
        document.documentElement.setAttribute('class', getCSSMediaQuery());
    }
}
const patchDarkmode = () => {
    const toggleSwitch = document.querySelector('.theme-switch input[type="checkbox"]');
    toggleSwitch.addEventListener('change', () => {
        applyCustomDarkModeSettings(toggleCustomDarkMode())
    })
}

window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", e => {
    const curr = e.matches ? 'dark' : 'light'
    hideSVG(curr)
    document.documentElement.setAttribute('class', curr);
})

export default patchDarkmode;