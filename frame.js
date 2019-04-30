const readline = require('readline-sync');

function frame(){
    const input = readline.question("input words");
    const words = input.split(' ');
    const largestWordLength = getLargestWord(words)

    getOuterLines(largestWordLength);

    for (let i=0; i < words.length; i++){
        const wordEqualLength = words[i].padEnd(largestWordLength);
        console.log(`* ${wordEqualLength} *`);
    }
    
    getOuterLines(largestWordLength);
}

function getOuterLines(length){
    console.log('*'.repeat(length + 4));
}

function getLargestWord(words){
    let longestwordLength = 0;
    for (let i=0; i < words.length; i++){
        if (words[i].length > longestwordLength){
            longestwordLength = words[i].length;
        }
    }
    return longestwordLength;
}

frame();