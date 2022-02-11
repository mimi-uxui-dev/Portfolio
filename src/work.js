const csjs = require('csjs-inject')
const bel = require('bel')

module.exports = work

function work() {
    const divwork = bel`<div 
        class=${css.work}> work div </div>`
    return divwork
}

const css = csjs`
    .work {
    }
`