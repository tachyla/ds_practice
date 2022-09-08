class Node {
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

class LinkedList {
    constructor(value){
        const createdNode = new Node(value);
        this.head = createdNode;
        this.tail = this.head; //
        this.length = 1;
    }
    //adds value 
    push(value){
        const addedNode = new Node(value);
        
        //if no head exists
        if(!this.head){
            this.head = addedNode;
            this.tail = addedNode;
        }

        //head exists
        else {
            this.tail.next = addedNode;
            this.tail = addedNode;
        }
        //increase LinkedList's length by 1
        this.length++;
        return this;
    }

    pop(){
        // Zero Nodes case
        if(!this.head){
            return undefined;
        }

        let temp = this.head;
        let pre = this.head;

        //this redirects the pre pointer to point to where temp points
        pre = temp;

        // multiple Node case
        while(temp.next){
            temp = temp.next;
        }
        //where the loop breasks because temp.next === null; Set this.tail equal to pre
        this.tail = pre;
        this.tail.next = null;
        this.length--;

        //Only One Node case
        if(this.length === 0){
            this.head = null;
            this.tail = null;
        }
        return temp;
    }
    //adds node with given value to END of the linked list
    unshift(value){
        const uNode = new Node(value);
        // No nodes exist
        if(!this.head){
            this.head = uNode;
            this.tail = uNode;
        } else{
        // Node(s) exist
        uNode.next = this.head;
        this.head = uNode;
        }
        this.length++;
        return this;
    }
    //removes node Zero of linked list
    shift(){
        //ZERO nodes exist
        if(!this.head) return undefined;
        //Node(s) exists
        let temp = this.head;
        this.head = this.head.next;
        this.length--;
        if(this.length === 0){
            this.tail = null;
        }
        temp.next = null;
        return temp;
    }
    //gets || returns the node at the given index 
    get(index){
        if(index < 0 || index >= this.length) return undefined;
        
        let temp = this.head;
        for(let i = 0; i < index; i++){
            temp = temp.next;
        }
        return temp;
    }

    //updated the given index with the given value
    set(index, value){
        let temp = this.get(index);
        if(temp){
            temp.value = value;
            return true;
        }
        return false;
    }
    
    //inserts a value at the given index
    insert(index, value){
        if(index === 0) this.unshift(index);
        if(index === this.length) this.push(index);
        if(index < 0 || index >= this.length) return false;

        let insertedNode = new Node(value);
        let temp = this.get(index - 1);
        insertedNode.next = temp.next;
        temp.next = insertedNode;
        this.length++;
        return true;        
    }

    //removes index from list
    remove(index){
        if(index < 0 || index > this.length) return false;
        if(index === 0) this.shift();
        if(index === this.length - 1) this.pop();
        let before = this.get(index - 1);
        let temp = before.next;
        before.next = temp.next;
        temp = null;
        this.length--;
        return true;
    }
}

let tachylaLL = new LinkedList(7);
console.log(tachylaLL);

tachylaLL.push(88);
console.log(tachylaLL);

tachylaLL.set(1, 50);
console.log(tachylaLL);

tachylaLL.insert(1, 99);
console.log(tachylaLL);

tachylaLL.push(111);
console.log(tachylaLL);

tachylaLL.remove(2);
console.log(tachylaLL);