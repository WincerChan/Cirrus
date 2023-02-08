const remove = () => {
    let sum = document.querySelector('#summary');

    if (sum.clientHeight < sum.scrollHeight) {
        sum.children[0].style.display = ""
    } else {
        sum.children[0].style.display = "none"
    }
}

const hideEllipsis = () => {
    let path = document.location.pathname;
    if (path !== "/") return
    remove()
    window.addEventListener('resize', () => {
        remove()
    })
}
export default hideEllipsis;