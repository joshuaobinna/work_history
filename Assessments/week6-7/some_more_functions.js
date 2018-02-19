/**
  Its important that you keep practicing creating functions. Here are some more
  that you will need to implement

  ```
  function {{name_of_function}} {
    // Write your code here
  }

  OR

  const {{name_of_function}} = () => {
    // Write your code here
  }

*/

// 1. write a function that takes a string as its first parameter. This function
// counts the number of vowels in the string and returns that number.
// EX1:
  // sample input: "Hello World"
  // sample output: 3
  const words = "confidence";
  countVowels(words);
  function countVowels(words) {
    const numbers = words.match(/[aeiou]/gi).length;
    return numbers;
  }

// 2. write a function that takes a string as it first parameter. This function
// return a new string with the first 3 letters lower-cased. If the string is less
// than 3 letters long, this function will return the new string with all letters
// upper-cased.
// EX1:
  // sample input: "HELLO"
  // sample output: "helLO"
// EX2:
  // sample input: "he"
  // sample output: "HE"
  let words = 'CAPITALIZE';
   getCases(words);
   function getCases(words) {
        if (words.length < 3 ) {
        let newStr1 = words.toUpperCase();
         return newStr1;
   }
        else if ( words.length >= 3) {
        let newStr2  = words.slice(0, 3).toLowerCase() + words.slice(3).toUpperCase();
        return newStr2;
   }
}

// 3. write a function that takes a string as it first parameter. This function
// returns the first half of the string if the string is even length. Otherwise,
// it will return null;
// EX1:
  // sample input: "HelloWorld"
  // sample output: "Hello"
// EX2:
  // sample input: "Hello World"
  // sample output: null
  let str = "Hello Josh";
  getHalfString(str);
  function getHalfString(str) {
          let a = str.length;
       if (a%2 === 0) {
         let halfStr = str.substr(0, a/2);
         return halfStr;
       }
       else {
         return null;
       }
  }


// 4. write a function that takes an array of numbers as its first parameter.
// This function returns the sum of the numbers in the array
// EX:
  // sample input: [1, 7, 1, 4, 1, 6, 4, 5]
  // sample output: 29
  array = [1, 2, 3, 4, 5, 6];
  getSum(array);
  function getSum(array)
  {
     let reducer = (accumulator, currentValue) => accumulator + currentValue;
     let  sum = array.reduce(reducer);
      return sum;
  }

// 5. write a function that takes an array of numbers as its first parameter.
// This function returns an the number that is the most frequent in the array
// EX:
  // sample input: [1, 7, 1, 4, 1, 6, 4, 5]
  // sample output: 1
   array = [1, 2, 3, 4, 2, 1, 1];
   getMostFreq(array);
   function getMostFreq(array) {
     if (array.length == 0) {
     return null;
   }
     let modeMap = {},
     let maxCount = 1;
     let modes = [array[0]];
     for (let arrayIndex = 0; arrayIndex < array.length; arrayIndex++) {
     let num = array[arrayIndex];
     if (modeMap[num] == null){
     let modeMap[num] = 1;
   }
     else{ modeMap[num]++;
   }
     if(modeMap[num] > maxCount) {
     mostFrequent = num;
       maxCount = modeMap[num];
     }
     }
       return mostFrequent;
    }
