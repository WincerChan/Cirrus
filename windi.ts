import { Processor } from 'windicss/lib'
import { HTMLParser, CSSParser } from 'windicss/utils/parser'
import { StyleSheet as Ss } from 'windicss/utils/style'

import fs from 'fs'
import glob from 'glob'


const MATCH_CLASSES_FILES = '{layouts,assets}/**/*.{html,svg,svelte}'

// only allow one style file
const MATCH_STYLES_FILE = 'assets/css/windi.html'

const OUTPUT_STYLES_FILE = 'static/windi.css'

const replaceWithCompiledFiles = (fileHTMLs: { [x: string]: string }, fileStyles: { [s: string]: unknown }) => {
    let allWriteFiles = [];
    for (const file in fileHTMLs) {
        allWriteFiles.push(fs.writeFileSync(`${file}`, fileHTMLs[file]))
    }
    Promise.all(allWriteFiles);
    const outputStyle = Object.values(fileStyles).reduce((acc, curr) => acc.extend(curr), new Ss())
        .combine()
        .build(true)
    fs.writeFileSync(OUTPUT_STYLES_FILE, outputStyle)
}

const processMatchedFiles = async (replaceSource: boolean) => {
    let matchedFiles = await glob.sync(MATCH_CLASSES_FILES),
        fileStyles = {},
        fileHTMLs = {};

    matchedFiles.forEach((file: string) => {
        if (file == MATCH_STYLES_FILE) return
        let content = fs.readFileSync(file).toString();
        let r = extractClasses(content)
        fileStyles[file] = r.styles;
        if (replaceSource)
            fileHTMLs[file] = r.outputHTML;
    })
    let styles = fs.readFileSync(MATCH_STYLES_FILE).toString()
    fileStyles[MATCH_STYLES_FILE] = extractStyles(styles);
    replaceWithCompiledFiles(fileHTMLs, fileStyles);
}

const extractClasses = (html: string) => {
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

const extractStyles = (html: string) => {
    const processor = new Processor()
    const content = html.match(/(?<=<style[\r\n]*\s*lang\s?=\s?['"]windi["']>)[\s\S]*(?=<\/style>)/);
    const css = html.slice(content.index, content.index + content[0].length)
    const parser = new CSSParser(css, processor)
    return parser.parse()
}

module.exports = processMatchedFiles