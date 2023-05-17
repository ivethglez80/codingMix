function duplicateCount(text){
    let count = 0;
    const set = new Set(text.toLowerCase());
    
    for (let char of set){
      if(text.toLowerCase()
            .indexOf(char)
            !== text.toLowerCase()
            .lastIndexOf(char)){
         count++;
      }
    }
    return count;
  }

  