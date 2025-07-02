function fizzBuzz(num) {
        
    const result = [];
    let set13 = false;

    if (num % 3 == 0) {
        result.push("Fizz");
    }

    if (num % 13 == 0) {
        set13 = true;
        result.push("Fezz");
    }

    if (num % 5 == 0) {
        result.push("Buzz");
    }

    if (num % 7 == 0) {
        result.push("Bang");
    }

    // 11 overwrites all updates apart the possible Fezz from 13
    if (num % 11 == 0) {
        // clear the array
        result.length = 0;
        if (set13) {
            result.push("FezzBong");
        } else {
            result.push("Bong");
        }
    }

    // 17 reverses the order of words
    if (num % 17 == 0) {
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

for (let i = 1; i <= 100; i++) {
    console.log(fizzBuzz(i))
}
