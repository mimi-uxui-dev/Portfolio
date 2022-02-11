const csjs = require('csjs-inject')
const bel = require('bel')

module.exports = portfolio

function portfolio() {
    const divPortfolio = bel`<div 
        class=${css.portfolio}> portfolio div </div>`
    return divPortfolio
}

const css = csjs`
    .portfolio {
    }
`