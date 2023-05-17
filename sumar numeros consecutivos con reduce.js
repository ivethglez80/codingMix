function SeriesSum(n)
{
  return (n.reduce((suma,valor)=>suma+valor,0));
}

console.log (SeriesSum([1.00,1.25,1.39,1.49]))