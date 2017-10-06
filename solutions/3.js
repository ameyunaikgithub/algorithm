const multiple = (a,string,i=0)=>{
  let str="";
  if(i==a)
  {
   return str;
  }
  else
  {
    str=str+string;
    console.log(str);
  }
  multiple(a,string,i+1);
}
multiple(5,"amey");
