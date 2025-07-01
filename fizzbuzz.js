for (let i = 1; i <= 100; i++) {
    let result = "";
    let set13 = false;

    if (i % 3 == 0) {
        result += "Fizz";
    }

    if (i % 13 == 0) {
        set13 = true;
        result += "Fezz"
    }

    if (i % 5 == 0) {
        result += "Buzz";
    }

    // multiple of 7 part
    if (i % 7 == 0) {
        result += "Bang";
    }
    
    // 11 overwrites all updates apart the possible Fezz from 13
    if (i % 11 == 0) {
        if (set13) {
            result = "FezzBong"
        } else {
            result = "Bong";
        }
    }

    // if no specific string, then give a number
    if (result == "") {
        result = i.toString();
    }

    console.log(result);
}
