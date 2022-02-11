const csjs = require('csjs-inject')
const bel = require('bel')

module.exports = navbar

function navbar() {
    const divNavbar = bel`<nav class=${css.navbar}>
        <a href="/">
            <div class=${css.logo}></div>
        </a>
        <div>
            <a href="#aboutme">About Me</a>
            <a href="#work">Work</a>
            <a href="#contact">Contact</a>
        </div>
    </nav>`
    return divNavbar
}

const css = csjs`
    @import url('https://fonts.googleapis.com/css2?family=Barlow:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=MuseoModerno:wght@100;200;300;400;500;600;700;800;900&display=swap');
    :root {
        --blk : #0D0106 ;
        --blu: #2C0AEB ;
    }
    .navbar {
        width: 100%; 
        max-width: 1120px;
        margin: 0 auto;
        padding: 24px 0;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    a {
        color: var(--blk) ;
        text-decoration: none;
        font-family: 'Barlow', sans-serif;
        font-style: normal;
        font-weight: 600;
        font-size: 18px;
        line-height: 22px;
        letter-spacing: 0.02em;
    }
    a:hover {
        transition: all ease 0.3s;
        color: var(--blu);
    }
    .navbar div {
        display: flex;
        justify-content: space-between;
        align-items: center;
        gap: 44px ;
    }
    .logo {
        width: 48px;
        height: 48px;
        background-color: var(--blu) ;
        border-radius: 50%;
    }
`