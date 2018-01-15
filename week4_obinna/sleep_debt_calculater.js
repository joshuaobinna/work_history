let day = 'wednesday';
const getSleepHours = (day) => {
 if (day === 'Monday') {return 8;}
 else if (day === 'Tuesady') {return 6;}
 else if (day === 'Wednesday') {return 7;}
 else if (day === 'Thursday') {return 5.5;}
 else if (day === 'Friday') {return 9;}
 else if (day === 'Saturday') {return 4.5;}
 else if (day === 'Sunday') {return 4;}
 else {console.log('invalid day');}
}
const getActualSleepHours = () => {
  getSleepHours('Monday' +  'Tuesady' + 'Wednesday' +'Thursday' +  'Friday' + 'Saturday' + 'Sunday');
};
const getIdealSleepHour = () => {
 let idealHour = 7;
 return idealHours * 7;
};
const calculateSleepDebt = () => {
let actualSleepHours = 'getActualSleepHour ()'

let idealSleepHours = 'getIdealSleepHours ()'
};
if (actualSleepHours === idealSleepHours) {console.log('user got the perfect amount of sleep');}
 else if (actualSleepHours > idealSleepHours) {console.log('user got more sleep than needed');}
 else if (actualSleepHours < idealSleepHours) {console.log('user got some resting to do');}
else {console.log(invalid sleepHours);}
if const calculateSleepDebt = () => {
console.log('You got' + (idealSleepHours - actualSleepHours) +  'hours less sleep than you needed this week. Get some rest.'):
}
calculateSleepDebt()
