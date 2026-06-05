import { DoubleLinkedList } from "./DoubleLinkedList.mjs";

class Deque {

    constructor() {
        this.list = new DoubleLinkedList();
    }

    // printAll - 모든 데이터 출력
    printAll() {
        this.list.printAll();
    }

    // addFirst - head에 데이터 삽입
    addFirst(data) {
        this.list.insertAt(0, data);
    }

    // removeFirst - head에 데이터 제거
    removeFirst() {
        try {
            return this.list.deleteAt(0);
        } catch(e) {
            return null;
        }
    }

    // addLast - tail에 데이터 삽입
    addLast() {
        this.list.insertLast(data);
    }

    // removeLast - tail에 데이터 제거
    removeLast() {
        try {
            return this.list.deleteLast();
        } catch(e) {
            return null;
        }
    }

    // isEmpty - 리스트가 비었는지 체크
    isEmpty() {
        return (this.list.count===0);
    }

} // class

export { Deque };