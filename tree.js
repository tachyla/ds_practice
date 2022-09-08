const { traverse } = require("@babel/types");

class Node {
    constructor(value){
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BST {
    constructor(){
        this.root = null;
    }

    insert(value){
        const insertNode = new Node(value);

        //root is null
        if(this.root === null) {
            this.root = insertNode;
            return this;
        }
        let temp = this.root;
        //Root has value
        while(true){
            if(insertNode.value === temp.value)return undefined;
            //insert left
            if(insertNode.value < temp.value){
                if(temp.left === null){
                    //insert the created node
                    temp.left = insertNode;
                    return this;
                }
                temp = temp.left;
            }
            // insert right
            else {
                if(temp.right === null){
                    temp.right = insertNode;
                    return this;
                }
                temp = temp.right;
            }
        }   
    }

    contains(value){
        //root is null
        if(this.root === null) return false;

        //value is not in data set
        let temp = this.root;

        while (temp){
            if(value < temp.value){
                //move left
                temp = temp.left;
            }
            else if(value > temp.value){
                //move right
                temp = temp.right;
            }
            else{
                return true};
        } 
        return false
    }

    minValue(currentNode){
        while(currentNode.left != null){
            currentNode = currentNode.left;
        }
        return currentNode;
    }

    BFS() {
        let currentNode = this.root;
        let queue = [];
        let results = [];
    
        queue.push(currentNode);
        while(queue.length){
            currentNode = queue.shift(); //pushed element in at array[0] FRONT
            results.push(currentNode.value);
            if(currentNode.left){
                queue.push(currentNode.left);
            }
            if(currentNode.right){
                queue.push(currentNode.right);
            }
        }
        return results;
    }

    BFS_two() {
        let queue = [];
        let results = [];
        let currentNode = this.root; 
    
        //A. push currentNode into queue
        queue.push(currentNode);
        //B. while queue contains nodes; 
        while(queue.length){
            //remove top frm queue into results arr
            currentNode = queue.shift();

            results.push(currentNode.value);
            if(currentNode.left) queue.push(currentNode.left);
            if(currentNode.right) queue.push(currentNode.right);
        }
        return results;
    } 

      //PRE ORDER
    DFSPreOrder = () => {
        let results = [];
        //recursively call traverse. 
        //recursive call is added to the top of call stack
        //gets removed when the node has called both currentNode.left & currentNode.right
        //pops recursive call off the call stack
       let traverse = (currentNode) => {
            results.push(currentNode.value); //pushes current node into array

            if(currentNode.left) traverse(currentNode.left);
            if(currentNode.right) traverse(currentNode.right);
        }
        traverse(this.root);
        return results;
    }

    //POSTORDER
    DFSPostOrder = () => {
        let results = [];
        let traverse = (currentNode) => {
            if(currentNode.left) traverse(currentNode.left);
            if(currentNode.right)traverse(currentNode.right);
            results.push(currentNode.value);
        }
        traverse(this.root);
        return results;
    }
    //IN ORDER from lowest to highest
    DFSInOrder = () => {
        let results = [];
        let traverse = (currentNode) => {
            if(currentNode.left) traverse(currentNode.left);
                results.push(currentNode.value);
            if(currentNode.right) traverse(currentNode.right);
        }
            
            traverse(this.root);
            return results;
    }
}

let myTree = new BST();

myTree.insert("O");
myTree.insert("J");
myTree.insert("Q");
myTree.insert("G");
myTree.insert("K");
myTree.insert("R");
myTree.insert("T");

//console.log(myTree.contains("K"));
//console.log(myTree.contains("W"));
// console.log(myTree.minValue(myTree.root.right));


// console.log(myTree.DFSPreOrder());
console.log(myTree.BFS_two());
//console.log(myTree.DFSInOrder());
