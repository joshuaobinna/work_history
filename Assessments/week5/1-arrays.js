/**
  In this assessment, you will use your knowledge of javascript arrays
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

// 1. write a function that takes an array as its first parameter and returns
// the first item in the array
day = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday',];
event(day);
function event(day) {
return day.slice(0, 1);
}


// 2. write a function that takes an array as its first parameter and returns
// the last item in the array
day = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday',];
event(day);
function event(day) {
return day.slice(-1);
}

// 3. write a function that takes an array as its first parameter and a value as
// its second parameter. The function returns a new array with the value added to
// beginning of the array.
 age = [2, 3, 4, 5, 6];
 value = 1;
 variable(age, value);
 function variable(age, value) {
 age.unshift(value);{
 return age;}
 }

// 4. write a function that takes an array as its first parameter and a value as
// its second parameter. The function returns a new array with the value added to
// end of the array.
 age = [1, 2, 3, 4, 5];
 value = 6;
 variable(age, value);
 function variable(age, value) {
 age.push(value);{
 return age;}
 }

// 5. write a function that takes an array as its first parameter, a value as
// its second parameter and an index as the third parameter. The function returns
// a new array where the value can be found at that given index.
age = [1, 2, 3, 4, 5];
value = 6;
index = 1;
variable(age, value,index);
function variable(age, value,index) {
  age[1] = value;
  return age;
}
