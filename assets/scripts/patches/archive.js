const hideArchives = (target) => {
    let base = Number(target.dataset['id'])
    for (let index = 1; index <= target.dataset["index"]; index++) {
        document.getElementById(`s-${base + index}`).style.display = 'none'
        document.getElementById(`xx${base + index}`).classList.remove('card-shadow')
    }
    for (let index = 0; index < target.dataset["total"] - target.dataset["index"]; index++) {
        document.getElementById(`s-${base - index}`).style.display = ''
        document.getElementById(`xx${base - index}`).classList.remove('card-shadow')
    }
    target.classList.add('card-shadow')
}

export default hideArchives
