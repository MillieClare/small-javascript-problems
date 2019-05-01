function forLoop20() {
    console.log('numbers 10-20');
    for (let i = 10; i <= 20; i++) {
        console.log(i);
    }
}
forLoop20();

function forLoopMinus8() {
    console.log('0 to -8');
    for (let i = 0; i > -9; i--) {
        console.log(i);
    }
}
forLoopMinus8();

function forLoopMultiplesOf5() {
    console.log('multiples of 5 to 50');
    for (let i = 0; i <= 50; i += 5) {
        console.log(i);
    }
}
forLoopMultiplesOf5();

function forLoop2To10000() {
    console.log('double to 10000');
    for (let i = 2; i <= 10000; i *= 2) {
        console.log(i);
    }
}
forLoop2To10000();


/* 

This will print the numbers 0 to 9 in order.
Can you change line 2 so that the program prints out the folowing:

1) starting at 10 counts up to 20,
2) starting at 0 count down until you reach -8,
3) starting at 0 count up in units of 5 until you get to 50,
4) starting at 2, double until you reach 10,000 (i.e starts with 2, 4, 8, 16...),

STRETCH GOAL

Can you print out all the numbers from the fibonacci sequence up to 1000, only modifying code blocks on line 24 and 28
(This is more of a logic puzzler, probably good to do at home!)
*/


function init() {
    j = 0;
    k = 1;
    i = j + k;
}

function cont() {
    k = j;
    j = i; 
    i = j+k;
}

let i;
let j;
let k;

function fib(){
for (init(); i < 1000; cont()) {
    console.log('i am i', i);

}
}
fib()