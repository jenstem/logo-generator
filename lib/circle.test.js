const Circle = require('./circle');

describe('Circle', () => {
    test('should render a circle with choosen color', () => {
        const Shape = new Circle();
        Shape.setcolorShape("red");
        expect(Shape.render()).toEqual(`<circle cx="50" cy="150" r="40" fill="red" /><text x="25" y ="160" font-size="30" fill="\"></text>`);
        // const circle = new Circle();
        // circle.setColor("red");
        // expect(circle.render()).toEqual(`<circle cx="25" cy="75" r="20" fill="red" />`);
    })
});