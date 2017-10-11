const callx2=(fun,num,i=1)=>{
  fun(i);
  if(i=num){
    return;
  }
  return callx2(fun,num,i+1);
}
module.exports=callx2;
