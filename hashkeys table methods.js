function HashTable() {
    this.array= []
    this.numBuckets=35
  }

  HashTable.prototype.hash=function(key){
    let bucket = 0
    for (const char of key) bucket+=char.charCodeAt(0)
    return bucket%this.numBuckets
  }
  
  HashTable.prototype.set=function(key,value){
    if(typeof key !== "string") throw TypeError("Keys must be strings")
    let index=this.hash(key);
    if(!this.array[index]) this.array[index]={}
    this.array[index][key]=value
   }
  
  
  HashTable.prototype.get=function(key){
    let bucket = this.hash(key)
    return this.array[bucket][key] || "no existe"
  }
  
  HashTable.prototype.hasKey=function(key){
    let bucket=this.hash(key)
    return !!this.array[bucket][key]
  }

/* ARRIBA CON FUNCION CONSTRUCTORA, ABAJO CON  CLASE ****************************************************** */

// class HashTable {
//     constructor() {
//         this.array = [];
//         this.numbuckets = 35;
//     }
//     hash(key) {
//         let bucket = 0;
//         for (let char of key)
//             bucket += char.charCodeAt(0);
//         return bucket % this.numbuckets;
//     }
//     set(key, value) {
//         if (typeof key !== "string")
//             throw TypeError("key must be strings");
//         let bucket = this.hash(key);
//         if (!this.array[bucket])
//             this.array[bucket] = {};
//         this.array[bucket][key] = value;
//     }
//     get(key) {
//         let bucket = this.hash(key);
//         return this.array[bucket][key];
//     }
//     haskey(key) {
//         let bucket = this.hash(key);
//         return !!this.array[bucket][key];
//     }
// }











/* *****************TEST*********************** */

  const hashTable = new HashTable();
  hashTable.set("perro", "animal");
  console.log(hashTable);
  console.log(hashTable.get("porre"));
  hashTable.set("porre", "peludo");
  console.log(hashTable);
  console.log(hashTable.get("perro"));
  
  



