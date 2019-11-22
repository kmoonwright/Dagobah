// GRAPH
// A nonlinear data structure consisting of nodes and edges.The nodes (also referred 
// to as vertices) are connected by edges(lines).

// Differences from a tree: A graph can have undirectional and bidirectional paths 
// between nodes, while a tree can only have one path between two vertices(nodes). 
// In a tree, there is only one root node and every child can only have one parent, 
// while in a graph there is no root node.

class GraphNode {
    constructor(val) {
        this.val = val;
        this.neighbors = [];
    }
}

function buildGraph(edges) {
    let graph = {}
    edges.forEach((edge) => {
        let [dest, src] = edge.map(String);
        if (dest in graph) {
            graph[dest].push(src);
        } else {
            graph[dest] = [src];
        }

        if (!(src in graph)) {
            graph[src] = [];
        }
    });

    return graph;
}


function canFinish(numCourses, prerequisites) {
    let graph = buildGraph(prerequisites);

    let totalCourses = Object.keys(graph).length;

    let visited = new Set();

    let eligibleNodeExists = true;
    while (eligibleNodeExists) {
        eligibleNodeExists = false;

        for (let node in graph) {
            let isEveryParentVisited = graph[node].every((parent) => visited.has(parent));
            if (!visited.has(node) && isEveryParentVisited) {
                eligibleNodeExists = true;
                visited.add(node);
            }
        }

    }
    return visited.size == totalCourses;
}

function maxValue(node, visited = new Set()) {
    if (visited.has(node)) return -Infinity;
    visited.add(node);
    let neighborMaxes = node.neighbors.map((neighbor) => maxValue(neighbor, visited));
    return Math.max(node.val, ...neighborMaxes);
}

function numRegions(graph) {
    let visited = new Set();
    let regions = 0;

    for (let node in graph) {
        if (isNewRegion(node, graph, visited)) regions++;
    }

    return regions;
}

function isNewRegion(node, graph, visited) {
    if (visited.has(node)) return false;

    visited.add(node);

    graph[node].forEach((neighbor) => {
        isNewRegion(neighbor, graph, visited);
    });

    return true;
}


module.exports = {
    GraphNode,
    buildGraph,
    canFinish,
    maxValue,
    isNewRegion
};