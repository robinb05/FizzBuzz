function fizzBuzz(num, rules) {
        
    const result = [];

    if (rules.includes(3) && num % 3 == 0) {
        result.push("Fizz");
    }

    if (rules.includes(13) && num % 13 == 0) {
        result.push("Fezz");
    }

    if (rules.includes(5) && num % 5 == 0) {
        result.push("Buzz");
    }

    if (rules.includes(7) && num % 7 == 0) {
        result.push("Bang");
    }

    // 11 overwrites all updates apart the possible Fezz from 13
    if (rules.includes(11) && num % 11 == 0) {
        // clear the array
        result.length = 0;
        if (rules.includes(13)) {
            result.push("FezzBong");
        } else {
            result.push("Bong");
        }
    }

    // 17 reverses the order of words
    if (rules.includes(17) && num % 17 == 0) {
        result.reverse();
    }

    let result_str = "";
    // if no specific string, then give a number, otherwise get the string from the array
    if (result.length == 0) {
        result_str = num.toString();
    } else {
        for (let i=0; i < result.length; i++) {
            result_str += result[i];
        }
    }

    return result_str;
}

// get the relavent command line args for the rules, convert to integers
// note irrelevant number rules will just be ignored
const args = process.argv.slice(2);
const rules = args.map(str => parseInt(str, 10));
console.log(rules);

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Enter a (positive) number limit: ", (num) => {
    if (num <= 0) {
        console.log("Please enter a positive integer");
        return;
    }
    for (let i = 1; i <= num; i++) {
        console.log(fizzBuzz(i, rules));
    }
    rl.close();
});

// to add new rules, could have user specify a number and a word and append that word to any multiple of the number
// to add more complex rules, perhaps have a system for custom rules - e.g. can specify to overwrite all other rules, and have specialised rules for reversing
// rules might be implemented as objects from a custom rule class
// could add rule priority to all current and new rules, so that they get applied in priority order.
// becomes more complex when rules involve multiple numbers (e.g the 11 and 13 rules interact with each other)
