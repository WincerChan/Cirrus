import fetch from "../patches/fetch";

const BACKENDAPI = `${backendAPI}/blog-search/v1/`
class Params {
    static self = {}
    static page = 1
    static pageSize = 8
    static Pages = () => {
        this.self.pages = `${this.page}-${this.pageSize}`
    }
    static Terms = (term) => {
        if (!this.self.terms) this.self.terms = []
        this.self.terms.push(term)
    }
    static Range = (range) => {
        this.self.range = range
    }
    static Q = (word) => {
        if (!this.self.q) this.self.q = []
        this.self.q.push(word)
    }
    static Clear = () => {
        this.self = {}
    }
    static New = (p) => {
        this.Clear()
        p.split(" ").forEach(t => {
            if (t.startsWith("tags:") || t.startsWith("category:")) {
                this.Terms(t)
            } else if (t.startsWith("range:")) {
                this.Range(t.slice(6))
            } else {
                this.Q(t)
            }
        })
    }
}

class Search {
    static url = new URL(BACKENDAPI)
    static loadHTMLElement = () => {
        if (!window.location.pathname.startsWith("/search/")) return
        this.hints = document.getElementById('search-hint')
        this.items = document.getElementById('search-items')
        this.results = document.getElementById('search-results')
        this.item = document.getElementById('search-item-tempate').content
        this.counts = document.getElementById('search-number')
        this.prev = document.getElementById('search-prev')
        this.next = document.getElementById('search-next')
        this.search = document.getElementById('search-button')
        this.input = document.getElementById('search-params')
        this.input.onkeypress = this.CheckSearch
        this.prev.onclick = this.clickPrev
        this.next.onclick = this.clickNext
        this.search.onclick = this.fetchResults
    }
    static constructParams = () => {
        this.hints.style.display = "none"
        this.results.style.display = "block"
        const inputValue = document.getElementById("search-params").value
        Params.New(inputValue)
    }
    static clearItemsChilds = () => {
        let ele = this.items
        while (ele.firstChild) {
            ele.removeChild(ele.firstChild)
        }
    }
    static setPaginate = (result) => {
        if (Params.page == 1) {
            this.prev.style.display = "none"
        } else {
            this.prev.style.display = "block"
        }
        if (result.data.length < Params.pageSize || Params.page * Params.pageSize == result.count) {
            this.next.style.display = "none"
        } else {
            this.next.style.display = "block"
        }
    }
    static fetchResults = async () => {
        this.constructParams()
        Params.Pages()
        this.url.search = new URLSearchParams(Params.self).toString()
        this.clearItemsChilds()
        let resp = await fetch(this.url),
            result = await resp.json()
        result.data.forEach(r => {
            this.item.querySelector('#search-title').innerHTML = r.title
            this.item.querySelector('#search-url').href = r.url
            this.item.querySelector('#search-date').innerText = (new Date(r.date * 1000)).toISOString().split('T')[0]
            this.item.querySelector('#search-snippet').innerHTML = r.snippet + "..."
            let clone = document.importNode(this.item, true);
            this.items.appendChild(clone)
        })
        this.counts.innerText = result.count
        this.setPaginate(result)
    }
    static clickPrev = () => {
        Params.page--
        this.fetchResults()
    }
    static clickNext = () => {
        Params.page++
        this.fetchResults()
    }
    static CheckSearch = (event) => {
        if (event !== undefined) {
            var keyCode = event.which || event.keyCode
            if (keyCode !== 13) return
        }
        Params.page = 1
        this.fetchResults()
    }
}
const RegisterHTMLElement = Search.loadHTMLElement

export default RegisterHTMLElement;