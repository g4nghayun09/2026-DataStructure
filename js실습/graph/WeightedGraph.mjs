class WeightedGraphVertex {

    constructor(value) {
        this.value = value;
        this.adjacent_vertexes = {};
    } // constructor

    addAdjacentVertex(vertex, weight) {
        this.adjacent_vertexes[vertex.value] = weight;

    } // addAdjacentVertex

    removeAdjacentVertax(vertex) {
        delete this.adjacent_vertexes[vertex.value];
    } // removeAdjacentVertax


} // class

let seoul = new WeightedGraphVertex("서울");
let wonju = new WeightedGraphVertex("원주");
let gangneng = new WeightedGraphVertex("강릉");
let daejeon = new WeightedGraphVertex("대전");
let jeonju = new WeightedGraphVertex("전주");
let daegu = new WeightedGraphVertex("대구");

seoul.addAdjacentVertex(gangneng, 165)
seoul.addAdjacentVertex(wonju, 87)
seoul.addAdjacentVertex(daejeon, 140)
seoul.addAdjacentVertex(jeonju, 187)

console.log(seoul.adjacent_vertexes);
seoul.removeAdjacentVertax(gangneng);
seoul.removeAdjacentVertax(jeonju);
console.log(seoul.adjacent_vertexes);
