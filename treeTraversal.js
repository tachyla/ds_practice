const BFS = () => {
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
