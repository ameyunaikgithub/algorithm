

const GD = (a,i=0,ans=0)=>{
  if(i>=a)
  {
    return ans;
  }
  if (a%i==0)
  {
    ans=i;
  }
  return GD(a,i+1,ans);
}
module.exports= GD;
