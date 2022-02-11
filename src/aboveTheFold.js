const csjs = require('csjs-inject')
const bel = require('bel')

module.exports = aboveTheFold

function aboveTheFold() {
    const divaboveTheFold = bel`<div class=${css.aboveTheFold}>
        
        <div class=${css.textContainer}>
            <div>
                    <div>
                        <h6 class=${css.greeting}>I'm Taous Khoudour, call me <span>Mimi</span></h6>
                        <h3 class=${css.idesign}>I Design</h3>
                        <h1 class=${css.headerH1} >
                        Beautiful <span class=${css.ex}>Experiences</span> & <span class=${css.in}>Interfaces</span> that people love
                        </h1>
                        
                        <h3 class=${css.help}>I help startups and business, launch incredible and useful products that scale, <span class=${css.asap}>ASAP! <img src="https://i.ibb.co/zhw26Wh/line.png" alt="iamtaous"></span></h3>
                        </div>
                        
                        <div class=${css.ctaContainer}>
                        <a href="" class=${css.viewWork}>View Work</a>
                        <a href="" class=${css.letsTalk}>Let's Talk <img src="https://i.ibb.co/BwH728b/Arrow-Up-Right.png" alt="iamtaous"></a>
                    </div>            
            </div>
            <div class=${css.sm}>
                <a href=""><img src="https://i.ibb.co/58JyBjW/Behance-Logo.png" alt="iamtaous Behance"></a>
                <a href=""><img src="https://i.ibb.co/wN56LTX/Instagram-Logo.png" alt="iamtaous Instagram"></a>
                <a href=""><img src="https://i.ibb.co/vYfkZrh/Twitter-Logo.png" alt="iamtaous Twitter"></a>
                <a href=""><img src="https://i.ibb.co/nMrLgk3/Linkedin-Logo.png" alt="iamtaous Linkedin"></a>
            </div>
        </div>

        <div>
            <img src="https://i.ibb.co/2hgxNp1/img.png" alt="iamtaous">
        </div>

    </div>`
    return divaboveTheFold
}

const css = csjs`
    @import url('https://fonts.googleapis.com/css2?family=Barlow:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=MuseoModerno:wght@100;200;300;400;500;600;700;800;900&display=swap');
    :root {
        --blk : #0D0106 ;
        --blu: #2C0AEB ;
        --wht: #FBFBFF;
        --pink : #D81159;
    }
    body, html {
        background: var(--wht);
        padding: 0; 
        margin: 0; 
        box-sizing: border-box;
        color: var(--blk);
    }
    h1, h2, h3, h4, h5, h6, p ,a , span {
        padding: 0; 
        margin: 0; 
        box-sizing: border-box;
    }
    .aboveTheFold {
        width: 100%;
        height: 90vh;
        background: var(--wht);
        max-width: 1120px;
        margin: 0 auto;
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 72px;
    }
    .greeting {
        font-family: 'Barlow', sans-serif;
        font-style: normal;
        font-weight: 500;
        font-size: 16px;
        line-height: 24px;
        letter-spacing: 0.02em;
        color: var(--blk);
        padding: 0; 
        margin: 0; 
        box-sizing: border-box;
        margin-bottom: 16px;
    }
    .greeting span {
        font-family: 'MuseoModerno', cursive;
        font-style: normal;
        font-weight: 600;   
        color: var(--blu);
    }
    .idesign {
        font-family: 'Barlow', sans-serif;
        font-style: normal;
        font-weight: 600;
        font-size: 18px;
        line-height: 24px;
        letter-spacing: 0.02em;
        color: var(--blk);
        margin-bottom: 4px;
    }
    .headerH1 {
        font-family: 'MuseoModerno', cursive;
        font-style: normal;
        font-weight: 600;
        font-size: 32px;
        line-height: 40px;
        letter-spacing: 0.01em;
        color: var(--blk);
        margin-bottom: 32px;
    }
    .headerH1 .ex {
        color: var(--pink);
    }
    .headerH1 .in {
        color: var(--blu);
    }
    .help {
        font-family: 'Barlow', sans-serif;
        font-style: normal;
        font-weight: 600;
        font-size: 18px;
        line-height: 24px;
        letter-spacing: 0.03em;
        max-width: 443px;
    }
    .viewWork {
        text-align: center;
        padding: 8px 24px;
        background: var(--blu);
        border-radius: 24px;

        font-family: 'MuseoModerno', cursive;
        font-style: normal;
        font-weight: 600;
        font-size: 16px;
        line-height: 25px;
        letter-spacing: 0.01em;
        color: var(--wht);
        border: 2px solid transparent;

    }
    .viewWork:hover, .letsTalk:hover {
        background: var(--wht);
        border: 2px solid var(--blu);
    }
    .letsTalk {
        text-align: center;
        padding: 8px 24px;
        background: transparent;
        border-radius: 24px;

        font-family: 'MuseoModerno', cursive;
        font-style: normal;
        font-weight: 600;
        font-size: 16px;
        line-height: 25px;
        letter-spacing: 0.01em;
        color: var(--blu);
        border: 2px solid transparent;

        display: flex; 
        justify-content: center; 
        align-items: center;
        gap: 10px;
        width: fit-content;
        height: 100%;
    }
    .ctaContainer {
        display: flex; 
        align-items: center;
        gap: 16px;
        margin-top: 48px;
    }
    .textContainer {
        display: flex;
        flex-direction: column;
        gap: 160px;
    }
    .sm {
        display: flex; 
        flex-direction: row;
        gap: 24px;
    }
    .sm a {
        border-bottom: 2px solid transparent;
    }
    .sm a:hover {
        border-bottom: 2px solid var(--blu);
    }
    .asap img {
        position: relative;
        left: -54px;
        top: 10px;
    }
`