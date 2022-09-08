class Node{
    constructor(value){
        this.value = value
        this.next = null
        this.prev = null
    }
}

class DoubleLinkedList{
    constructor(value){
        const newNode = new Node(value)
        this.head = newNode
        this.tail = newNode
    }

    unshift(value){
        let unshiftNode = new Node(value);
        
        //ZERo Nodes exist
        if(!this.head){
            this.head = unshiftNode
            this.tail = unshiftNode
        }

        //Node exists
        else {
            unshiftNode.next = this.head;
            this.head.prev = unshiftNode;
            this.head = unshiftNode;
        }
        this.length++;
    }

    
}