const Triangle = require('./triangle');

describe('Triangle', () => {
    test('should render a triangle with choosen color'), () => {
        const Shape = new Triangle();
        Shape.setColor("green");
        expect(Shape.render()).toEqual(`<polygon points="250,60 100,400 400,400" fill="green" />`);
    }
});