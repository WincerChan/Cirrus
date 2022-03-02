const { Processor } = require('windicss/lib')
const { HTMLParser, CSSParser } = require('windicss/utils/parser')
const { StyleSheet: Ss } = require('windicss/utils/style')
const htmlparser2 = require('htmlparser2')

const fs = require('fs')
const glob = require('glob')


const MATCH_CLASSES_FILES = '{layouts,assets}/**/*.{html,svg,svelte}'

// only allow one style file
const MATCH_STYLES_FILE = 'assets/css/base.windi'

const OUTPUT_STYLES_FILE = 'static/windi.css'

const replaceWithCompiledFiles = (fileHTMLs, fileStyles) => {
    for (const file in fileHTMLs) {
        fs.writeFileSync(`${file}`, fileHTMLs[file])
    }
    const outputStyle = Object.values(fileStyles).reduce((acc, curr) => acc.extend(curr), new Ss())
        .combine()
        .build(true)
    fs.writeFileSync(OUTPUT_STYLES_FILE, outputStyle)
}

const processMatchedFiles = async () => {
    let matchedFiles = await glob.sync(MATCH_CLASSES_FILES),
        fileStyles = {},
        fileHTMLs = {};

    matchedFiles.forEach(file => {
        let content = fs.readFileSync(file).toString();
        let r = extractClasses(content)
        fileStyles[file] = r.styles;
        fileHTMLs[file] = r.outputHTML;
    })
    let styles = fs.readFileSync(MATCH_STYLES_FILE).toString()
    fileStyles[MATCH_STYLES_FILE] = extractStyles(styles);
    replaceWithCompiledFiles(fileHTMLs, fileStyles);
}

const extractClasses = (html,) => {
    const processor = new Processor()
    const parser = new HTMLParser(html)
    const preflightSheet = processor.preflight(html)

    const PREFIX = 'wir-'
    const outputCSS = []
    let outputHTML = ''
    let indexStart = 0
    parser.parseClasses().forEach((p) => {
        outputHTML += html.substring(indexStart, p.start)

        const style = processor.compile(p.result, PREFIX)
        outputCSS.push(style.styleSheet)
        outputHTML += [style.className, ...style.ignored].join(' ')
        indexStart = p.end
    })
    outputHTML += html.substring(indexStart)

    const styles = outputCSS
        .reduce((acc, curr) => acc.extend(curr), preflightSheet)
    return {
        styles,
        outputHTML
    }
}

const extractStyles = (css) => {
    const processor = new Processor()
    const parser = new CSSParser(css, processor)
    return parser.parse()
}

processMatchedFiles()