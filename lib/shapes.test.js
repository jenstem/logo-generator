const Square = require('./square');

describe('Square', () => {
    test('should render a square with choosen color', () => {
        const Shape = new Square();
        Shape.setcolorShape("blue");
        expect(Shape.render()).toEqual(`<rect x=\"10\" y=\"10\" width=\"90\" height=\"90\" fill=\"blue\" /><text x=\"30\" y =\"65\" font-size=\"30\" fill=\"\"></text>`);
    })
});