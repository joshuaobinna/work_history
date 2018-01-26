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


function subtractByOne(num) {
  return num- 1;
}

function addByOne(num) {
  return num + 1;
}

function addition(numOne, numTwo) {
  return numOne + numTwo; }
}

function square(numOne, numTwo) {
  return numOne * numOne; numTwo * numTwo;
}

}
function isOdd(num) {
  if (num%2 !== 0) {
    return true;
  } else {
    return false;
  }
}

function countries(Nigeria, Japan) {
  return 'These two countires' + ',' + Nigeria + ','
   + Japan + 'have bilateral relationship' + '.';
}

function square(rad) {
  return rad * rad  * 3.14;
} console.log(square(5));
/* tyring it out on node terminal...
 the out put is 78.5
 */
