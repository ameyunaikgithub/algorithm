
const solution = require('../solutions/2.js');
// solution = require('../yourSolution').solution;

const test = (a, b,c, result) => {
  if(solution(a,b,c) === result) {
    console.log(`Correct`);
  } else {
    console.log(`Wrong. Expected:`, result);
  }
};

test(5,6,7,7);
test(3,2,6,2);
test(3,2,5,5);
