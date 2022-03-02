const { Processor } = require('windicss/lib')
const { HTMLParser, CSSParser } = require('windicss/utils/parser')
const htmlparser2 = require('htmlparser2')

const fs = require('fs')
const glob = require('glob')


const getMatchFiles = async () => {
    let allFiles = await glob.sync('./assets/css/*.html');
    for (const i in allFiles) {
        let t = fs.readFileSync(allFiles[i]).toString();
        console.log(generateStyles(t))
    }
}
function generateStyles(html) {
    // Get windi processor
    const processor = new Processor()

    console.log(htmlparser2.parseDocument(html))
    // Parse all classes and put into one line to simplify operations
    const htmlClasses = new HTMLParser(html)
        .parseClasses()
        .map(i => i.result)
        .join(' ')

    // Generate preflight based on the HTML we input
    const preflightSheet = processor.preflight(html)

    // Process the HTML classes to an interpreted style sheet
    const interpretedSheet = processor.interpret(htmlClasses).styleSheet

    // Build styles
    const APPEND = false
    const MINIFY = false
    const styles = interpretedSheet.extend(preflightSheet, APPEND).build(MINIFY)

    return styles
}
getMatchFiles()