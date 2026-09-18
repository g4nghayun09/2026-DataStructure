import { Queue } from "../Queue.mjs";

class Vertex {

    constructor(value) {
        this.value = value;
        this.adjacent_vertices = [];
    }

    addAdjacentVertex(vertex) {
        this.adjacent_vertices.push(vertex);
    }

    removeAdjacent(vertex) {
        for (let i = 0; i < this.adjacent_vertices.length; i++) {
            if (this.adjacent_vertices[i] == vertex) {
                this.adjacent_vertices.splice(i, 1);
            }
        }
    }
} // class

function BFS(vertex) {
    let queue = new Queue();
    let visited_vertexes = {};
    visited_vertexes[vertex.value] = true;
    queue.enqueue(vertex);

    while (queue.isEmpty() === false) {
        let currentVertex = queue.dequeue().data;
        console.log(`정점 : ${currentVertex.value}`);
        for (let adjacent of currentVertex.adjacent_vertices) {
            if (visited_vertexes[adjacent.value] === true) {
                continue;
            }
            else {
                visited_vertexes[adjacent.value] = true;
                queue.enqueue(adjacent);
            }
        } // for

    } // while

} // BFS

let ben = new Vertex("Ben");
let ivy = new Vertex("Ivy");
let joy = new Vertex("Joy");
let jake = new Vertex("Jake");
let anna = new Vertex("Anna");
let david = new Vertex("David");
let elin = new Vertex("Elin");
let owen = new Vertex("Owen");

ben.addAdjacentVertex(ivy);
ben.addAdjacentVertex(jake);
ben.addAdjacentVertex(anna);
ben.addAdjacentVertex(david);

ivy.addAdjacentVertex(ben);
ivy.addAdjacentVertex(joy);

joy.addAdjacentVertex(ivy);
joy.addAdjacentVertex(jake);

jake.addAdjacentVertex(ben);
jake.addAdjacentVertex(joy);

anna.addAdjacentVertex(ben);

david.addAdjacentVertex(ben);
david.addAdjacentVertex(elin);

elin.addAdjacentVertex(david);
elin.addAdjacentVertex(owen);

owen.addAdjacentVertex(elin);

BFS(elin);

