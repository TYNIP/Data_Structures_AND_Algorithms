/* FACTORIAL */
//Normal 
const iterativeFactorial = (n) => {
    result = 1;
    while(n > 0) {
      result *= n;
      n -= 1;
    }
    return result;
  }

  /* ALGORITHM */
//Ex 1
const recursiveFactorial = (n) => {
    if (n === 0) {
      return 1;
    }
    
    if (n > 0){
      console.log(`Execution context: ${n}`);
      
      return recursiveFactorial(n - 1) * n;
    }
  }
  
  const recursiveSolution = recursiveFactorial(5);
  console.log(recursiveSolution);

//Ex 2
const Node = require('../../data_structures/nodeJs/node');
const LinkedList = require('../../data_structures/nodeJs/single_linked_list');

const myList = new LinkedList();

myList.addToHead('Node 1');
myList.addToHead('Node 2');
myList.addToHead('Node 3');
myList.addToHead('Node 4');

// Add checkpoint 2 code below:
const myNodeRecursive = myList.findNodeIteratively('Node 3');
console.log(myNodeRecursive);