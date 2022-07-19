function receivesAFunction(cbFunction) {
    cbFunction();
}

function returnsANamedFunction() {
    const namedFunction = function() {
        2+2;
    }
    return namedFunction;
}

function returnsAnAnonymousFunction() {
    return function() {
        console.log(2+2);
    }
}
// To get more practice with first-class functions, this lesson has three tests to
// pass that require you to write the following functions in the `index.js` file:

// - The `receivesAFunction` function should:

//   - take a _callback function_ as an argument
//   - call the callback function
//   - it doesn't matter what this function returns, so long as it calls the
//     callback function

// - The `returnsANamedFunction` function should:

//   - take no arguments
//   - return a _named function_

// - The `returnsAnAnonymousFunction` function should:
//   - take no arguments
//   - return an _anonymous function_