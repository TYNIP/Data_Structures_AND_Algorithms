class BinaryTree {
    constructor(value, depth = 1) {
      this.value = value;
      this.depth = depth;
      this.left = null;
      this.right = null;
    }
  
    insert(value) {
      if (value < this.value) {
        if (!this.left) {
            console.log("this left",this.left)
          this.left = new BinaryTree(value, this.depth + 1);
        } else {
            console.log("this left 2222",this.left)
          this.left.insert(value);
        }
      } else {
        if (!this.right) {
          this.right = new BinaryTree(value, this.depth + 1);
        } else {
          this.right.insert(value);
        }
      }
    }
    
    getNodeByValue(value) {
      if (this.value === value) {
        return this;
      } else if ((this.left) && (value < this.value)) {
          return this.left.getNodeByValue(value);
      } else if (this.right) {
          return this.right.getNodeByValue(value);
      } else {
        return null;
      }
    }
  
    depthFirstTraversal() {
      if (this.left) {
        this.left.depthFirstTraversal();
      }
      console.log(`Depth=${this.depth}, Value=${this.value}`);
      if (this.right) {
        this.right.depthFirstTraversal();
      }
    }
  
  };
  
  module.exports = BinaryTree;
  /* TEST IT */
  /* const randomize = () => Math.floor(Math.random() * 40);
  const bt = new BinaryTree(15);
  let numbers = [];
  
  for (let i = 0; i < 10; i++) {
    numbers.push(randomize());
    bt.insert(numbers[i]);
  }
  
  console.log(`Inserted [ ${numbers} ] to binary tree`);
  
  console.log('Depth First Traversal');
  bt.depthFirstTraversal(); */
  
  