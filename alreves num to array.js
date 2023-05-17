function digitize(n) {
let reves = n.toString().split("");
let alreves=[];
for (let num of reves){
    alreves.unshift(num);
}
return alreves;
}

console.log(digitize(35231));


/*   


otra solucion

function digitize(n) {
  return String(n).split('').map(Number).reverse()
}


*/