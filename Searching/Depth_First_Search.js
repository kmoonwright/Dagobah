// Depth-First Search
// A traversing algorithm for searching tree or graph data structures. Starting at 
// the root node, DFS searches the entire node branch down to its leaf before being 
// forced to backtrack and expand to other nodes

// Time Complexity: O(n ^ 2)
// Space Complexity: O(n ^ 2)

function depthFirstSearch(root, targetVal) {
    let stack = [root];

    while (stack.length) {
        let node = stack.pop();

        if (node.val === targetVal) {
            return node;
        }

        if (node.right) stack.push(node.right);
        if (node.left) stack.push(node.left);
    }
    return null;
}
