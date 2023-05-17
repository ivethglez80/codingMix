function bubbleSort(array){
    let iter = array.length;
    while(iter>0){
        for(let i=0; i<iter; i++){
            let j=i+1;
            if(array[i]>array[j]){
                let temp=array[i];
                array[i]=array[j];
                array[j]=temp;
            }
        }
    iter--;
    }
return array;
}




function insertionsort(array){
    for(let i=1; i<array.length; i++){
        let j = i-1;
        let aux = array[i];
        while (j>=0 && aux<array[j]){
            array[j+1] = array[j];
            j--
        }
    array[j+1] = aux;
    }
return array;
}






function selectionSort(array){
    for(let i=0; i<array.length; i++){
        let min = i;
        for(let j=i+1; j<array.length; j++){
            if (array[j]<array[min]){
                min=j;
            }
        }
        if(min!==i){
            let temp=array[i];
            array[i]=array[min];
            array[min]=temp;
        }
    }
    return array;    
}




function factorear(num) {
    let factAarray = [1];
    let n = 2;
    while(num!=1){
        while(num%n!=0){
            n++;
        }
    factAarray.push(n);
    num = num/n;
    }
return factAarray;
}

let numerin = 180;
console.log(factorear(numerin));





function quickSort(array){
    if (array.length<=1) return array;

let pivot  = array[Math.floor(Math.random()*array.length)];

let equals=[];
let left = [];
let right = [];

for (let i=0;i<array.length;i++){
    if (array[i] !== pivot){
        if (array[i]<pivot){
            left.push(array[i]);
        }else{
            right.push(array[i]);
        }
    }else{
        equals.push(array[i]);
    }
}
return quickSort(left).concat(equals).concat(quickSort(right));
}

let testquick = [9,7,3,1,5,2,6];
console.log(quickSort(testquick));










function mergeSort(array){
        if (array.length<2) return array;
    
        const mitad = Math.floor(array.length/2);
        let left = array.slice(0,mitad); 
    let rigth= array.slice(mitad);

    array=[];

    left = mergeSort(left);
    rigth = mergeSort(rigth);

    while (left.length && rigth.length){
        if (left[0]<rigth[0]){
            array.push(left.shift());
        }else{
            array.push(rigth.shift());
        }
    }
    array=array.concat(left,rigth);
return array;
}
    let testmerge = [9,7,3,1,5,2,6];
    console.log(mergeSort(testmerge));