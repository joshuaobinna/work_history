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
// every item in the array
names = ['Messi', 'Ronaldo', 'Morata', 'Hazard', 'Ozil', 'Sanchez', 'Mikel'];
getPlayers(names);
function listPlayers(players) {
  for (let namesIndex = 0; namesIndex < names.length; namesIndex++) {
    console.log(names[namesIndex]);
  }
}

// 2. write a function that takes an array as its first parameter and console logs
// every item with an odd index
players = ['Messi', 'Ronaldo', 'Morata', 'Hazard', 'Ozil', 'Sanchez', 'Mikel'];
getOddIndex(players);
function getOddIndex(players) {
  for (let playersIndex = 0; playersIndex < players.length; playersIndex+=2) {
    console.log(players[playersIndex]);
  }
}


// 3. write a function that takes an array as its first parameter and console logs
// every item with an even index
players = ['Messi', 'Ronaldo', 'Morata', 'Hazard', 'Ozil', 'Sanchez', 'Mikel'];
getEvenIndex(players);
function getEvenIndex(players) {
  for (let playersIndex = 1; playersIndex < players.length; playersIndex+=2) {
    console.log(players[playersIndex]);
  }
}


// 4. write a function that takes an array as its first parameter and a searchValue as
// its second parameter. The function returns true if the searchValue is in the array
// and false if it is not
players = ['Messi', 'Ronaldo', 'Morata', 'Hazard', 'Ozil', 'Sanchez', 'Mikel'];
searchValue = 'Sanchez';
function findSearchValue(players, searchValue) {
return players.includes(searchValue);
}//output: true

// 5. write a function that takes an array as its first parameter, and a replaceValue as
// its second parameter. The function returns a new array where all the values in the
// array have been overwritten by the replaceValue.
array = ['A', 'B', 'C', 'D'];
replaceValue = 'E';
function overwriteArray(array,replaceValue){
  for (let arrayIndex = 0; arrayIndex <= array.length; arrayIndex++);
  array.splice(0, array.length, replaceValue);
  let array = newArray;
  return newArray;
}

// 6. write a function that takes an array as its first parameter, a searchValue as
// its second parameter and a replaceValue as the third parameter. The function returns
// a new array where only the searchValue has been overwritten by the replaceValue.
function overwriteSearchValue(array, searchValue, replaceValue){
  for (let arrayIndex = 0; arrayIndex <= array.length; arrayIndex++){
    if (array[arrayIndex] === searchValue){
      let r = array.indexOf(searchValue);
      array.splice(r, 1, replaceValue);
      let array = newArray;
      return newArray;
    }
  }
}overwriteSearchValue(['herd', 'stranger', 'above',], 'stranger', 'beauty');
