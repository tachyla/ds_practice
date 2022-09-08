class Graph {
    constructor(vertex) {
        this.adjacencyList = {}; 
    }

    addVertex(vertex){
        if(!this.adjacencyList[vertex]){
            this.adjacencyList[vertex] = [];
            return true;
        }
        return false
    }

    addEdge(vertex1, vertex2){
        if(this.adjacencyList[vertex1] && this.adjacencyList[vertex2]){
            this.adjacencyList[vertex1].push(this.adjacencyList[vertex2]);
            this.adjacencyList[vertex2].push(this.adjacencyList[vertex1]);
            return true;
        }
        return false;
    }

    removeEdge(vertex1, vertex2){
        if(this.adjacencyList[vertex1] && this.adjacencyList[vertex2]){
            this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(v => v != vertex2); 
            this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(v => v != vertex1); 
            return true;

        }
        return false;
    }

    removeVertex(vertex){
        if(vertex){

        }
        return false;
    }

}

const myGraph = new Graph();
myGraph.addVertex('D');
myGraph.addVertex('C');
myGraph.addEdge('D', 'C');
console.log(myGraph);
