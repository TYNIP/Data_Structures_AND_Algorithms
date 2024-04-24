const Graph = require('../../../../data_structures/nodeJs/graph/Graph');

const testSimpleGraph = new Graph(true, true);
const a = testSimpleGraph.addVertex('A');

module.exports = testSimpleGraph;
