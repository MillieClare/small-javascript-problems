
const readlineSync = require('readline-sync');

function getName() {
    let answer = readlineSync.question('What is your name? ');
    let answerLowerCase = answer.toLowerCase();
    if(answerLowerCase === 'alice' || answerLowerCase === 'bob'){
        console.log('Hello!');
    } else {
        console.log('Sorry, who are you?');
    }
}
getName();