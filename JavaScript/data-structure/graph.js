// Written by: Andrea Law in JavaScript

// Define data structure
function GraphNode(label) {
  this.label = label;
  this.neighbors = new Set();
}

// Create nodes
var a = new GraphNode("a");
var b = new GraphNode("b");
var c = new GraphNode("c");

// Connect nodes
a.neighbors.add(b);
b.neighbors.add(a);
c.neighbors.add(b);
b.neighbors.add(c);

// Create graph
var graph = [a, b, c];

/**
 * Time complexity: O(N+M)
 * We'll have to look at every node O(N) and every edge O(M) at least once, so yeah, we can't get any better than O(N+M)O(N+M).
 * 
 * Edge cases: nodes with no edges
 * Isolated nodes tend to cause problems when we're traversing a graph 
 * (starting from one node and "walking along" edges to other nodes, like we do in a depth-first or breadth-first search). 
 * We're not doing that here—instead, we're iterating over a list of all the nodes.
 * 
 * Edge cases: cycles
 * Cycles also tend to cause problems with graph traversal, because we can end up in infinite loops (going around and around the cycle). 
 * But we're not actually traversing our graph here.
 * 
 * Edge cases: loops
 * A node with a loop is adjacent to itself, so it can't have the same color as . . . itself. 
 * So it's impossible to "legally color" a node with a loop. So we should throw an error.
 */