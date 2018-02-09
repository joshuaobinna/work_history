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
days = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday',];
getFirstDay(days);
function getFirstDay(days) {
return day.slice(0, 1);
}


// 2. write a function that takes an array as its first parameter and returns
// the last item in the array
toDoList = ['study', 'movies', 'laundary', 'soccer', 'work'];
selectLastItem(toDoList);
function selectLastItem(toDoList) {
return toDoList.slice(-1);
}

// 3. write a function that takes an array as its first parameter and a value as
// its second parameter. The function returns a new array with the value added to
// beginning of the array.
 cost = ['$2', '$3', '$4', '$5'];
 addedCost = '$1';
 listTotalCost(cost, addedCost);
 function  listTotalCost(cost, addedCost) {
 cost.unshift(addedCost);
 let newCost = cost;
 {
   return newCost;
 }
};
// 4. write a function that takes an array as its first parameter and a value as
// its second parameter. The function returns a new array with the value added to
// end of the array.
 customers = ['Ben', 'Kate', 'Mustafi', 'Ebuka', 'Bola'];
 newcustomer = 'Steve';
 showAllCustomers(array, value);
 function showAllCustomers(customers, newCustomer) {
 customers.push(newCustomer);
 let allCustomers = customers; {
      return allCustomers;
   }
};

// 5. write a function that takes an array as its first parameter, a value as
// its second parameter and an index as the third parameter. The function returns
// a new array where the value can be found at that given index.
courses = ['Physics', 'Chemistry', 'Biology'];
value = 'accounting';
index = 1;
getAllCourses(courses, value, index);
function getAllCoourses(courses, value, index) {
  courses[1] = value;
  let allCourses = courses; {
    return allCourses;
  }
}
