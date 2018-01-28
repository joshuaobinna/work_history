/**
  In this assessment, you will use your knowledge of javascript loops
  to complete the functions below.

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

// 1. write a function that takes an array as its first parameter and console logs
// every item in the arra
players = ['Messi', 'Ronaldo', 'Morata', 'Hazard', 'Ozil', 'Sanchez', 'Mikel'];
football(players);
function football(players) {
  for (let playersIndex = 0; playersIndex < players.length; playersIndex++) {
    console.log(players[playersIndex]);
  }
}

// 2. write a function that takes an array as its first parameter and console logs
// every item with an odd index
players = ['Messi', 'Ronaldo', 'Morata', 'Hazard', 'Ozil', 'Sanchez', 'Mikel'];
football(players);
function football(players) {
  for (let playersIndex = 0; playersIndex < players.length; playersIndex+=2) {
    console.log(players[playersIndex]);
  }
}


// 3. write a function that takes an array as its first parameter and console logs
// every item with an even index
players = ['Messi', 'Ronaldo', 'Morata', 'Hazard', 'Ozil', 'Sanchez', 'Mikel'];
football(players);
function football(players) {
  for (let playersIndex = 1; playersIndex < players.length; playersIndex+=2) {
    console.log(players[playersIndex]);
  }
}


// 4. write a function that takes an array as its first parameter and a searchValue as
// its second parameter. The function returns true if the searchValue is in the array
// and false if it is not
players = ['Messi', 'Ronaldo', 'Morata', 'Hazard', 'Ozil', 'Sanchez', 'Mikel'];
searchValue = 'Messi';
function football(players, searchValue) {
  for (let playersIndex = 0; playersIndex < players.length; playersIndex++){
    if (players[playersIndex] === searchValue){
      console.log(true);
      return true;
    } else {console.log(false)
    return false;
   }
  }
}

// 5. write a function that takes an array as its first parameter, and a replaceValue as
// its second parameter. The function returns a new array where all the values in the
// array have been overwritten by the replaceValue.
function variable(array,replaceValue){
  for (let arrayIndex = 0; arrayIndex <= array.length; arrayIndex++){
    if (arrayIndex !== replaceValue){
      let r = array.indexOf(array[arrayIndex]);
      array.splice(r, 1, replaceValue);
       //the new array
    } else {}
  }
  console.log(array);
}variable(['herd', 'stranger', 'above',], 'beauty');

// 6. write a function that takes an array as its first parameter, a searchValue as
// its second parameter and a replaceValue as the third parameter. The function returns
// a new array where only the searchValue has been overwritten by the replaceValue.
function variable(array, searchValue, replaceValue){
  for (let arrayIndex = 0; arrayIndex <= array.length; arrayIndex++){
    if (arrayIndex === searchValue){
      let r = array.indexOf(searchValue);
      array.splice(r, 1, replaceValue);
      console.log(array); // the new array
    } else {}
  }
}variable(['herd', 'stranger', 'above',], 'stranger', 'beauty');
