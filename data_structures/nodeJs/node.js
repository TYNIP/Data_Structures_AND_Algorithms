/* NODE */
class Node {
    constructor(data){
        this.data = data;
        this.next = null;
    }

    setNextNode(node){
        if(node instanceof Node || node === null){
            this.next = node;
        } else {
            throw new Error('Not a Node instance');
        }
    }

    getNextNode(){
        return this.next;
    }
}

module.exports = Node;