import { LinkedList } from "./js실습/linkedlist.mjs";

class Stack {

    constructor() {
        this.list = new LinkedList();
    }
    // push - 데이터 삽입
    push(data) {
        this.list.insertAt(0, data);
    }
    // pop - 데이터 제거
    pop() {
        
        try {
            return this.list.deleteAt(0);
        }
        catch(e) {
            return 'null';
        }
        
    }
    // peek - 데이터 참조
    peek() {
        return this.list.getNodeAt(0);
    }
    //isEmpty - 비었는지 확인
    isEmpty() {
        return (this.list.count===0);
    }

} // Stack

export {Stack};