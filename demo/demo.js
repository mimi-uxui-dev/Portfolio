const csjs = require('csjs-inject')
const bel = require('bel')
const inputInteger = require("..")


function demo() {
    const output = bel`<div class=${css.output}>0</div>`

    const page = bel`<div class=${css.demo}>
        <h1>inpd ntergerrr demo</h1>
        ${output}
        <div class=${css.container}>
            ${inputInteger()}
            ${inputInteger()}
            ${inputInteger()}
        </div>  
    </div>`

    return page
}


const css = csjs`

`

document.body.appendChild(demo())