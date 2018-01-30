/**
  In this assessment, you will use your knowledge of javascript control flows
  to complete the functions below.
*/

// 1. Complete the `isEven` function
// it returns `true` if the num is even
// and `false` if it is not

function isEven(num) {
  if (num%2 === 0) {
    return true;
  }
  else if (Number.isNaN()) {
    return true;
  }
  else {
    console.log("That is not a number");
  }
}

// 2. The function isNaN(num) will return true if num is not a number
// or false if it is.
// Use isNan to extend your `isEven` function by including an `else if` statement
// that checks whether a num is a number and
// console.log => "That is not a number", if it is not a number

function isEvenV2(num) {
  if (num%2 === 0) {return true;}
  else {return false;}
}

// 3. Complete the switch statment in the `getLunchOrder` with the following
// case conditions:
// > "sandwich" - console.log => "Sure thing! One sandwich, coming up."
// > "soup" - console.log => "Got it! Tomato's my favorite."
// > "salad" - console.log => "Sounds good! How about a caesar salad?"
// > "pie" - console.log => "Pie's not a meal!"
// > "default" - console.log => "How does a sandwich sound?"

function getLunchOrder(lunchOrder) {
  switch(lunchOrder){
      case "sandwich":
       console.log("sure thing! One sandwich, coming up.");
      break;
      case "soup":
       console.log("Got it! Tomato's my favorite.");
      break;
      case "salad":
       console.log("Sounds good! How about a caesar salad?");
      break;
      case "pie":
       console.log("pie's not a meal");
      break;
      default:
        console.log("How does a sandwich sound");
  }
}

// 4. Complete the `shouldINap` function
// it returns `true` if mood is equal to "tired" or "sleepy"
// and `false` if it is not

function shouldINap(mood) {
  if ("mood" === tired || "mood" === sleepy) {
    return true;
  } else {
    retun false;
  }
}

// 5. Extend the `shouldINap` function
// to include an `else if` statement that checks if mood is equal to "energetic"
// then console.log => "Go use that energy and learn more javascript ;)"

function shouldINapV2(mood) {
  if ("mood" === tired || "mood" === sleepy) {
    return true;
  } else if ("mood" === energetic) {
    console.log("Go use that energy and learn more javascript");
  }  else {
    return false;
  }
}
