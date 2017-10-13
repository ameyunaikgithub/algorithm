
const GCD = require('../solutions/9.js');
const test = (a,b,c) => {
  if(GCD(a,b)==c) {
    console.log(GCD(a,b));
    console.log("Correct");
  } else {
    console.log(GCD(a,b));
    console.log("Wrong");
  }
};

test(10,100,10);
test(9,6,3);
test(9,6,6);
test(10,5,5);

