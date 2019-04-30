const readlineSync = require('readline-sync');
function getFramed() {
    let answer = readlineSync.question('Words to frame');
    let breakAnswer = answer.split(" ").map(function (a) { return `* ${a}` });
    let longestWord = breakAnswer.reduce(function (a, b) { return a.length > b.length ? a : b; });
    for (let i = 0; i < breakAnswer.length; i++) {
        let itemToCompare = breakAnswer[i];
        let itemDifference = longestWord.length - itemToCompare.length;
            for (let j = 0; j <= itemDifference; j++) {
                breakAnswer[i] += " ";
            }
            breakAnswer[i] += "*";
        }
    let asteriksLine = '';
    for (let i = 0; i <= longestWord.length+1; i++) {
        asteriksLine += '*';
    }
    breakAnswer.unshift(asteriksLine);
    breakAnswer.push(asteriksLine);
    let lineBreak = breakAnswer.join('\r\n');
    console.log(lineBreak);
}
getFramed();
