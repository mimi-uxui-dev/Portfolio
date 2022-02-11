const csjs = require('csjs-inject')
const bel = require('bel')

module.exports = footer

function footer() {
    const divfooter = bel`<div 
        class=${css.footer}> footer div </div>`
    return divfooter
}

const css = csjs`
    .footer {
    }
`