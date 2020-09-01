// ------------------------------------------------------- Challenge #1 - Print Hello World
const greeting = 'Hello World';

console.log(greeting);


//  ------------------------------------------------------- Challenge #2 - Triangle area and perimeter
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

// console.log(trianglePerimeter());



// ------------------------------------------------------- Challenge # 3 - Clock

const clock = (h, m) => {
    const HOURS_IN_SECONDS = 3600;
    const MINUTES_IN_SECONDS = 60;
    const result = (h * HOURS_IN_SECONDS) + (MINUTES_IN_SECONDS * m);

    return `In 32 hours and 20 minutes there is ${result} seconds`
}
// console.log(clock(32, 20));



// ------------------------------------------------------- Challenge #4 - Repeat the word
const repeatWord = () => {
    let askString = prompt('Enter a word');
    let askRepeatString = parseInt(prompt('Enter a number for repeat your word'));

    for(let i = 0; i < askRepeatString; i++) {
        console.log(askString);
    }
}
// repeatWord();



// ------------------------------------------------------- Challenge #5 - We need vowels?
