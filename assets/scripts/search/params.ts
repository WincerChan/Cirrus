class Params {
    static self: BlogSearchParams = {}
    static page = 1
    static pageSize = 8
    static Pages = () => {
        this.self.pages = `${this.page}-${this.pageSize}`
    }
    static Terms = (term: string) => {
        if (!this.self.terms) this.self.terms = []
        this.self.terms.push(term)
    }
    static Range = (range: string) => {
        this.self.range = range
    }
    static Q = (word: string) => {
        if (!this.self.q) this.self.q = []
        this.self.q.push(word)
    }
    static Clear = () => {
        this.self = {}
    }
    static New = (p: string) => {
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
export default Params