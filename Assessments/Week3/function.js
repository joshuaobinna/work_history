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
  } else { return 'incorrect';}
} console.log(isEven(num));
 

function subtractByOne(num) {
  return num- 1;
} console.log(subtractByOne(num));

function addByOne(num) {
  return num + 1;
} console.log(addByOne(num));

function addition(numOne, numTwo) {
  return numOne + numTwo; }
  console.log(addition(numOne + numTwo));
}

function square(numOne, numTwo) {
  return numOne * numOne; numTwo * numTwo;
}  console.log(square((numOne * numOne), (numTwo * numberTwo));
  
}
function isOdd(num) {
  if (num%2 !== 0) {
    return true;
  } else {
    return false;
  } console.log(isOdd(num));
} 

function countries(Nigeria, Japan) {
  return 'These two countires' + ',' + Nigeria + ',' + Japan + 'have bilateral relationship' + '.';
} console.log(countries('Nigeria', 'Japan'));
// These two countries, Nigeria,Japan have bilateral relatinship.

function Area(radius) {
  return radius * radius * 3.14;
} console.log(Area(radius));
}
