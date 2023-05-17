
// function LinkedList() {
//   this.head=null
//   this._length=0
// }


// function Node(value) {
//   this.value=value
//   this.next=null
// }

// LinkedList.prototype.add=function(value){
//   let node = new Node(value)
//   if (!this.head) this.head=node
//   else{
//     let current=this.head
//     while(current.next){
//       current=current.next
//     }
//     this._length++;
//     current.next=node
//   }
// }

// LinkedList.prototype.remove=function(){
//   if(!this.head) return null

//   let current=this.head
  
//   if(!current.next){
//     let aux=this.head.value
//     this.head=null
//     return aux
//   }

//   while(current.next.next){
//     current=current.next
//   }

//   let aux=current.next.value
//   current.next=null
//   this._length--;
//   return aux
// }

// LinkedList.prototype.search=function(arg){
//  let current=this.head;
//  while(current){
//   if(typeof arg==="function"){
//     if (arg(current.value)) return current.value
//   }else{
//     if (current.value===arg) return arg
//   }
//   current=current.next
// }
// return null
// }

// LinkedList.prototype.reverse=function(){
//     let prev=null
//     let current=this.head
    
//  while (current){
//     let next=current.next
//     current.next=prev
//     prev=current
//     current=next
//  }
//     this.head=prev
// }

// LinkedList.prototype.getAll = function(){
//   let current = this.head //empezamos en la cabeza
//   if(!current){
//       console.log('La lista esta vacia!')
//       return
//   }
//   while(current){
//       console.log(current.value);
//       current = current.next;
//   }
//   return
// };



/* ARRIBA FUNCION CONSTRUCTORA, ABAJO CLASES ************************************ */

class LinkedList {
  constructor() {
    this.head = null;
    this._length = 0;
  }
  add(value) {
    let node = new Node(value);
    if (!this.head)
      this.head = node;
    else {
      let current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = node;
      this._length++;
    }
  }
  remove() {
    if (!this.head)
      return null;
    let current = this.head;

    if (!current.next) {
      let aux = this.head.value;
      this.head = null;
      this._length--;
      return aux;
    }

    while (current.next.next) {
      current = current.next;
    }
    let aux = current.next.value;
    current.next = null;
    this._length--;
    return aux;
  }
  search(arg) {
    let current = this.head;
    while (current) {
      if (typeof arg === "function") {
        if (arg(current.value)) {
          return current.value;
        }
        else {
          if (arg === current.value) {
            return arg;
          }
        }
      }
      current = current.next;
    }
    return null;
  }
  reverse() {
    let prev = null;
    let current = this.head;
    while (current) {
      let next = current.next;
      current.next = prev;
      prev = current;
      current = next;
    }
    this.head = current;
  }
  getAll() {
    let current = this.head;
    if (!current) {
      console.log("lista vacia");
      return;
    }
    while (current) {
      console.log(current.value);
      current = current.next;
    }
    return;
  }
}

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

































/* ****************TEST************************/
let lista = new LinkedList();
lista.add("pasto verde");
console.log(lista);
lista.add("hoyo");
console.log(lista);
lista.add("arbol");
console.log(lista);
lista.add("rama");
console.log(lista);

// lista.reverse();
// lista.remove();
// lista.getAll();



