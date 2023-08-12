class Shape {
    constructor() {
this.colorShape = "";
this.colorText = "";
this.text = "";
    }
    setcolorShape(colorShape) {
        this.colorShape = colorShape;
    }
    setcolorText(colorText) {
        this.colorText = colorText;
    }
    settext(text) {
        this.text = text;
    }
}

class SVG {
    constructor() {
        this.shape = "";
    }
    setshape(shape) {
        this.shape = shape;
    }
    render() {
        return `<svg height="300" width="200" xmlns="http://www.w3.org/2000/svg">${this.shape}</svg>`
    }
}

module.exports = { SVG, Shape };