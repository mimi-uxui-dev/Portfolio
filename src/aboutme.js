const csjs = require('csjs-inject')
const bel = require('bel')

module.exports = aboutme

function aboutme() {
    const divaboutme = bel`<div 
        class=${css.aboutme}> aboutme div </div>`
    return divaboutme
}

const css = csjs`
    .aboutme {
    }
`