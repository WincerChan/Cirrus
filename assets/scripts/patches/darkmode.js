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

const resetRootDarkModeAttributeAndLS = () => {
    document.documentElement.removeAttribute('data-theme');
    removeLS('theme');
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

    return currentSetting;
}

const applyCustomDarkModeSettings = (mode) => {
    const currentSetting = mode || getLS('theme');

    if (currentSetting === getCSSMediaQuery()) {
        resetRootDarkModeAttributeAndLS();
    } else if (validColorModeKeys[currentSetting]) {
        document.documentElement.setAttribute('data-theme', currentSetting);
    } else {
        resetRootDarkModeAttributeAndLS();
    }
}
const patchDarkmode = () => {
    const toggleSwitch = document.querySelector('.theme-switch input[type="checkbox"]');
    toggleSwitch.addEventListener('change', () => {
        applyCustomDarkModeSettings(toggleCustomDarkMode())
    })
}

export default patchDarkmode;