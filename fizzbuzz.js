for (let i = 1; i <= 100; i++) {
    let result = "";

    // classic fizzbuzz conditions
    if (i % 15 == 0) {
        result = "Fizzbuzz";
    } else if (i % 3 == 0) {
        result = "Fizz";
    } else if (i % 5 == 0) {
        result = "Buzz";
    }

    // multiple of 7 part
    if (i % 7 == 0) {
        result += "Bang";
    }
    
    // override for multiple of 11
    if (i % 11 == 0) {
        result = "Bong";
    }

    // print either number or new string
    if (result != "") {
        console.log(result);
    } else {
        console.log(i.toString());
    }
}
