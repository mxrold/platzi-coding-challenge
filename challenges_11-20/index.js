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



