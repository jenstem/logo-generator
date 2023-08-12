const Circle = require('./circle');

describe('Circle', () => {
    test('should render a circle with choosen color'), () => {
        const Shape = new Circle();
        Shape.setColor("red");
        expect(Shape.render()).toEqual(`<circle cx="25" cy="75" r="20" fill="red" />`);
    }
});