const csjs = require('csjs-inject')
const bel = require('bel')
const navbar = require("../src/navbar")
const aboveTheFold = require("../src/aboveTheFold")


function demo() {
    const page = bel`<div class=${css.mainContainer}>
            ${navbar()}
            ${aboveTheFold()}   
    </div>`

    return page
}


const css = csjs`
    .mainContainer {
        margin: 0;
        padding: 0;
    }

`

document.body.appendChild(demo())