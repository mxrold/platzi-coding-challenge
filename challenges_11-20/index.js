// ------------------------------------------------------- Challenge #11 - Password generator
const conditions = () => {
    let askUser = parseInt(prompt('If you want your password to have:Lower case: Press 1 || Uppercase and lowercase letters: Press 2 || Uppercase, lowercase and numbers: Press 3 || Uppercase, lowercase, numbers and special characters: Press 4'))

    const lowercase = ['abcdefghijklmnopqrstuvwxyz']
    const uppercase = ['ABCDEFGHIJKLMNOPQRSTUVWXYZ'];
    const simbols = ['~!#/*._-$%^&'];
    const numbers = ['0123456789'];

    switch(askUser) {
        case 1:
            return (lowercase + lowercase);
            break;
        case 2:
            return (lowercase + uppercase);
            break;
        case 3:
            return (lowercase + uppercase + numbers);
            break;
        case 4:
            return (lowercase + uppercase + numbers + simbols); 
            break;
        default:
            console.log('Enter a valid value');      
    }
}
const generator = () => {
    let askTotal = parseInt(prompt('Enter the password length'));
    let getCond = conditions();
    let result = [];

    for (let i = 0; i < askTotal; i++) {
        result += getCond[Math.floor(Math.random() * getCond.length)];  
    }
    console.log(result);
}
 //generator()



 //  ------------------------------------------------------- Challenge #12 - Next birthday
const TODAY = new Date();
const ONEDAY = 1000 * 60 * 60 * 24;

const nextBirthday = (t, day) => {
    let dayUser = parseInt(prompt('Enter your birthday'));
    let monthUser = parseInt(prompt('Enter your birthday month')) - 1;

    let birthday = new Date(t.getFullYear(), monthUser, dayUser);
    let diff = Math.abs(t - birthday);
    let result = Math.floor(diff / day);

    if (birthday > t) {
        return (result);
    } else if (birthday < t) {
        return Math.abs(result - 365);
    }
}
// console.log(nextBirthday(TODAY, ONEDAY))



// ------------------------------------------------------- Challenge #13 - Tip calculator
const tip = () => {
    let saucer = parseFloat(prompt('Enter order value'));
    let askNewSaucer = prompt('Do you want a new order? y/n').toLowerCase();

    while(askNewSaucer === 'y') {
        saucer += parseFloat(prompt('Enter a new order value'));
        askNewSaucer = prompt('Do you want a new order? y/n').toLowerCase();
        COUNT++;
    }

    let tip = parseFloat(prompt('What percentage of tip do you want to give? | Remember that it must be greater than 5%'));
    if (tip < 5) {
        alert('The tip have be that greater than 5%');
    } else {
        let tipResult = (saucer * tip) / 100
        let result = (`Total order value: $${saucer} | Tip value: $${tipResult} | Total value: $${saucer + tipResult}`);
        return(result);
    }
}
// console.log(tip());



// ------------------------------------------------------- Challenge #14 - Primer numbers
const primerNumber = () => {
    let limit = parseInt(prompt('Numero limite')) 

    let numeros = []
    for (let i = 2; i <= limit; i++){
      if (primo(i)){
        numeros.push(i)
      }
    }

    function primo(numero) {
      for (let x = 2; x < numero; x++){
        if (numero % x === 0){
          return false
        }
      }
      return numero !== 1
    }
    console.log(numero)
}
    
console.log(primerNumber())

// ------------------------------------------------------- Challenge #15 - Volume calculator
const PI = Math.PI;

const cylinder = p => {
    let askHeight = parseFloat(prompt('Enter the height'));
    let askRadio = parseFloat(prompt('Enter the radio'));

    let result = (askHeight * p * (askRadio**2)).toFixed(1);
    return (`Height: ${askHeight} | Radio: ${askRadio} | The volume is: ${result} m³`);
};

const cube = () => {
    let askSide1 = parseFloat(prompt(`Enter the one side`));
    let askSide2 = parseFloat(prompt(`Enter the second side`));
    let askSide3 = parseFloat(prompt(`Enter the third side`));
    
    let result = (askSide1 * askSide2 * askSide3).toFixed(1)
    return (`Side 1: ${askSide1} | Side 2: ${askSide2} | Side 3: ${askSide3} | The volume is: ${result} m³`);
}

const sphere = p => {
    let askRadio = parseFloat(prompt('Enter the radio'));

    let result = ((4/3) * p * (askRadio**3)).toFixed(1);
    return (`Radio: ${askRadio} | The volume is: ${result} m³`);
}

const printVolume = () => {
    let askFigure = prompt('What of the figure do you want to calculate the volume of? | Cylinder, cube or sphere').toLowerCase();
    if (askFigure === 'cylinder') {
        console.log(cylinder(PI));
    }
    else if (askFigure === 'cube') {
        console.log(cube());
    }
    else if (askFigure === 'sphere') {
        console.log(sphere(PI))
    }
    else {
        console.log('Please enter a valid figure')
    }
}
// printVolume();



// ------------------------------------------------------- Challenge #16 - Calculator v2


// ------------------------------------------------------- Challenge #17 - Numbers from highest to lowest
const random = () => {
    const LIMIT = 10;
    let allNumbers = [];
    for (let i = 0; i < LIMIT; i++) {
        allNumbers.push(Math.floor(Math.random() * 100));
    }
    return allNumbers
}

const positiveNumbers = n => n.sort((a, b)=> a - b);
// console.log(positiveNumbers(random()));

const negativeNumbers = n => n.sort((a, b) => b - a);
// console.log(negativeNumbers(random()))


// ------------------------------------------------------- Challenge #18 - Memory part 1
const memory1 = () => {
    const characters = ['"','#','$','%','(',')','/','&'];
    let result = [];

    for(let i = 0; i < 4; i++) {
        result += characters[Math.floor(Math.random() * characters.length)]; 
    }
    console.log(result) 
}
// memory1()



// ------------------------------------------------------- Challenge #19 - Memory part 2
const memory2 = () => {
    const characters = ['"','#','$','%','(',')','/','&'];
    let result = [];

    for(let i = 0; i < characters.length; i++) {
        result += characters[Math.floor(Math.random() * characters.length)]; 
        console.log(`In the position ${i + 1} => The result is ${result[i]}`) 
    }
    console.log(`All order is: ${result}`)
}
// memory2()


// ------------------------------------------------------- Challenge #20 - Memory part 3
const memory3 = () => {
    const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
    let result = [];
    
    for(let i = 0; i < numbers.length; i++) {
        result += numbers[Math.floor(Math.random() * numbers.length)]; 
        console.log(`In the position ${i + 1} => The result is ${result[i]}`);
    }

    for(let n = 0; n <  numbers.length; n++) {
        let correctPosition = prompt('Enter the correct positions of the symbols show');
        if(correctPosition === result[n]) {
            console.log('Great!! The symbol entered is correct')
        } else {
            console.log('Oh, that symbol position is wrong. Try again!!')
        }
    }
    console.log(`All order is: ${result}`)
}
//memory3()
