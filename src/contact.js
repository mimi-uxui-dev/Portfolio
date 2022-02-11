const csjs = require('csjs-inject')
const bel = require('bel')

module.exports = contact

function contact() {
    const divcontact = bel`<div 
        class=${css.contact}> contact div </div>`
    return divcontact
}

const css = csjs`
    .contact {
    }
`