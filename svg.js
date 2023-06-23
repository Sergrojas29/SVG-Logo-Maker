class Svg {
    constructor(text, textcolor, shape, shapecolor) {
        this.logo = text.toUpperCase(),
        this.logoColor = textcolor,
        this.shape = {
            rectangle: `
            <g>
            <rect x="50" class="rectangle" width="200" height="200"/>
            </g>`,
            circle: `
            <g>
            <circle class="circle" cx="150" cy="100" r="100"/>
            </g>`,
            triangle:`
            <g>
            <polygon class="triangle" points="150,0 34.5,200 265.5,200 	"/>
            </g>`
        },
        this.shapeColor = shapecolor,


        this.template = 
`<?xml version="1.0" encoding="utf-8"?>
<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
viewBox="0 0 300 200" style="enable-background:new 0 0 300 200;" xml:space="preserve">
<style type="text/css">
    .rectangle{fill:${this.shapeColor};}
    .circle{fill:${this.shapeColor};}
    .triangle{fill:${this.shapeColor};}
    .text{
        fill: ${this.logoColor};
        font-family:'MyriadPro-Regular';
        font-size:167.5636px;
    }
</style>

${this.shape[shape]}

<g>
    <text x="0%" y ="75%" class="text">${this.logo}</text>
</g>

</svg>
`
    }
}


module.exports = Svg