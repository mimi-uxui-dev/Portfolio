const csjs = require('csjs-inject')
const bel = require('bel')

module.exports = inputInteger

function inputInteger() {

    const input = bel`<input 
        class=${css.inputInteger} 
        type="number" 
        placeholder="11" 
    >`

    return input
}

const css = csjs`
    .inputInteger {
        background-color: pink;
        border: none;
        padding: 8px;
    }
`