function getSum(a, b)
{
   let may = 0;
   let men = 0;
  let temArray = [];
  if (a>b){
    may = a;
    men = b;
  }else{
    may = b;
    men = a;
  }
  for (let i=men; i<=may; i++){
  temArray.push(i);
  }  
  return temArray.reduce((suma,valor)=>suma+valor,0);
}


/* otra solucion ****************************************************

const GetSum = (a, b) => {
  let min = Math.min(a, b),
      max = Math.max(a, b);
  return (max - min + 1) * (min + max) / 2;   /* suma de gauss*/
}

/*  mas conciso imposible:  ----------------------------------------------------------------

function GetSum(a,b)
{
  return (Math.abs(a - b) + 1) * (a+b) / 2;
}

*/