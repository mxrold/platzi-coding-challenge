// Challenge #1 - Print Hello World
const greeting = 'Hello World';

console.log(greeting);


// Challenge #2 - Triangle area and perimeter
const triangleArea = () => {
    const base = parseFloat(prompt('Enter base value'));
    const height = parseFloat(prompt('Enter height value'));
    const result = (base * height) / 2;

    return result;
}

const trianglePerimeter = () => {
    const side1 = parseFloat(prompt('Enter side one'));
    const side2 = parseFloat(prompt('Enter side two'));
    const side3 = parseFloat(prompt('Enter side three'));

    if (side1 === side2 && side1 === side3) {
        const result = (side1 * 3);
        return(`The triangle is equilateral, it's perimeter is ${result} and it's area is ${triangleArea()}`)
    }
    else if (side1 != side2 && side1 != side3) {
        const result = (side1 * 3);
        return(`The triangle is scalene, it's perimeter is ${result} and it's area is ${triangleArea()}`)
    }
    else {
        const result = (side1 + side2 + side3);
        return(`The triangle is isosceles, it's perimeter is ${result} and it's area is ${triangleArea()}`)
    }
}

console.log(trianglePerimeter());