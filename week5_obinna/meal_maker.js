const menu = {

  _courses: {
    _appetizers: [],
    _mains: [],
    _desserts: [],

  get appetizers() {

  },
  set appetizers(appetizerIn) {

  },
    get mains() {}

    },
    set mains(appetizerIn) {

    },
    get desserts() {

    },
    set desserts(appetizerIn) {

    },
  get courses() {
    return {
      appetizers: this._courses.appetizers,
      mains: this._courses.mains,
      desserts: this._appetizers,
    };
  } ;
};
addDishToCourse (courseName, dishName, dishPrice)
{
  const dish = {
    name;
    price;
  };
this._courses[courseName].push(dish);

}
getRandomDishFromCourse: function(coursrName){
  const dish =
        this._courses[courseName];
   const randomIndev =
         Math.floor(Math.random() *
dishes.length);
} 
generateRandomMeal: function() {
  const appetizer =
this.getRandomDishFromCourse('appetizers');
  const mains = this.getRandomDishFromCourse('mains');
  const desserts = this.getRandomDishFromCourse('desserts');
  const totalPrice =
  appetizer.price + mains.price + dessets.price

  return `Your meal is ${appetizer.name}, ${main.name}, ${dessert.name}, The price is $${totalPrice}.`;
}
let meal =
menu.addDishToCourse('appetizers', 'Caesar Salad', 4.25);
}
