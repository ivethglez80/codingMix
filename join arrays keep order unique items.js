function uniteUnique(...arr) {
    let newArr = [];
    for (let i=0; i<arr.length; i++){
      newArr = newArr.concat(arr[i]);
    }
    let mySet = new Set(newArr)
    return Array.from(mySet);
  }
  
  console.log(uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]));

  /*une arrays dados por argumentos y devuelve un set de los array unidos en el orden original"