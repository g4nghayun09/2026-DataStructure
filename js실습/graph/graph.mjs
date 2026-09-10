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

let jake = new Vertex("Jake");
let ben = new Vertex("Ben");
let joy = new Vertex("Joy");
let ivy = new Vertex("Ivy");
let elin = new Vertex("Elin");
let anna = new Vertex("Anna");
let david = new Vertex("David");
let winter = new Vertex("Winter");

jake.addAdjacentVertex(ben);
ben.addAdjacentVertex(jake);
joy.addAdjacentVertex(ben);
joy.addAdjacentVertex(ivy);
ivy.addAdjacentVertex(joy);
ivy.addAdjacentVertex(ben);
elin.addAdjacentVertex(ivy);
elin.addAdjacentVertex(anna);
anna.addAdjacentVertex(ben);
anna.addAdjacentVertex(david);
anna.addAdjacentVertex(elin);
david.addAdjacentVertex(anna);

jake.addAdjacentVertex(winter);
ben.addAdjacentVertex(winter);
joy.addAdjacentVertex(winter);
ivy.addAdjacentVertex(winter);
elin.addAdjacentVertex(winter);
anna.addAdjacentVertex(winter);
david.addAdjacentVertex(winter);

console.log(anna.adjacent_vertices);
anna.removeAdjacent(david);
console.log(anna.adjacent_vertices);
