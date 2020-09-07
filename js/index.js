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
const paragraph = 'En un lugar de la Mancha, de cuyo nombre no quiero acordarme, no ha mucho tiempo que vivía un hidalgo de los de lanza en astillero, adarga antigua, rocín flaco y galgo corredor. Una olla de algo más vaca que carnero, salpicón las más noches, duelos y quebrantos los sábados, lantejas los viernes, algún palomino de añadidura los domingos, consumían las tres partes de su hacienda. El resto della concluían sayo de velarte, calzas de velludo para las fiestas, con sus pantuflos de lo mesmo, y los días de entresemana se honraba con su vellorí de lo más fino. Tenía en su casa una ama que pasaba de los cuarenta y una sobrina que no llegaba a los veinte, y un mozo de campo y plaza que así ensillaba el rocín como tomaba la podadera. Frisaba la edad de nuestro hidalgo con los cincuenta años. Era de complexión recia, seco de carnes, enjuto de rostro, gran madrugador y amigo de la caza. Quieren decir que tenía el sobrenombre de «Quijada», o «Quesada», que en esto hay alguna diferencia en los autores que deste caso escriben, aunque por conjeturas verisímiles se deja entender que se llamaba «Quijana». Pero esto importa poco a nuestro cuento: basta que en la narración dél no se salga un punto de la verdad.';

const takeOutVowels = (str) => {
    let vowels = /[aAeEiIoOuU]/g;
    let withOutVowels = str.replace(vowels, '');
    
    return(withOutVowels)
}
// console.log(takeOutVowels(paragraph))



// ------------------------------------------------------- Challenge #6 - Calculator
const calculator = () => {
    const number1 = parseFloat(prompt('Enter a number 1'));
    const operator = prompt('Enter a operator: "+", "-", "/", "*"');
    const number2 = parseFloat(prompt('Enter a number 2'));

    switch(operator) {
        case '+': 
            console.log(`The result of the ${number1} + ${number2} its: ${number1 + number2}`);
            break
        case '-': 
            console.log(`The result of the ${number1} - ${number2} its: ${number1 - number2}`);
            break
        case '/': 
            console.log(`The result of the ${number1} / ${number2} its: ${number1 / number2}`);
            break
        case '*': 
            console.log(`The result of the ${number1} * ${number2} its: ${number1 * number2}`);
            break
        default: 
            console.log('Enter a valid operator')
    }
}
// calculator()



// ------------------------------------------------------- Challenge #7 - Rock, paper or scissors
const gameComputer = () => {
    let numberRandom = (Math.random() * 10).toFixed(2);
    if(numberRandom < 3.33) {
        return "Rock";
    }
    else if (numberRandom > 3.33 && numberRandom < 6.66) {
        return "Paper";
    }
    else {
        return "Scissors";
    }
}

const gamePlayer = () => {
    const askForPlay = prompt('For to play: Enter "rock", "paper" or "scissors"');
    const validate = askForPlay.charAt(0).toUpperCase() + askForPlay.slice(1);
    return validate;
}

const winner = () => {
    let computer = gameComputer();
    let player = gamePlayer();

    if (player !== computer) {
        return (`Player: ${player} - Computer: ${computer} | Winner: Computer`);
    }
    if (player === 'Rock' && computer === 'Scissors' ||
             player === 'Paper' && computer === 'Rock' ||
             player === 'Scissors' && computer === 'Paper') {
        return(`Player: ${player} - Computer: ${computer} | Winner: Player`);
    }
    else {
        return (`Player: ${player} - Computer: ${computer} | Result: Tie`);
    }
}
// console.log(winner())