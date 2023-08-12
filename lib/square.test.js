const Square = require('./square');

describe('Square', () => {
    test('should render a square with choosen color'), () => {
        const Shape = new Square();
        Shape.setColor("blue");
        expect(Shape.render()).toEqual(`<rect x="10" y="10" width="30" height="30" fill="blue" />`);
    }
});