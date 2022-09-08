class Node{
    constructor(value){
        this.value = value;
        this.next = null;
    }
};

class LinkedList {
    constructor(node_value){
        const createdNode = new Node(node_value);
        this.head = createdNode;
        this.tail = createdNode;
        this.length = 1;
    }   

    push(value){
        const addedNode = new Node(value);

        //zero nodes exists
        if(!this.head){
            this.head = addedNode;
            this.tail = addedNode;
        }

        //node exists
        else{
            this.tail.next = addedNode;
            this.tail = addedNode;
        }
        this.length++;
        return this;
    }

    pop(){
        //Zero nodes exist
        if(!this.head){
            return undefined;
        }

        //nodes exists
        let temp = this.head;
        let pre = this.head;
        pre = temp;
        
        while(temp.next){
            temp = temp.next;//temp moves 1 node forward
        }
        this.tail = pre;
        this.tail.next = null;
        this.length--;

        if(this.length === 0){
            this.head = null;
            this.tail = null; 
        }
        return temp;   
    }

    unshift(node_value){
        const uNode = new Node(node_value);
        if(!this.head){
            this.head = uNode;
            this.tail = uNode;
        }
        else{
            uNode.next = this.head;
            this.head = uNode;
        }
        this.length++;
        return this;
    }

    get(index){
        if(index < 0 || index >= this.length){
            return undefined;
        }
        
        let temp = this.head;
        
        for(let i = 0; i > index; i++){
            console.log(i);
            temp = temp.next;
        }
        return temp;
    }
}

const coolLl = new LinkedList(7);
console.log(coolLl);

