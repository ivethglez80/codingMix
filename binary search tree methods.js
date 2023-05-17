class BinarySearchTree {
    constructor(value) {
        this.value = value;
        this.right = null;
        this.left = null;
    }
    insert(value) {
        if (value < this.value) {
            if (!this.left) {
                this.left = new BinarySearchTree(value);
                return value;
 
            } else {
                this.left.insert(value);
            }
        }
        if (value > this.value) {
            if (!this.right) {
                this.right = new BinarySearchTree(value);
                return value;
            } else {
                this.right.insert(value);
            }
        }
    }
    size() {
        let count = 1;
        if (this.left)
            count += this.left.size();
        if (this.right)
            count += this.right.size();
        return count;
    }
    contains(value) {
        if (this.value === value)
            return true;
 
        if (value < this.value) {
            if (this.left) {
                return this.value === value || this.left.contains(value);
            }
        } else if (value > this.value) {
            if (this.right) {
                return this.value === value || this.right.contains(value);
            }
        }
        return false;
    }
    // depthFirstForEach(cb, metodo) {
    //     /*
    //     metodo de recorrido:
    //     DFS post-order -> izq der nodo
    //     DFS pre-order -> nodo izq der
    //     DFS in-order-> izq nodo der
    //     */
    //     if(metodo==="in-order" || metodo===undefined) {
    //         if(this.left) this.left.depthFirstForEach(cb,metodo);
    //         cb(this.value);
    //         if(this.right) this.right.depthFirstForEach(cb,metodo);
    //     }
    //     if (metodo === "post-order") {
    //         if(this.left) this.left.depthFirstForEach(cb,metodo);
    //         if(this.right) this.right.depthFirstForEach(cb,metodo);
    //         cb(this.value);
    //     }
    //     if (metodo === "pre-order") {
    //         cb(this.value);
    //         if(this.left) this.left.depthFirstForEach(cb,metodo);
    //         if(this.right) this.right.depthFirstForEach(cb,metodo);
    //     }      
    // }

    depthFirstForEach(cb, metodo) {
        /*
        metodo de recorrido:
        DFS post-order -> izq der nodo
        DFS pre-order -> nodo izq der
        DFS in-order-> izq nodo der
        */
    switch (metodo){
        case "in-order":
        case undefined:
            if(this.left) this.left.depthFirstForEach(cb,metodo);
            cb(this.value);
            if(this.right) this.right.depthFirstForEach(cb,metodo);
            break;
        case "post-order":
            if(this.left) this.left.depthFirstForEach(cb,metodo);
            if(this.right) this.right.depthFirstForEach(cb,metodo);
            cb(this.value);
            break;
        case "pre-order":
            cb(this.value);
            if(this.left) this.left.depthFirstForEach(cb,metodo);
            if(this.right) this.right.depthFirstForEach(cb,metodo);
            break;
    } 
    }

    /**/ 
    breadthFirstForEach(cb, array=[]) {
       if (this.left) array.push(this.left);
       if (this.right) array.push(this.right);
       cb(this.value);
 
       if(array.length>0) array.shift().breadthFirstForEach(cb,array);
    }
 }



















let tree = new BinarySearchTree(20);
console.log(tree);

tree.insert(21);
console.log(tree);

tree.insert(25);
console.log(tree);

tree.insert(1);
console.log(tree);

console.log(tree.size()); 

console.log(tree.contains(25));