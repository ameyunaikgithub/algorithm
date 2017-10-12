const solution = require('../solutions/8.js');

const test =(num,result)=>{
  if (solution(num)==result){
    console.log(" your code is correct");
  }
  else{
    console.log(`your code is wrong expected: ${result} , actual : ${solution(num)}` );
  }
}
test (5,true);
test (10,false);
test(10,true);

