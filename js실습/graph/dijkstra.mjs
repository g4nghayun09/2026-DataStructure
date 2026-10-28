class City {

} // City

class Dijkstra{

    constructor(name) {
        this.name = name;
        this.adjacent_cities = {};
    } // constructor

    addAdjacent_cities(city, distance) {
        this.addAdjacent_cities[city.name] = distance;
    }

    removeAdjacentCity(city) {
        delete this.addAdjacent_cities[city.name];
    }
    

} // Dijkstra

let seoul = new City("서울");
let wonju = new City("원주");
let gangneung = new City("강릉");
let daejeon = new City("대전");
let jeonju = new City("전주");
let daegu = new City("대구");

// 서울 연결
seoul.addAdjacentCity(wonju, 87);
seoul.addAdjacentCity(gangneung, 165);
seoul.addAdjacentCity(daejeon, 140);
seoul.addAdjacentCity(jeonju, 187);

// 원주 연결
wonju.addAdjacentCity(seoul, 87);
wonju.addAdjacentCity(gangneung, 95);
wonju.addAdjacentCity(daejeon, 118);
wonju.addAdjacentCity(daegu, 178);

// 강릉 연결
gangneung.addAdjacentCity(seoul, 165);
gangneung.addAdjacentCity(wonju, 95);
gangneung.addAdjacentCity(daegu, 212);

// 대전 연결
daejeon.addAdjacentCity(seoul, 140);
daejeon.addAdjacentCity(gangneung, 118);
daejeon.addAdjacentCity(jeonju, 56);
daejeon.addAdjacentCity(daegu, 122);

// 전주 연결
jeonju.addAdjacentCity(seoul, 187);
jeonju.addAdjacentCity(daejeon, 56);
jeonju.addAdjacentCity(daegu, 130);

// 대구 연결
daegu.addAdjacentCity(wonju, 178);
daegu.addAdjacentCity(gangneung, 212);
daegu.addAdjacentCity(daejeon, 122);
daegu.addAdjacentCity(jeonju, 130);