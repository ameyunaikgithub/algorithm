const prime = (num,i=2)=>{
  if (num<i){
    return false;
  }
  if (num%i==0){
    if(num==i){
      return true;
    }
    return false;
  }
  return true;
  return prime (num,i+1);
}
module.exports=prime;
