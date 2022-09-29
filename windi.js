const { Processor } = require('windicss/lib')
const { HTMLParser, CSSParser } = require('windicss/utils/parser')
const { StyleSheet: Ss } = require('windicss/utils/style')

const { promisify } = require("util");

const fs = require('fs')
const glob = require('glob')


const MATCH_CLASSES_FILES = '{layouts,assets}/**/*.{html,svg,svelte}'

// only allow one style file
const MATCH_STYLES_FILE = 'assets/css/windi.html'

const OUTPUT_STYLES_FILE = 'static/windi.css'

const allWriteFiles = [];

const writeFilePromise = promisify(fs.writeFile)
const renameFilePromise = promisify(fs.rename)
const restoreCompiledFiles = async () => {
    allWriteFiles.forEach(x => {
        x.then(file => {
            renameFilePromise(`${file}.cw`, file);
        })
    })
    fs.rmSync('./windi.js')
}

const replaceWithCompiledFiles = (fileHTMLs, fileStyles) => {
    for (const file in fileHTMLs) {
        allWriteFiles.push(renameFilePromise(file, `${file}.cw`)
            .then(() =>
                writeFilePromise(`${file}`, fileHTMLs[file])
            ).then(() => file)
        )
    }
    const outputStyle = Object.values(fileStyles).reduce((acc, curr) => acc.extend(curr), new Ss())
        .combine()
        .build(true)
    return Promise.all(allWriteFiles).then(() =>
        fs.writeFileSync(OUTPUT_STYLES_FILE, outputStyle)
    )
}

const processMatchedFiles = async (replaceSource) => {
    let matchedFiles = await glob.sync(MATCH_CLASSES_FILES),
        fileStyles = {},
        fileHTMLs = {};

    matchedFiles.forEach((file) => {
        if (file == MATCH_STYLES_FILE) return
        let content = fs.readFileSync(file).toString();
        let r = extractClasses(content)
        fileStyles[file] = r.styles;
        fileHTMLs[file] = r.outputHTML;
    })
    let styles = fs.readFileSync(MATCH_STYLES_FILE).toString()
    fileStyles[MATCH_STYLES_FILE] = extractStyles(styles);
    await replaceWithCompiledFiles(fileHTMLs, fileStyles);
}

const extractClasses = (html) => {
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

const extractStyles = (html) => {
    const processor = new Processor()
    const content = html.match(/(?<=<style[\r\n]*\s*lang\s?=\s?['"]windi["']>)[\s\S]*(?=<\/style>)/);
    const css = html.slice(content.index, content.index + content[0].length)
    const parser = new CSSParser(css, processor)
    return parser.parse()
}

module.exports = { processMatchedFiles, restoreCompiledFiles }