const testGraph = require('./testGraph.js');
const Queue = require('../../../data_structures/nodeJs/queues.js');

const breadthFirstTraversal = (start) => {
  const visitedVertices = [start];
  const visitQueue = new Queue();
  visitQueue.enqueue(start);
  while (!visitQueue.isEmpty()) {
    const current = visitQueue.dequeue();
    console.log(current.data);
    current.edges.forEach((edge) => {
      const neighbor = edge.end;

      if (!visitedVertices.includes(neighbor)) {
        visitedVertices.push(neighbor);
        visitQueue.enqueue(neighbor);
      }
      
    })
  }
  
};

/* TEST IT */
/* breadthFirstTraversal(testGraph.vertices[0]); */
