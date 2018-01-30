/**
  In this assessment, you will be creating new Javascript functions.
  Make sure to read the directions to build the functions carefully.
  You should use the below patterns to write your functions:
  ```
  function {{name_of_function}} {
    // Write your code here
  }

  OR

  const {{name_of_function}} = () => {
    // Write your code here
  }

  ```
*/

function isEven(num) {
  if (num%2 === 0) {
    return 'correct';
  } else {
     return 'incorrect';
   }
}


function subtractByOne(num)
  let subtractByOne = (num -= 1);
  return subtractByOne;
}

function addByOne(num) {
  let addByOne = (num += 1);
   return addByOne;
}

function addNumOneNumTwo(numOne, numTwo) {
  let x = (numOne += numTwo);
   return x;
}

function square(numOne, numTwo) {
  let square = [numOne**2, numTwo**2];
  return square;
}


}
function isOdd(num) {
  if (num%2 !== 0) {
    return true;
  } else {
    return false;
  }
}

function variable(stringOne, stringTwo) {
  return stringOne.concat(stringTwo);
}

function area(rad) {
  let area = 3.14 * (rad**2);
  return area;
}
