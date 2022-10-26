const registerUmamiEvents = () => {
    const eventEls = document.querySelectorAll('*[data-track]')
    eventEls.forEach(el => {
        const attr = el.getAttribute('data-track')
        el.onclick = () => window.umami(attr)
    })
}
export default registerUmamiEvents;