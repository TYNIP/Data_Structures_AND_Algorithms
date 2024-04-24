const LinkedList = require('../../data_structures/nodeJs/single_linked_list')

const testList = new LinkedList();
for (let i = 0; i <= 10; i++) {
  testList.addToTail(i);
}

testList.printList();
swapNodes(testList, 2, 5);
testList.printList();

/* SWAP ALGORITHM */
function swapNodes(list, data1, data2) {
  console.log(`Swapping ${data1} and ${data2}:`);
  
  let node1Prev = null;
  let node2Prev = null;
  let node1 = list.head;
  let node2 = list.head;

  if (data1 === data2) {
    console.log('Elements are the same - no swap to be made');
    return;
  }
  
  while (node1 !== null) {
    if (node1.data === data1) { 
      break;
    }
    node1Prev = node1;
    node1 = node1.getNextNode();
  }
  
  while (node2 !== null) {
    if (node2.data === data2) {
      break;
    }
    node2Prev = node2;
    node2 = node2.getNextNode();
  }
  
  if (node1 === null || node2 === null) {
    console.log('Swap not possible - one or more element is not in the list');
    return;
  }

  if (node1Prev === null) {
    list.head = node2;
  } else {
    node1Prev.setNextNode(node2);
  }

  if (node2Prev === null) { 
    list.head = node1;
  } else {
node2Prev.setNextNode(node1);
  }
  
  let temp = node1.getNextNode();
  node1.setNextNode(node2.getNextNode());
  node2.setNextNode(temp); 
}

/* 
Two-Pointer Linked List Techniques 
*/

const nthLastNode = ( linkedList, n) => {
   let current = null;
  let tailSeeker = linkedList.head;
  let count = 0;
  while (tailSeeker) {
    tailSeeker = tailSeeker.next;
    if (count >= n) {
      if (!current) {
        current = linkedList.head;
      }
      current = current.next;
    }
    count++
  }
  return current;
};

console.log(nthLastNode(testList, 4));


//solution 1
const findMiddle = linkedList => {
  let fast = linkedList.head;
  let slow = linkedList.head;

  while (fast !== null) {
    fast = fast.getNextNode();
    if (fast !== null) {
      fast = fast.getNextNode();
      slow = slow.getNextNode();
    }
  }
  return slow;
};

//soluction 2
const findMiddleAlternate = linkedList => {
    let count = 0;
    let fast = linkedList.head;
    let slow = linkedList.head;
  
    while(fast !== null) {
      fast = fast.getNextNode();
      if (count % 2 !== 0) {
        slow = slow.getNextNode();
      }
      count++;
    }
    return slow;
  };

/* TEST IT */
/* console.log(findMiddle(testList)); */
