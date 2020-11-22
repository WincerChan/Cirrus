const fetch = (url, { timeout, ...options } = {}) => {
    const controller = new AbortController(),
        signal = controller.signal;
    if (timeout) {
        setTimeout(() => controller.abort(), timeout);
        return window.fetch(url, { signal: signal, ...options })
    }
    return window.fetch(url, { ...options })
}

export default fetch;