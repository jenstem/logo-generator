const Triangle = require('./triangle');

describe('Triangle', () => {
    test('should render a triangle with choosen color', () => {
        const Shape = new Triangle();
        Shape.setcolorShape("green");
        expect(Shape.render()).toEqual(`<polygon points="50,14 100,100 0,100" fill="green" /><text x="25" y ="85" font-size="30" fill="\"></text>`);
    })
});