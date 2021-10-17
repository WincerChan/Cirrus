
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
export default Params