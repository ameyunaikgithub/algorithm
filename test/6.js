const callx2 = require('../solutions/6.js');

const test = (num) =>{
  let count =0;
  let pass=true;

  const hello = (a) =>{
    count=count+1;
    if(a!=count){
      pass=false;
    }
  }
  callx2(hello,num);
  if (count==num && pass){
    console.log ('correct');
  }
  else{
    console.log('wrong');
  }
}

test(1);
test(4);
test(5);
