class Node{
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

class Queue{
    constructor(value){
        let queueNode = new Node(value);
        this.first = queueNode;
        this.last = queueNode;
        this.length = 1;
        
    }

    enqueue(value){
        let enqueueNode = new Node();
        
        //Zero nodes exist
        if(!this.first){
            
        }
        
    }

    
}

let myQueue = new Queue(77);
console.log(myQueue);