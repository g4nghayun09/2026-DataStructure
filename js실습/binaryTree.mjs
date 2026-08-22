class BinaryTree {

    constructor(data, leftTree = null, rightTree = null) {
        this.data = data;
        this.leftSubTree = leftTree;
        this.rightSubTree = rightTree;
    }
    getData() {
        return this.data;
    }
    setData(data) {
        this.data = data;
    }
    getLeftSubTree() {
        return this.leftSubTree;
    }
    getRightSubTree() {
        return this.rightSubTree;
    }
    setLeftSubTree(tree) {
        this.leftSubTree = tree;
    }
    setRightSubTree(tree) { // 해당 트리의 오른쪽 서브 크리를 tree로 설정
        this.rightSubTree = tree;
    }
    preOrderTraversal(tree) { // 전위 순회(preOrder) : 루트 -> 왼쪽 -> 오른쪽
        if (tree === null) return; // 기저조건
        console.log(tree.data);
        this.preOrderTraversal(tree.getLeftSubTree());
        this.preOrderTraversal(tree.getRightSubTree());
    }
    inOrderTraversal(tree) { // 중위 순회(inOrder) : 왼쪽 -> 루트 -> 오른쪽
        if (tree === null) return; // 기저조건
        this.inOrderTraversal(tree.getLeftSubTree());
        console.log(tree.data);
        this.inOrderTraversal(tree.getRightSubTree());
    }
    postOrderTraversal(tree) { // 후위 순회 (postOrder) : 왼쪽 ->
        if (tree === null) return; // 기저조건
        this.inOrderTraversal(tree.getLeftSubTree());
        this.inOrderTraversal(tree.getRightSubTree());
        console.log(tree.data);
    }
    removeLeftSubTree() { // 왼쪽 자식 노드를 삭제
        let deletingNode = this.getLeftSubTree();
        this.setLeftSubTree(null);
        return deletingNode;
    }
    removeRightSubTree() { // 오른쪽 자식 노드를 삭제
        let deletingNode = this.getRightSubTree();
        this.setRightSubTree(null);
        return deletingNode;
    }
} // class

export { BinaryTree };