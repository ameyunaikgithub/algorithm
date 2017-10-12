const solution = require('../solutions/7.js');

const test = (a,res)=>{
  if(solution(a)==res){
    console.log("correct");
  }
  else{
    console.log("wrong");
  }
};
test(10,5);
test(15,5);
test(10,2);
